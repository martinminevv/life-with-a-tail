// ── Profile Page Script (Firebase version) ──

import {
  auth,
  getProfile, updateProfile_ as saveProfile,
  getFavorites, removeFavorite as firebaseRemoveFavorite,
  getMyApplications
} from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Status label translations
const statusLabels = {
  en: { pending: 'Pending', reviewing: 'Under Review', approved: 'Approved', declined: 'Declined' },
  bg: { pending: 'Чакащо', reviewing: 'В преглед', approved: 'Одобрено', declined: 'Отказано' }
};

function getLang() {
  return document.documentElement.lang || localStorage.getItem('preferredLanguage') || 'bg';
}

// ── Auth guard: redirect to login if not logged in ──
onAuthStateChanged(auth, async (firebaseUser) => {
  if (!firebaseUser) {
    window.location.href = 'login.html';
    return;
  }
  const profile = await getProfile();
  if (!profile) { window.location.href = 'login.html'; return; }
  initPage(profile);
});

function initPage(profile) {
  // Fill header
  document.getElementById('profileDisplayName').textContent = profile.name || profile.email;
  document.getElementById('profileEmail').textContent = profile.email;
  const since = profile.created_at?.toDate
    ? profile.created_at.toDate().toLocaleDateString()
    : new Date(profile.created_at).toLocaleDateString();
  document.getElementById('profileSince').textContent = since;

  // Avatar letter
  const initial = (profile.name || profile.email || 'U')[0].toUpperCase();
  document.getElementById('profileAvatar').textContent = initial;

  // Fill form
  document.getElementById('pName').value    = profile.name    || '';
  document.getElementById('pEmail').value   = profile.email   || '';
  document.getElementById('pPhone').value   = profile.phone   || '';
  document.getElementById('pAddress').value = profile.address || '';

  // Load tab data
  loadFavorites();
  loadApplications();

  // Tab switching
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      document.getElementById('tab-' + this.dataset.tab).classList.add('active');
    });
  });

  // Save profile form
  document.getElementById('profileForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msgEl = document.getElementById('profileMsg');
    const lang = getLang();
    try {
      const name    = document.getElementById('pName').value;
      const phone   = document.getElementById('pPhone').value;
      const address = document.getElementById('pAddress').value;
      await saveProfile(name, phone, address);
      msgEl.className = 'profile-msg success';
      msgEl.textContent = lang === 'bg' ? 'Промените са запазени!' : 'Changes saved!';
      msgEl.style.display = 'block';
      if (name) {
        document.getElementById('profileDisplayName').textContent = name;
        document.getElementById('profileAvatar').textContent = name[0].toUpperCase();
      }
      setTimeout(() => msgEl.style.display = 'none', 3000);
    } catch {
      msgEl.className = 'profile-msg error';
      msgEl.textContent = lang === 'bg' ? 'Грешка при запазване.' : 'Error saving changes.';
      msgEl.style.display = 'block';
    }
  });
}

// ── Favorites ──
async function loadFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const lang = getLang();
  try {
    const favs = await getFavorites();
    if (favs.length === 0) {
      grid.innerHTML = `<p class="empty-state" data-translate="profile-no-favorites">${lang === 'bg' ? 'Все още нямате любими животни. Разгледайте страницата за осиновяване и натиснете сърчицето!' : "You haven't favorited any pets yet. Browse the adoption page and click the heart icon!"}</p>`;
      return;
    }
    grid.innerHTML = '';
    favs.forEach(a => {
      const imgSrc = a.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e0e0e0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-family='Arial' font-size='14'%3ENo Image%3C/text%3E%3C/svg%3E";
      const card = document.createElement('div');
      card.className = 'fav-card';
      card.innerHTML = `
        <div class="fav-card-image"><img src="${imgSrc}" alt="${a.name}"></div>
        <div class="fav-card-body">
          <div class="pet-name">${a.name}</div>
          <div class="pet-meta">${a.breed} · ${a.age} · ${a.species === 'cat' ? '🐱' : '🐶'}</div>
          <div class="fav-card-actions">
            <button class="btn-adopt-fav" onclick="window.location.href='adoption.html?pet=${encodeURIComponent(a.name)}'">${lang === 'bg' ? 'Осинови' : 'Adopt'}</button>
            <button class="btn-remove-fav" data-id="${a.id}">✕</button>
          </div>
        </div>`;
      grid.appendChild(card);
    });

    // Attach remove listeners
    grid.querySelectorAll('.btn-remove-fav').forEach(btn => {
      btn.addEventListener('click', () => removeFavorite(btn.dataset.id, btn));
    });
  } catch (err) {
    console.error('Error loading favorites:', err);
  }
}

async function removeFavorite(animalId, btn) {
  try {
    await firebaseRemoveFavorite(animalId);
    const card = btn.closest('.fav-card');
    card.style.transition = 'opacity 0.3s, transform 0.3s';
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    setTimeout(() => {
      card.remove();
      const grid = document.getElementById('favoritesGrid');
      if (!grid.querySelector('.fav-card')) {
        const lang = getLang();
        grid.innerHTML = `<p class="empty-state">${lang === 'bg' ? 'Все още нямате любими животни.' : "You haven't favorited any pets yet."}</p>`;
      }
    }, 300);
  } catch (err) {
    console.error('Error removing favorite:', err);
  }
}

// ── Applications ──
async function loadApplications() {
  const list = document.getElementById('applicationsList');
  const lang = getLang();
  const labels = statusLabels[lang] || statusLabels.en;
  try {
    const apps = await getMyApplications();
    if (apps.length === 0) {
      list.innerHTML = `<p class="empty-state" data-translate="profile-no-applications">${lang === 'bg' ? 'Все още нямате заявки за осиновяване.' : "You haven't submitted any adoption applications yet."}</p>`;
      return;
    }
    list.innerHTML = '';
    apps.forEach(ap => {
      const imgSrc = ap.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='70'%3E%3Crect fill='%23e0e0e0' width='70' height='70'/%3E%3C/svg%3E";
      const dateStr = ap.created_at?.toDate
        ? ap.created_at.toDate().toLocaleDateString()
        : new Date(ap.created_at).toLocaleDateString();
      const card = document.createElement('div');
      card.className = 'app-card';
      card.innerHTML = `
        <div class="app-card-image"><img src="${imgSrc}" alt="${ap.animal_name || ap.animal_id}"></div>
        <div class="app-card-info">
          <div class="app-pet-name">${ap.animal_name || ap.animal_id}</div>
          <div class="app-meta">${ap.breed || ''} · ${dateStr}</div>
        </div>
        <span class="app-status ${ap.status}" data-status="${ap.status}">${labels[ap.status] || ap.status}</span>`;
      list.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading applications:', err);
  }
}

// ── Re-translate dynamic content (called by language-switcher) ──
window.retranslateProfileContent = function() {
  const lang = getLang();
  const labels = statusLabels[lang] || statusLabels.en;

  document.querySelectorAll('.app-status[data-status]').forEach(el => {
    el.textContent = labels[el.getAttribute('data-status')] || el.getAttribute('data-status');
  });

  document.querySelectorAll('.btn-adopt-fav').forEach(el => {
    el.textContent = lang === 'bg' ? 'Осинови' : 'Adopt';
  });

  const favGrid = document.getElementById('favoritesGrid');
  const favEmpty = favGrid?.querySelector('.empty-state');
  if (favEmpty && !favGrid.querySelector('.fav-card')) {
    favEmpty.textContent = lang === 'bg'
      ? 'Все още нямате любими животни. Разгледайте страницата за осиновяване и натиснете сърчицето!'
      : "You haven't favorited any pets yet. Browse the adoption page and click the heart icon!";
  }

  const appList = document.getElementById('applicationsList');
  const appEmpty = appList?.querySelector('.empty-state');
  if (appEmpty && !appList.querySelector('.app-card')) {
    appEmpty.textContent = lang === 'bg'
      ? 'Все още нямате заявки за осиновяване.'
      : "You haven't submitted any adoption applications yet.";
  }
};