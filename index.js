const signUpBtn = document.getElementById('signIn');

signUpBtn.addEventListener('click', () => {
    window.location.replace("/.auth/login/aad?post_login_redirect_uri=https://zealous-grass-0ea7c0c03.2.azurestaticapps.net/authenticated/");
});
