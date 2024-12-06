// GoogleLogin.js
import React from 'react';
import { app } from '../../firebaseConfig'; // Import Firebase auth
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa'; // Google icon
import './GoogleLogin.css';

function GoogleLogin({ onLogin }) {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(getAuth(app), provider);
      const user = result.user;

      // Extract user details from Firebase user object
      const loggedInUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
      };

      // Call onLogin (passed as prop) to set the user state in the context
      onLogin(loggedInUser);
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <div className="google-login-container">
      <div className="google-login-card">
        <button className="google-login-btn" onClick={handleLogin}>
          <FaGoogle className="google-icon" /> Login with Google
        </button>
      </div>
    </div>
  );
}

export default GoogleLogin;
