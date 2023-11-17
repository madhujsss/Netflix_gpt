// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdMD79YJm725ZxlFIAdPaZifW1cOJc8k8",
  authDomain: "netflix-gpt-66c41.firebaseapp.com",
  projectId: "netflix-gpt-66c41",
  storageBucket: "netflix-gpt-66c41.appspot.com",
  messagingSenderId: "552317966629",
  appId: "1:552317966629:web:81dbe0b7079a6545ece2cc",
  measurementId: "G-R5WGSVQP4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);