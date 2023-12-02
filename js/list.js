

// Function to retrieve and display data
function retrieveAndDisplayData() {
    // Clear previous content in the output element
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    // Retrieve data from Firestore
    db.collection('bidBase')
        .get()
        .then((querySnapshot) => {
            // Loop through the documents in the collection
            querySnapshot.forEach((doc) => {
                // Access the data from each document
                const data = doc.data();

                // Create elements for title and description
                const titleElement = document.createElement('h2');
                titleElement.textContent = data.main.title;

                if (data && data.main && data.main.title) {
                    // Access data.main.title
                    // console.log(data.main.title);
                } else {
                    console.error('data, data.main, or data.main.title is undefined');
                }

                const descriptionElement = document.createElement('p');
                if (data && data.main && data.main.desc) {
                    descriptionElement.textContent = data.main.desc;
                } else {
                    console.error('data, data.main, or data.main.description is undefined');
                }

                const anchordiv = document.createElement('div');

                anchordiv.className = 'ind-data';
                anchordiv.id = "ind-data";
                anchordiv.dataset.id = doc.id;

                // Append title element and description element to anchordiv
                anchordiv.appendChild(titleElement);
                anchordiv.appendChild(descriptionElement);

                // Append anchordiv to outputElement
                outputElement.appendChild(anchordiv);
            });
        })
        .catch((error) => {
            console.error('Error getting documents: ', error);
        });
}

// Initial retrieval and display of data
retrieveAndDisplayData();

// Add event listener to outputElement
const outputElement = document.getElementById('output');
outputElement.addEventListener('click', function (event) {
    // Redirect to content.html
    const id = event.target.closest('.ind-data').dataset.id;
    window.location.href = "postPage.html?id=" + id;
});
