import { auth, logout as firebaseLogout, getMe } from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

async function updateAuthNav(firebaseUser) {
    try {
        const navAuthLink = document.querySelector('.nav-auth .auth-icon');
        const navAuth = document.querySelector('.nav-auth');

        if (firebaseUser) {
            const user = await getMe();

            // User is logged in - show logout button
            navAuthLink.href = '#';
            navAuthLink.setAttribute('aria-label', 'Log out');
            navAuthLink.setAttribute('title', 'Log out');
            navAuthLink.querySelector('.auth-user').src = '../images/logout.png';
            navAuthLink.querySelector('.auth-user').alt = 'Log out';

            navAuthLink.onclick = (e) => {
                e.preventDefault();
                logout();
            };

            // Add profile button
            const existingProfileBtn = document.querySelector('.profile-menu-btn');
            if (!existingProfileBtn) {
                const profileBtn = document.createElement('a');
                profileBtn.href = 'profile.html';
                profileBtn.className = 'profile-menu-btn';
                profileBtn.setAttribute('aria-label', 'My Profile');
                profileBtn.setAttribute('title', 'My Profile');
                profileBtn.innerHTML = `<span class="profile-icon-circle">${(user?.name || user?.email || 'U')[0].toUpperCase()}</span>`;
                navAuth.insertBefore(profileBtn, navAuthLink);
            }

            // Add admin button if admin
            if (user?.role === 'admin') {
                const existingAdminBtn = document.querySelector('.admin-menu-btn');
                if (!existingAdminBtn) {
                    const adminBtn = document.createElement('a');
                    adminBtn.href = 'admin.html';
                    adminBtn.className = 'admin-menu-btn';
                    adminBtn.setAttribute('aria-label', 'Admin Menu');
                    adminBtn.setAttribute('title', 'Admin Menu');
                    const adminImg = document.createElement('img');
                    adminImg.src = '../images/admin.png';
                    adminImg.alt = 'Admin Menu';
                    adminBtn.appendChild(adminImg);
                    navAuth.insertBefore(adminBtn, navAuthLink);
                }
            }

        } else {
            // Not logged in - show login button
            navAuthLink.href = 'login.html';
            navAuthLink.setAttribute('aria-label', 'Log in');
            navAuthLink.setAttribute('title', 'Log in');
            navAuthLink.querySelector('.auth-user').src = '../images/login.png';
            navAuthLink.querySelector('.auth-user').alt = 'Log in';
            navAuthLink.onclick = null;

            document.querySelector('.admin-menu-btn')?.remove();
            document.querySelector('.profile-menu-btn')?.remove();
        }
    } catch (err) {
        console.error('Error updating auth nav:', err);
    }
}

async function logout() {
    try {
        await firebaseLogout();
        window.location.reload();
    } catch (err) {
        console.error('Logout error:', err);
    }
}

// Firebase automatically detects auth state — no need for DOMContentLoaded fetch
onAuthStateChanged(auth, (firebaseUser) => {
    updateAuthNav(firebaseUser);
});