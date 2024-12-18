// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2IuByBOBVWWH0ENQRtZutluvMTRuEn-k",
  authDomain: "dutyleaveshr.firebaseapp.com",
  projectId: "dutyleaveshr",
  storageBucket: "dutyleaveshr.firebasestorage.app",
  messagingSenderId: "260397433999",
  appId: "1:260397433999:web:505c52a1d38b3f41359cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);