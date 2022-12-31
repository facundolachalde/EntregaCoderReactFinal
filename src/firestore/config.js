// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVuqN7GEVQ0rJr3jIUyD_TTRrOhvVqv4",
  authDomain: "ecommerce-csfacu.firebaseapp.com",
  projectId: "ecommerce-csfacu",
  storageBucket: "ecommerce-csfacu.appspot.com",
  messagingSenderId: "1035320655065",
  appId: "1:1035320655065:web:672e2c78f334aa616712c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirestoreApp = () => {
    return app
}