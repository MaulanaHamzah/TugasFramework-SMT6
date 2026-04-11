// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtguleiSLJZb55_JFqmsp_ZPDwVnV5ASA",
  authDomain: "framework-next-c6654.firebaseapp.com",
  projectId: "framework-next-c6654",
  storageBucket: "framework-next-c6654.firebasestorage.app",
  messagingSenderId: "189761400550",
  appId: "1:189761400550:web:5822a71ba5b755023b5527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;