import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// Create the context
export const UserContext = createContext();

// UserProvider to wrap around the app and provide user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a user stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // login now accepts an optional redirectPath; if provided it takes precedence
  const login = (userData, redirectPath = null) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage

    // Prefer explicit redirectPath, otherwise fall back to stored value or '/'
    let to = '/';
    if (redirectPath) {
      to = redirectPath;
    } else {
      const stored = localStorage.getItem('redirectUrl');
      if (stored) {
        to = stored;
        localStorage.removeItem('redirectUrl');
      }
    }
    console.log('UserContext.login navigating to', to, ' (redirectPath prop was', redirectPath, ')');
    navigate(to);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user data from localStorage
    // do not navigate here; component invoking logout can choose to change location
  };


  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext); // This is the custom hook that can be used in other components
};
