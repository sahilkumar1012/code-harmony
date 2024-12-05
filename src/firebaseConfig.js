import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtZ1DF1r2HrY96NxCIT8n_rZh2CgYosco",
  authDomain: "codeharmonyapp.firebaseapp.com",
  projectId: "codeharmonyapp",
  storageBucket: "codeharmonyapp.firebasestorage.app",
  messagingSenderId: "40041553364",
  appId: "1:40041553364:web:26a02bf62514545c2c4a41",
  measurementId: "G-D7JVP17LS5"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and Google Auth Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();