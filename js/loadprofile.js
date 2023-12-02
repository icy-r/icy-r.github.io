const uid = sessionStorage.getItem('uid');
 console.log(uid);
const name1 = sessionStorage.getItem('name');
console.log(name1);
//setname to id name
const setname = document.getElementById("name");
setname.innerHTML = " " + name1;
const profile = document.querySelector('#header-profile-image');
const funny = document.querySelector('#logo');
funny.setAttribute('title', 'Hehe. if u click nothing will happen');

if (uid) { // Check if uid is defined and not an empty string
    db.collection('users').doc(uid).get().then(doc => {
        if (doc.exists) {
            const userData = doc.data();
            const userProfile = userData.profileImageUrl;
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
    //create login button to profile
    const login = document.createElement('a');
    login.setAttribute('href', '../html/login.html');
    login.innerHTML = "Login";
    noname.appendChild(login);
    console.log('uid is not defined or is an empty string');
}