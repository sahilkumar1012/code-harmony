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

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage

    // After login, navigate to the return URL or home page
    const redirectUrl = localStorage.getItem('redirectUrl') || '/'; // Default to home if no redirect URL is found
    localStorage.removeItem('redirectUrl'); // Clear the redirect URL after redirecting
    navigate(redirectUrl);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user data from localStorage
  };

  const storeRedirectUrl = (url) => {
    localStorage.setItem('redirectUrl', url); // Store the URL to redirect after login
  };

  return (
    <UserContext.Provider value={{ user, login, logout, storeRedirectUrl }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext); // This is the custom hook that can be used in other components
};
