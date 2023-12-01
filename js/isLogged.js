
auth.onAuthStateChanged(user => {
    if (user) {
        const hideLoadingScreen = function() {
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
            }, 2); // 2000 milliseconds = 2 seconds
        };

        if (document.readyState === 'complete') {
            // If the page has already loaded, hide the loading screen immediately
            hideLoadingScreen();
        } else {
            // If the page has not yet loaded, set up the window.onload event
            window.onload = hideLoadingScreen;
        }
    } else {
        console.log('user logged out');
        window.location.href = "../html/login.html";
    }
});

const logout = function() {
    auth.signOut().then(() => {
        console.log('user signed out');
        window.location.href = "../html/login.html";
    });
};

//redirect to profile page if header-profile-image clicked
const profile1 = document.querySelector('#header-profile-image');
profile1.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "../html/profile.html";
});