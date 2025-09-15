import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config.js/firebase";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register with email & password
  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Google login/register
  const handleGoogleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //  Login with email & password
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Update profile
  const handleUpdateProfile = (updateData) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, updateData);
    }
    return Promise.reject("No user logged in");
  };

  //  Logout
  const handleLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //  Auth state observer (runs once)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    handleRegister,
    handleGoogleAuth,
    handleUpdateProfile,
    handleLogin,
    handleLogout,
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
