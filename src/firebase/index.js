// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// new module
 import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5PrrxVnogHaOpvXD_N-LLENsU35IjO4",
  authDomain: "vue-auth-33d30.firebaseapp.com",
  projectId: "vue-auth-33d30",
  storageBucket: "vue-auth-33d30.appspot.com",
  messagingSenderId: "972168313044",
  appId: "1:972168313044:web:d7c7d0b34f40879b90a341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// added
const auth = getAuth(app);

export { auth }