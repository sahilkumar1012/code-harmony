// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZ1DF1r2HrY96NxCIT8n_rZh2CgYosco",
  authDomain: "codeharmonyapp.firebaseapp.com",
  projectId: "codeharmonyapp",
  storageBucket: "codeharmonyapp.firebasestorage.app",
  messagingSenderId: "40041553364",
  appId: "1:40041553364:web:26a02bf62514545c2c4a41",
  measurementId: "G-D7JVP17LS5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);