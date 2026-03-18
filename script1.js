// script1.js — contact & volunteer forms use Firebase

// Note: submitMessage is loaded via a module. We attach it to window so this
// non-module script can call it. The import lives in the inline module below.
// Actually, since this file is loaded as a plain script we use a global promise
// that the inline module sets up.

function scrollToPets() {
  const el = document.getElementById('pets');
  if (!el) return;
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

function openModal(petName) {
  document.getElementById('petName').textContent = petName;
  document.getElementById('adoptModal').style.display = 'block';
}

function redirectToAdoption(petName) {
  window.location.href = `adoption.html?pet=${encodeURIComponent(petName)}`;
}

function closeModal() {
  document.getElementById('adoptModal').style.display = 'none';
}

function submitForm(e) {
  e.preventDefault();
  alert('Thank you for your application! We will contact you soon.');
  closeModal();
  e.target.reset();
}

// Contact form — uses Firebase submitMessage via window._firebaseSubmitMessage
async function submitContactForm(e) {
  e.preventDefault();
  const name    = document.getElementById('cf_name')?.value.trim();
  const email   = document.getElementById('cf_email')?.value.trim();
  const phone   = document.getElementById('cf_phone')?.value.trim();
  const subject = document.getElementById('cf_subject')?.value;
  const message = document.getElementById('cf_message')?.value.trim();
  if (!name || !email || !message) return alert('Please fill in all required fields.');
  const lang = document.documentElement.lang || localStorage.getItem('preferredLanguage') || 'bg';
  try {
    await window._firebaseSubmitMessage(name, email, phone, subject, message);
    alert(lang === 'bg' ? 'Благодарим за съобщението! Ще се свържем с вас скоро.' : 'Thank you for your message! We will get back to you shortly.');
    e.target.reset();
  } catch (err) {
    alert(lang === 'bg' ? 'Грешка при изпращане.' : 'Error sending message. Please try again.');
  }
}

// Volunteer form — uses Firebase submitMessage via window._firebaseSubmitMessage
async function submitVolunteerForm(e) {
  e.preventDefault();
  const firstName  = document.getElementById('vf_firstName')?.value.trim();
  const lastName   = document.getElementById('vf_lastName')?.value.trim();
  const email      = document.getElementById('vf_email')?.value.trim();
  const phone      = document.getElementById('vf_phone')?.value.trim();
  const age        = document.getElementById('vf_age')?.value.trim();
  const role       = document.getElementById('vf_role')?.value;
  const hours      = document.getElementById('vf_hours')?.value;
  const experience = document.getElementById('vf_experience')?.value.trim();
  if (!firstName || !lastName || !email || !phone || !age || !role || !hours || !experience) {
    return alert('Please fill in all required fields.');
  }
  const lang = document.documentElement.lang || localStorage.getItem('preferredLanguage') || 'bg';
  const name = `${firstName} ${lastName}`.trim();
  const message = [
    'Volunteer application',
    `Age: ${age}`,
    `Preferred role: ${role}`,
    `Availability: ${hours} hours/week`,
    '',
    'Experience & motivation:',
    experience
  ].join('\n');
  try {
    await window._firebaseSubmitMessage(name, email, phone, 'volunteer', message);
    alert(lang === 'bg' ? 'Благодарим за интереса към доброволчеството! Ще се свържем с вас скоро.' : 'Thank you for your volunteer application! We will contact you soon.');
    e.target.reset();
  } catch (err) {
    alert(lang === 'bg' ? 'Мрежова грешка. Моля, опитайте отново.' : 'Network error. Please try again.');
  }
}

window.onclick = function (e) {
  const modal = document.getElementById('adoptModal');
  if (modal && e.target === modal) closeModal();
};

// Handle ?pet= query param (for pages that use this script)
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const pet = params.get('pet');
  if (pet) {
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach(card => {
      const nameEl = card.querySelector('.pet-name');
      if (nameEl && nameEl.textContent.trim().toLowerCase() === pet.toLowerCase()) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    setTimeout(() => openModal(pet), 500);
    history.replaceState(null, '', window.location.pathname + window.location.hash);
  }
});

// Animated counter for statistics
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target')) || 0;
        const suffix = stat.getAttribute('data-suffix') || '';
        let count = 0;
        const increment = target / 50;
        const updateCount = () => {
          if (count < target) {
            count += increment;
            stat.textContent = `${Math.min(Math.ceil(count), target)}${suffix}`;
            setTimeout(updateCount, 30);
          } else {
            stat.textContent = `${target}${suffix}`;
          }
        };
        updateCount();
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stats-section, .intro-stats').forEach(s => { if (s) observer.observe(s); });