import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "./firebase";
import axiosInstance from "./axiousInstance";

const UserContext=createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  const login = (userdata) => {
    try {
      setUser(userdata);
      localStorage.setItem("user", JSON.stringify(userdata));
    } catch (error) {
      console.error("login error:", error);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      await signOut(auth);
    } catch (error) {
      console.error("logout error:", error);
    }
  };
  const handlegooglessignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseuser = result.user;
      const payload = {
        email: firebaseuser.email,
        name: firebaseuser.displayName || firebaseuser.email?.split('@')[0] || 'User',
        image: firebaseuser.photoURL || "https://github.com/shadcn.png",
      };
      const response = await axiosInstance.post("/use/login", payload);
      login(response.data.result);
    } catch (error) {
      console.error("google sign-in error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseuser) => {
      if (firebaseuser) {
        try {
          const payload = {
            email: firebaseuser.email,
            name: firebaseuser.displayName || firebaseuser.email?.split('@')[0] || 'User',
            image: firebaseuser.photoURL || "https://github.com/shadcn.png",
          };
          const response = await axiosInstance.post("/use/login", payload);
          login(response.data.result);
        } catch (error) {
          console.error(error);
          logout();
        }
      } else {
        // user signed out
        logout();
      }
    });

    return () => unsubscribe();
  }, []);
 
return(
  <UserContext.Provider value={{user,login,logout,handlegooglessignin}}>
    {children}

  </UserContext.Provider>
)
}
export const useUser=()=>useContext(UserContext);