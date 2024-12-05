import React from 'react';
import { auth } from '../../firebaseConfig'; // Import Firebase auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function GoogleLogin({ onLogin }) {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
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
    <div className="google-login">
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default GoogleLogin;
