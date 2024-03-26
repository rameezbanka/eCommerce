import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./navbar.css";
import LoginModal from "../pages/login/Login";
import RegisterModal from "../pages/register/Register";
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State for tracking login status
    const [searchQuery, setSearchQuery] = useState("");
    const [userName, setUserName] = useState(""); // State for storing user's name

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (isLoginModalOpen || isRegistrationModalOpen) &&
                !event.target.closest(".header-modal-content") &&
                !event.target.classList.contains("login")
            ) {
                setIsLoginModalOpen(false);
                setIsRegistrationModalOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isLoginModalOpen, isRegistrationModalOpen]);

    const loginHandler = () => {
        setIsLoginModalOpen(true);
        setIsRegistrationModalOpen(false);
    };

    const registrationHandler = () => {
        setIsLoginModalOpen(false);
        setIsRegistrationModalOpen(true);
    };

    const modalCloseHandler = () => {
        setIsLoginModalOpen(false);
        setIsRegistrationModalOpen(false);
    };

    const handleLogOut = () => {
        setIsLoggedIn(false); // Update isLoggedIn state to false on logout
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="navbar">
            <div className="links left">
                <Link to="/"> Shop </Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange}></input>
                <SearchIcon />
            </div>
            <div className="links right">
                {/* Conditionally render login/logout button based on isLoggedIn state */}
                {isLoggedIn ? (
                    <button className="login" onClick={handleLogOut}>Logout</button>
                ) : (
                    <button className="login" onClick={loginHandler}>Login</button>
                )}
                {isLoggedIn  && (
                    <Link to="/cart">
                    <AddShoppingCartIcon />
                </Link>
                )}
            </div>
            {(isLoginModalOpen || isRegistrationModalOpen) && (
                <div className="header-modal">
                    <div className="header-modal-content">
                        <div className="header-auth-container">
                            <div className="header-auth-options">
                                {isLoggedIn ? (
                                    <div><span>Welcome, {userName}</span>
                                    <button className="button2" onClick={handleLogOut}>Logout</button>
                                    </div>
                                ) : (
                                    <button className="button2" onClick={loginHandler}>Login</button>
                                )}
                                <button className="button2" onClick={registrationHandler}>Register</button>
                            </div>
                        </div>
                        {isLoginModalOpen && <LoginModal onClose={modalCloseHandler} onSuccess={() => setIsLoggedIn(true)} />}
                        {isRegistrationModalOpen && <RegisterModal onClose={modalCloseHandler} />}
                    </div>
                </div>
            )}
        </div>
    );
};
