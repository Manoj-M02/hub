import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/HomeRegister";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useAuth } from "./component/CointextAuth";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";

const App = () => {
  const PrivateRoute = ({ children }) => {
    const { token } = useAuth();

    return token ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
