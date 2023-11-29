// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
  
//   firebase.initializeApp(firebaseConfig);
  
//   // Reference to the Firestore database
//   const db = firebase.firestore();
  
  // Function to retrieve data from Firestore

  const contentdiv = document.getElementById("content");

  
  function fetchDataFromFirestore() {
    // Reference to the collection you want to retrieve data from
    const collectionRef = db.collection("bidBase");

    
  
    // Get the documents in the collection
     collectionRef.where('main.title', '==', 'last ')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // Access the data from each document
            const data = doc.data();
            console.log("Document ID:", doc.id);
            console.log("Data:", data);
          });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
  }
  
  // Call the function to fetch data
  fetchDataFromFirestore();
  