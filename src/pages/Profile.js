import React, { useContext } from "react";
import { AuthContext } from "../component/CointextAuth";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:7000/api/auth/delete-account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Account deleted successfully.");
      logout(); // Clear context and localStorage
    } catch (err) {
      console.error("Delete failed", err);
      alert("Error deleting account");
    }
  };

  return (
    <div className="profile-container">
      
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
      <button className="delete-btn" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
};

export default Profile;