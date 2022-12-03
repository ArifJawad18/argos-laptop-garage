// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARsjhH0aAgYYgyKwjKbvTumpuEkOq7TnE",
  authDomain: "argos-laptop-garage.firebaseapp.com",
  projectId: "argos-laptop-garage",
  storageBucket: "argos-laptop-garage.appspot.com",
  messagingSenderId: "47774102004",
  appId: "1:47774102004:web:583a31c4101d3a92bd09a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;