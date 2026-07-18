// GoogleLogin.js
import React from 'react';
import { app } from '../../firebaseConfig'; // Firebase app
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa'; // Google icon
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'; // Firestore functions
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';
import './GoogleLogin.css';

async function checkIfNewUser(db, userId) {
  const userInfo = await getDoc(doc(db, "users", userId));
  return !userInfo.exists();
}

function GoogleLogin({ onLogin , theme}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  // if the component mounts and the user is already authenticated (e.g. they
  // navigated to /login manually), redirect them immediately. we only run this
  // once to avoid hijacking the post-login navigation.
  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = async () => {
    // determine where to send the user after authentication
    let redirectPath = '/';
    if (location.state && location.state.from) {
      redirectPath = location.state.from;
    } else if (location.pathname && location.pathname !== '/login') {
      redirectPath = location.pathname;
    } else {
      // try localStorage fallback (set by header before navigating)
      const stored = localStorage.getItem('redirectUrl');
      if (stored) {
        redirectPath = stored;
      }
    }
    // console.log('determined redirect path', redirectPath);
    // clear any saved value now that we're about to navigate
    localStorage.removeItem('redirectUrl');

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

        // pass redirect path to context login so it can navigate correctly
      console.log('GoogleLogin will call onLogin with redirectPath:', redirectPath);
      onLogin(loggedInUser, redirectPath);
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  const containerClass = `google-login-container ${theme === 'dark' ? 'dark-theme' : ''}`; // styling
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
