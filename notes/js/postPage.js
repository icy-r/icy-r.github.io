// var root = document.documentElement;
// toggleBtn.addEventListener("click", ()=>{

//     if (toggleBtn.name == "sunny") {
//         toggleBtn.name = "moon";
//         document.querySelector("body").style.backgroundColor = "black";
//         document.querySelector("body").style.color = "white";
//         document.querySelector("#logo").style.mixBlendMode = "difference";

//         root.style.setProperty('--container-bg-color','#2f2f2f');
//         root.style.setProperty('--text-color-w2','#d5d5d5');
//         root.style.setProperty('--text-color-w3','#c0c0c0');
//         root.style.setProperty('--tag-bg-color','#3a3a3a');
//     } else {
//         toggleBtn.name = "sunny";
//         document.querySelector("body").style.backgroundColor = "white";
//         document.querySelector("body").style.color = "black";
//         document.querySelector("#logo").style.mixBlendMode = "unset";

//         root.style.setProperty('--container-bg-color','#ebebeb');
//         root.style.setProperty('--text-color-w3','#2e2e2e');
//         root.style.setProperty('--text-color-w2','#616161');
//         root.style.setProperty('--tag-bg-color','#cbcbcb');
//     }
    
// });

/*
const outputElement = document.getElementById('output');
outputElement.addEventListener('click', function (event) {
    // Redirect to content.html
    window.location.href = "content.html";

    // Send the id of the document to the content page from anchordiv's dataset
    const id = event.target.parentElement.dataset.id;
});


*/

// //recieve id from list.html and get all data from firestore
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const id = urlParams.get('id');
const id = "DzkaoIdQcOmcysT0qDtF"
const db = firebase.firestore();

// Function to retrieve and display data
function retrieveAndDisplayData() {
    // Clear previous content in the output element
    const outputElement = document.getElementById('output');
    if (!outputElement) {
        console.log("Output element not found");
        return;
    }
    outputElement.innerHTML = '';
    const content = document.getElementById('second-container');
    if (!content) {
        console.log("Content element not found");
        return;
    }
    // content.innerHTML = '';
    console.log("test");
    // Retrieve data from Firestore where id = id and get all data
    db.collection('bidBase')
        .where(firebase.firestore.FieldPath.documentId(), '==', id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // Access the document data
                const data = doc.data();
                // Do something with the data, such as displaying it on the page
                console.log(data.main.title);
                document.getElementById("post-title").innerHTML = data.main.title;
                document.getElementById("post-description").innerHTML = data.main.description;
                document.getElementById("post-date").innerHTML = data.main.date.toDate();

                const contentArray = data.content;
                const contentContainer = document.getElementById('second-container');
                if (contentArray && contentContainer) {
                  contentArray.forEach((contentItem) => {
                    if (contentItem.type === 'text') {
                      const contentElement = document.createElement('p');
                      contentElement.className = 'paragraph';
                      contentElement.textContent = contentItem.value;
                      contentContainer.appendChild(contentElement);
                    }
                    else if(contentItem.type === 'image') {
                        /*
                        fetch('https://i.imgur.com/ApG73oz.jpg', {
                          headers: {
                            'Referer': 'http://127.0.0.1:5500/html/postPage.html/'
                            // Add any other necessary headers
                          }
                        })
                          .then(response => {
                            if (!response.ok) {
                              throw new Error('Network response was not ok');
                            }
                            return response.blob();
                          })
                          .then(blob => {
                            // Process the image blob
                          })
                          .catch(error => {
                            console.error('Fetch error:', error);
                          });
                          */

                        // const contentElement = document.createElement('img');
                        // contentElement.src = contentItem.value;
                        // contentElement.className = 'img';
                        // contentContainer.appendChild(contentElement);
                        const contentElement = document.createElement('p');
                      contentElement.className = 'paragraph';
                      contentElement.textContent = "an image comes here...";
                      contentContainer.appendChild(contentElement);

                    }
                    else if(contentItem.type === 'heading') {
                        const contentElement = document.createElement('p');
                        contentElement.className = 'main-heading';
                        contentElement.textContent = contentItem.value;
                        contentContainer.appendChild(contentElement);
                    }
                    else if(contentItem.type === 'subheading') {
                        const contentElement = document.createElement('p');
                        contentElement.className = 'sub-heading';
                        contentElement.textContent = contentItem.value;
                        contentContainer.appendChild(contentElement);
                    }
                  });
                }
            });
        })
        .catch((error) => {
            console.log('Error getting documents: ', error);
        });
}

// Call the function to retrieve and display the data
retrieveAndDisplayData();

// ...

function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}

var toggleBtn = document.getElementById("toggle-btn");
var root = document.documentElement;
var body = document.body;
var form1 = document.getElementById("docform");
// var form = document.getElementById("docForm");

if (getCookie("theme") == null) {
    setCookie("theme", "dark", 30);
}

toggleBtn.addEventListener("click", ()=>{
    if (getCookie("theme") == "light") {
        setCookie("theme", "dark", 30);
    } else {
        setCookie("theme", "light", 30);
    }
    setTheme();
});
setTheme();

function setTheme() {
    if (getCookie("theme") == "light") {
        toggleBtn.name = "sunny";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.querySelector("#logo").style.mixBlendMode = "unset";

        root.style.setProperty('--container-bg-color','#ebebeb');
        root.style.setProperty('--text-color-w3','#2e2e2e');
        root.style.setProperty('--text-color-w2','#616161');
        root.style.setProperty('--tag-bg-color','#cbcbcb');
        root.style.setProperty('--header-black','#ffffff');
        root.style.setProperty('--background-color','#ffffff');
        // form1.style.setProperty('--background-color','#ffffff');
        // form1.style.setProperty('--background-color','#ffffff');
    } else {
        toggleBtn.name = "moon";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector("#logo").style.mixBlendMode = "difference";

        root.style.setProperty('--container-bg-color','#2f2f2f');
        root.style.setProperty('--text-color-w2','#d5d5d5');
        root.style.setProperty('--text-color-w3','#c0c0c0');
        root.style.setProperty('--tag-bg-color','#3a3a3a');
        root.style.setProperty('--header-black','#1f1f1f');
        root.style.setProperty('--background-color','#1f1f1f');
        // form1.style.setProperty('--background-color','#1f1f1f');
        // form1.style.setProperty('--background-color','#1f1f1f');
    }
}
