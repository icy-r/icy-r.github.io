// Function to get the document ID from URL parameter
function getDocumentIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}
const id = getDocumentIdFromUrl();

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
    ///test here
    console.log("test");
    // Retrieve data from Firestore where id = id and get all data
    db.collection('bidBase')
        .where(firebase.firestore.FieldPath.documentId(), '==', id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // Access the document data
                const data = doc.data();
                console.log(data);

                // Do something with the data, such as displaying it on the page
                console.log(data.main.title);
                document.getElementById("post-title").innerHTML = data.main.title;
                document.getElementById("post-description").innerHTML = data.main.desc;
                document.getElementById("post-date").innerHTML = data.main.date;
                document.getElementById("post-userid").innerHTML = "";

                //get user name by user id
                const db = firebase.firestore();
                const userId = data.main.muid;
                console.log(userId)

                if (typeof userId === 'string') {
                  db.collection('users').doc(userId).get()
                    .then(doc => {
                      if (doc.exists) {
                        const userData = doc.data();
                        const username = userData.name;
                        const profileImageUrl = userData.profileImageUrl;
                        document.getElementById("post-profile").src = profileImageUrl;
                        document.getElementById("post-username").innerHTML = username;
                      } else {
                        console.log('No such document!');
                      }
                    })
                    .catch(error => {
                      console.log('Error getting document:', error);
                    });
                } else {
                  console.log('userId is not a string');
                }
                db.collection('users').doc(uid).collection('userinfo').doc('info').get()
                .then((doc) => {
                    if(doc.exists){
                        const data1 = doc.data();
                        username1 = data1.username;
                        document.getElementById("post-userid").innerHTML = username1;

                    }
                });
                
                const contentArray = data.notes;
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
                      const contentElement = document.createElement('img');
                      contentElement.src = contentItem.value;
                      contentElement.className = 'img';
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
            console.log("Error getting documents: ", error);
        });
}

retrieveAndDisplayData();