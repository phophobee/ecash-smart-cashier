// import React, { createContext, useState } from 'react';

// // Buat context
// export const UserContext = createContext();

// // Provider
// export const UserProvider = ({ children }) => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('12345');
//   const [myPoint, setPoint] = useState(1200)

//   return (
//     <UserContext.Provider value={{ userName, setUserName, password, setPassword, myPoint, setPoint }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';

// Buat context
export const UserContext = createContext();

// Provider
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('1');
  const [myPoint, setPoint] = useState(1200);

  // ⬅️ Tambahkan ini
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <UserContext.Provider value={{
      userName, setUserName,
      password, setPassword,
      myPoint, setPoint,
      scrollTarget, setScrollTarget // ⬅️ Tambahkan ke value
    }}>
      {children}
    </UserContext.Provider>
  );
};
