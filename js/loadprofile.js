document.addEventListener('DOMContentLoaded', (event) => {
    const uid = sessionStorage.getItem('uid');
    const profile = document.querySelector('#header-profile-image');

    if (uid) {
        db.collection('users').doc(uid).get().then(doc => {
            if (doc.exists) {
                const userData = doc.data();
                const userProfile = userData.profileImageUrl;
                const name1 = userData.name;
                const setname = document.getElementById("name");
                setname.innerHTML = " " + name1;
                profile.src = userProfile;

                const logout = document.querySelector('#logout-btn');
                logout.style.display = 'block';
                logout.addEventListener('click', (e) => {
                    e.preventDefault();
                    auth.signOut().then(() => {
                        console.log('user signed out');
                        window.location.href = "../html/login.html";
                    });
                });
            }
        }).catch(err => {
            console.log(err.message);
        });
    } else {
        const noname = document.querySelector('header-right-down');
        noname.innerHTML = " ";
        const login = document.createElement('a');
        login.setAttribute('href', '../html/login.html');
        login.innerHTML = "Login";
        noname.appendChild(login);
        console.log('uid is not defined or is an empty string');
    }
});
