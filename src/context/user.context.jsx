import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListerner } from "../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

export const userContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const [currentUser, setcurrentUser] = useState(null);
  const value = { currentUser, setcurrentUser, navigateTo };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListerner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setcurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
