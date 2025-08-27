import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  return localStorage.getItem("userId") 
    ? <Navigate to="/" />   // agar logged in hai to Dashboard pe bhej do
    : <Outlet />;           // warna Login/Signup pages dikhao
};

export default AuthRoute;
