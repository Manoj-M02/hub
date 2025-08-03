import React, { useContext } from "react";
import { AuthContext } from "../component/CointextAuth";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  const { user, logout } = useContext(AuthContext);


  return (
    <>
      <div className="home-container">
        <Link to="/profile">
          {user?.profilePic && (
            <img
              className="profile-pic"
              src={`http://localhost:7000${user?.profilePic?.url}`}
              alt="Profile"
            />
          )}
        </Link>
        <h2 className="welcome-text">Welcome, {user?.username}</h2>
        <div className="setting-bar">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
