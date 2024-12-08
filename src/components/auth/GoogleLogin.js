// GoogleLogin.js
import React from 'react';
import { app } from '../../firebaseConfig'; // Import Firebase app
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
    const auth = getAuth(app); // Get Firebase Auth instance
    const db = getFirestore(app); // Get Firestore instance

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // const isNewUser = result.additionalUserInfo.isNewUser;
      const isNewUser = await checkIfNewUser(db, user.uid);

      // Extract user details from Firebase user object
      const loggedInUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
        completedProblems: [], // New user will have an empty completedProblems array
      };

      // If user is new, add user data to Firestore
      if (isNewUser) {
        // Add the user data to the "users" collection in Firestore
        await setDoc(doc(db, 'users', user.uid), loggedInUser);
        console.log('New user added to Firestore');
      }

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
