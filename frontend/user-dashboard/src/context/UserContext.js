import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      company: "Romaguera-Crona",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "-37.3159", lng: "81.1496" }
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      company: "Deckow-Crist",
      address: {
        street: "Victor Plains",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: { lat: "-43.9509", lng: "-34.4618" }
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      company: "Romaguera-Jacobson",
      address: {
        street: "Douglas Extension",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: { lat: "-68.6102", lng: "-47.0653" }
      }
    }
  ]);
  const [loading] = useState(false);

  const addUser = (newUser) => {
    setUsers(prev => [...prev, { ...newUser, id: Date.now() }]);
  };

  return (
    <UserContext.Provider value={{ users, loading, addUser }}>
      {children}
    </UserContext.Provider>
  );
};