import React, { createContext, useState, useEffect, useContext } from 'react';

export const userIdContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const updateUserId = () => {
      // Retrieve user data from local storage
      const userDataString = localStorage.getItem("user");

      if (userDataString) {
        // Parse the JSON string to convert it into an object
        const userData = JSON.parse(userDataString);

        // Check if userData contains the id property
        if (userData && userData.id) {
          // Access the "id" property from the parsed object
          const userId = userData.id;

          // Update the userId state
          setUserId(userId);
        }
      }
    };

    // Call updateUserId initially
    updateUserId();

    // Add event listener for storage event
    window.addEventListener('storage', updateUserId);

    // Clean up the event listener
    return () => {
      window.removeEventListener('storage', updateUserId);
    };
  }, []); // Run once on component mount

  return (
    <userIdContext.Provider value={userId}>
      {children}
    </userIdContext.Provider>
  );
};

