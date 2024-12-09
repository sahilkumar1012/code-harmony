// GoogleLogin.js
import React from 'react';
import { app } from '../../firebaseConfig'; // Firebase app
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa'; // Google icon
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'; // Firestore functions
import './GoogleLogin.css';

async function checkIfNewUser(db, userId) {
  const userInfo = await getDoc(doc(db, "users", userId));
  return !userInfo.exists();
}

function GoogleLogin({ onLogin }) {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const db = getFirestore(app);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      const isNewUser = await checkIfNewUser(db, user.uid);

      const loggedInUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
        completedProblems: [],
      };

      if (isNewUser) {
        await setDoc(doc(db, 'users', user.uid), loggedInUser);
        console.log('New user added to Firestore');
      }

      onLogin(loggedInUser);
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <div className="google-login-container">
      <div className="google-login-card">
        <h2 className="google-login-title">Sign In to Continue</h2>
        <p className="google-login-desc">
          Access your account to track progress, save your work, and explore personalized features.
        </p>
        <button className="google-login-btn" onClick={handleLogin}>
          <FaGoogle className="google-icon" /> Login with Google
        </button>
      </div>
    </div>
  );
}

export default GoogleLogin;
