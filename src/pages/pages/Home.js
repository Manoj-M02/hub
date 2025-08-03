import React, { useContext } from "react";
import { AuthContext } from "../component/CointextAuth";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
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
    <>
      <div className="home-container">
        <h2 className="welcome-text">Welcome, {user?.username}</h2>

        {user?.profilePic && (
          <img
            className="profile-pic"
            src={`http://localhost:7000${user?.profilePic?.url}`}
            alt="Profile"
          />
        )}

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete Account
        </button>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="nav">
        <img src="imgs/bmlogo.png" class="img-fluid1" alt="..." />
        <img src="imgs/fml-removebg-preview.png" class="img-fluid1" alt="..." />
        <img src="imgs/dkc.png" class="img-fluid" alt="..." />
        <img src="imgs/dclogo.png" class="img-fluid1" alt="..." />
        <img src="imgs/ml.png" class="img-fluid2" alt="..." />
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Home;
