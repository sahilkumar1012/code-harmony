import React, { createContext, useContext, useState } from 'react';

// Create UserContext
const UserContext = createContext();

// UserContext Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state

  // Function to log in
  const login = (userData) => {
    console.log(userData);
    setUser(userData);
  };

  // Function to log out
  const logout = () => {
    console.log('Before logout:', user); // Log current user before logout
    setUser(null); // Clear user state
    console.log('After logout:', user);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);
