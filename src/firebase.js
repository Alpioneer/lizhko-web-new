// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1hctzYP29zUXM4eCoI_fLoihprqoRNeQ",
  authDomain: "lizhko-a148e.firebaseapp.com",
  projectId: "lizhko-a148e",
  storageBucket: "lizhko-a148e.appspot.com",
  messagingSenderId: "524678861543",
  appId: "1:524678861543:web:213e633efef1e3b7020842",
  measurementId: "G-9E50JBPMJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);