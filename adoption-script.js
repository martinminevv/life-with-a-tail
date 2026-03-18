// ── adoption-script.js (Firebase version) ──
import {
  auth,
  getAnimals,
  getFavoriteIds, addFavorite, removeFavorite,
  submitApplication
} from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── Translation maps ──
const genderMap = {
  en: { 'male': 'Male', 'female': 'Female' },
  bg: { 'male': 'Мъжко', 'female': 'Женско' }
};
const speciesMap = {
  en: { 'dog': 'Dog', 'cat': 'Cat' },
  bg: { 'dog': 'Куче', 'cat': 'Котка' }
};
const labelMap = {
  en: { name: 'Name', age: 'Date of Birth', breed: 'Breed', sex: 'Sex', species: 'Species', adoptBtn: 'Adopt Me', unknown: 'Unknown' },
  bg: { name: 'Име', age: 'Дата на раждане', breed: 'Порода', sex: 'Пол', species: 'Вид', adoptBtn: 'Осинови ме', unknown: 'Неизвестно' }
};

function formatDateOfBirth(rawValue, lang) {
  if (!rawValue) return '';
  const value = String(rawValue).trim();
  const isIsoDate = /^\d{4}-\d{2}-\d{2}$/.test(value);
  function fmt(d) {
    if (isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
  }
  if (isIsoDate) { const r = fmt(new Date(value + 'T00:00:00')); if (r) return r; }
  const r2 = fmt(new Date(value));
  return r2 || value;
}

// ── State ──
let allAnimals = [];
let currentFilter = 'all';
let favoriteIds = new Set();
let isLoggedIn = false;
let currentModalAnimalId = null;
let currentModalAnimalObj = null;

function getCurrentLang() {
  return document.documentElement.lang || localStorage.getItem('preferredLanguage') || 'bg';
}

// ── Auth state: load favorites when logged in ──
onAuthStateChanged(auth, async (firebaseUser) => {
  if (firebaseUser) {
    isLoggedIn = true;
    try {
      const ids = await getFavoriteIds();
      favoriteIds = new Set(ids);
      // Re-render cards so hearts reflect correct state
      renderFilteredPets();
    } catch (err) {
      console.error('Error loading favorite IDs:', err);
    }
  } else {
    isLoggedIn = false;
    favoriteIds = new Set();
    renderFilteredPets();
  }
});

// ── Load animals from Firestore ──
async function loadAnimalsFromDatabase() {
  try {
    allAnimals = await getAnimals();
    renderFilteredPets();
    setupFilterButtons();
  } catch (error) {
    console.error('Error fetching animals:', error);
  }
}

// ── Filter buttons ──
function setupFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.getAttribute('data-filter');
      renderFilteredPets();
    });
  });
}

function renderFilteredPets() {
  const filtered = currentFilter === 'all'
    ? allAnimals
    : allAnimals.filter(a => (a.species || 'dog') === currentFilter);
  populatePetGrid(filtered);
}

// ── Build pet cards ──
function populatePetGrid(animals) {
  const petsGrid = document.querySelector('.pets-grid');
  if (!petsGrid) return;
  petsGrid.innerHTML = '';

  const lang = getCurrentLang();
  const labels = labelMap[lang] || labelMap.en;
  const genders = genderMap[lang] || genderMap.en;
  const speciesTexts = speciesMap[lang] || speciesMap.en;

  if (animals.length === 0) {
    petsGrid.innerHTML = `<p style="text-align:center;color:#999;grid-column:1/-1;padding:40px 0;">${lang === 'bg' ? 'Няма налични животни.' : 'No animals available.'}</p>`;
    return;
  }

  animals.forEach(animal => {
    const petCard = document.createElement('div');
    petCard.className = 'pet-card';
    const species = animal.species || 'dog';
    petCard.setAttribute('data-species', species);

    const dobText = formatDateOfBirth(animal.age || '', lang);
    const genderText = genders[animal.gender] || animal.gender || labels.unknown;
    const speciesText = speciesTexts[species] || species;
    const isFav = favoriteIds.has(animal.id);
    const imageUrl = animal.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";

    petCard.innerHTML = `
      <div class="pet-image">
        <img src="${imageUrl}" alt="${animal.name}">
        <button class="fav-heart ${isFav ? 'active' : ''}" data-id="${animal.id}" title="Favorite">
          ${isFav ? '&#10084;' : '&#9825;'}
        </button>
      </div>
      <div class="pet-info">
        <div class="pet-name">${animal.name}</div>
        <div class="pet-details-grid">
          <div class="pet-detail-row">
            <span class="pet-label" data-translate="pet-label-breed">${labels.breed}:</span>
            <span class="pet-value">${animal.breed || labels.unknown}</span>
          </div>
          <div class="pet-detail-row">
            <span class="pet-label" data-translate="pet-label-age">${labels.age}:</span>
            <span class="pet-value pet-dob" data-dob="${animal.age || ''}">${dobText}</span>
          </div>
          <div class="pet-detail-row">
            <span class="pet-label" data-translate="pet-label-sex">${labels.sex}:</span>
            <span class="pet-value pet-gender" data-gender="${animal.gender || ''}">${genderText}</span>
          </div>
          <div class="pet-detail-row">
            <span class="pet-label" data-translate="pet-label-species">${labels.species}:</span>
            <span class="pet-value pet-species" data-species-val="${species}">${speciesText}</span>
          </div>
        </div>
        <button class="adopt-btn" data-translate="pet-adopt-btn" data-animal-id="${animal.id}" data-animal-name="${animal.name.replace(/"/g,'&quot;')}">${labels.adoptBtn}</button>
      </div>`;

    // Heart button
    petCard.querySelector('.fav-heart').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(e, animal);
    });

    // Adopt button
    petCard.querySelector('.adopt-btn').addEventListener('click', () => {
      openModal(animal.name, animal.id, animal);
    });

    petsGrid.appendChild(petCard);
  });
}

// ── Re-translate pet cards (called by language-switcher) ──
function retranslatePetCards() {
  const lang = getCurrentLang();
  const labels = labelMap[lang] || labelMap.en;
  const genders = genderMap[lang] || genderMap.en;
  const speciesTexts = speciesMap[lang] || speciesMap.en;

  document.querySelectorAll('.pet-label[data-translate="pet-label-breed"]').forEach(el => el.textContent = labels.breed + ':');
  document.querySelectorAll('.pet-label[data-translate="pet-label-age"]').forEach(el => el.textContent = labels.age + ':');
  document.querySelectorAll('.pet-label[data-translate="pet-label-sex"]').forEach(el => el.textContent = labels.sex + ':');
  document.querySelectorAll('.pet-label[data-translate="pet-label-species"]').forEach(el => el.textContent = labels.species + ':');
  document.querySelectorAll('.pet-dob').forEach(el => el.textContent = formatDateOfBirth(el.getAttribute('data-dob'), lang));
  document.querySelectorAll('.pet-gender').forEach(el => el.textContent = genders[el.getAttribute('data-gender')] || el.getAttribute('data-gender') || labels.unknown);
  document.querySelectorAll('.pet-species').forEach(el => el.textContent = speciesTexts[el.getAttribute('data-species-val')] || el.getAttribute('data-species-val') || '');
  document.querySelectorAll('[data-translate="pet-adopt-btn"]').forEach(el => el.textContent = labels.adoptBtn);
}

// ── Toggle favorite ──
async function toggleFavorite(e, animal) {
  const lang = getCurrentLang();
  if (!isLoggedIn) {
    alert(lang === 'bg' ? 'Моля, влезте в профила си, за да добавите любими.' : 'Please log in to add favorites.');
    window.location.href = 'login.html';
    return;
  }
  const btn = e.currentTarget;
  const isFav = favoriteIds.has(animal.id);
  try {
    if (isFav) {
      await removeFavorite(animal.id);
      favoriteIds.delete(animal.id);
      btn.classList.remove('active');
      btn.innerHTML = '&#9825;';
    } else {
      await addFavorite(animal);
      favoriteIds.add(animal.id);
      btn.classList.add('active');
      btn.innerHTML = '&#10084;';
    }
  } catch (err) {
    console.error('Error toggling favorite:', err);
  }
}

// ── Modal ──
function openModal(petName, animalId, animalObj) {
  currentModalAnimalId = animalId || null;
  currentModalAnimalObj = animalObj || null;
  document.getElementById('petName').textContent = petName;
  document.getElementById('adoptModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('adoptModal').style.display = 'none';
}

// ── Submit adoption application ──
async function submitForm(e) {
  e.preventDefault();
  const lang = getCurrentLang();
  if (!isLoggedIn) {
    alert(lang === 'bg' ? 'Моля, влезте в профила си, за да кандидатствате.' : 'Please log in to submit an application.');
    window.location.href = 'login.html';
    return;
  }
  const message = e.target.querySelector('textarea') ? e.target.querySelector('textarea').value : '';
  try {
    await submitApplication(currentModalAnimalId, message);
    alert(lang === 'bg' ? 'Благодарим за заявката! Ще се свържем с вас скоро.' : 'Thank you for your application! We will contact you soon.');
    closeModal();
    e.target.reset();
  } catch (err) {
    alert(err.message || (lang === 'bg' ? 'Грешка при изпращане.' : 'Submission error.'));
  }
}

window.closeModal = closeModal;
window.submitForm = submitForm;
window.retranslatePetCards = retranslatePetCards;

window.onclick = function (e) {
  const modal = document.getElementById('adoptModal');
  if (modal && e.target === modal) closeModal();
};

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  loadAnimalsFromDatabase();

  // Handle ?pet= query param
  const params = new URLSearchParams(window.location.search);
  const pet = params.get('pet');
  if (pet) {
    setTimeout(() => {
      document.querySelectorAll('.pet-card').forEach(card => {
        const nameEl = card.querySelector('.pet-name');
        if (nameEl && nameEl.textContent.trim().toLowerCase() === pet.toLowerCase()) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
      setTimeout(() => openModal(pet), 500);
    }, 800);
    history.replaceState(null, '', window.location.pathname + window.location.hash);
  }
});