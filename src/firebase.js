// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLnJOZ8jz5AKzPgzBAP1K56YH7Ifnq2w8",
  authDomain: "notee-28cd2.firebaseapp.com",
  projectId: "notee-28cd2",
  storageBucket: "notee-28cd2.appspot.com",
  messagingSenderId: "97184144194",
  appId: "1:97184144194:web:03db585dc7600c2f4d06db",
  measurementId: "G-DSFFPGS44E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytic = getAnalytics(app);

export default analytic;

