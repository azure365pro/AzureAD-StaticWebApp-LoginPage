const signOutBtn = document.getElementById('signOut');

signOutBtn.addEventListener('click', () => {
    window.location.replace("/.auth/logout");
});