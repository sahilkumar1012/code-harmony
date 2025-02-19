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

function GoogleLogin({ onLogin , theme}) {
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

  const containerClass = `google-login-container ${theme === 'dark' ? 'dark-theme' : ''}`;
  const cardClass = `google-login-card ${theme === 'dark' ? 'dark-theme-card' : ''}`;
  const titleClass = `google-login-title ${theme === 'dark' ? 'dark-theme-title' : ''}`;
  const descriptionClass = `google-login-desc ${theme === 'dark' ? 'dark-theme-description' : ''}`;
  const buttonClass = `google-login-btn ${theme === 'dark' ? 'dark-theme-button' : ''}`;
  const iconClass = `google-icon ${theme === 'dark' ? 'dark-theme-icon' : ''}`;

  return (
    <div className={containerClass}>
      <div className={cardClass}>
        <h2 className={titleClass}>Welcome!</h2>
        <p className={descriptionClass}>
          Sign in to start tracking your progress, saving your work, and unlocking personalized features.
        </p>
        <button className={buttonClass} onClick={handleLogin}>
          <FaGoogle className={iconClass} /> Login with Google
        </button>
      </div>
    </div>
  );
}

export default GoogleLogin;
