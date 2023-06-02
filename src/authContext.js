import Axios from "./Axios";
import React from "react";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext("");

const AuthContextProvider = (({children})=>{
    const [currentUser , setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(inputs)=>{
        const res = await Axios.post("/login" , inputs);
        setCurrentUser(res.data);
    };

    const logout = async(inputs)=>{
        await Axios.post("/logout");
        setCurrentUser(null);
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);

    const authContextValue = {
        currentUser: currentUser,
        login: login,
        logout: logout,
      };
    
      return React.createElement(
        AuthContext.Provider,
        { value: authContextValue },
        children
      );
});

export default AuthContextProvider;
 