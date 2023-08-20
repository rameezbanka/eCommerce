import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./navbar.css";
import LoginModal from "../pages/login/Login";
import RegisterModal from "../pages/register/Register";


export const Navbar = () => {
   
const [isLoginModalOpen,setisLoginModalOpen] = useState(false);
const [isRegistrationModalOpen,setisRegistrationModalOpen] = useState(false);
const [isLoggedIn, setLoggedIn] = useState(false);

const loginHandler = ()=>{   
    setisLoginModalOpen(true);
    setisRegistrationModalOpen(false);

}
const registrationHandler = ()=>{
    setisLoginModalOpen(false);
    setisRegistrationModalOpen(true);
}
const modalCloseHandler = ()=>{
    setisLoginModalOpen(false);
    setisRegistrationModalOpen(false);
} 
const handleLogOut = ()=>{
    setLoggedIn(false);
}

    return (
        <div className="navbar">
             <div className="links left">
                <Link to="/"> Shop </Link>
            </div>
            <div className="links right">
            <button className="login" onClick={loginHandler} >Login</button>
                <Link to="/cart">
                    <AddShoppingCartIcon />
                </Link>   
            </div>
            {(isLoginModalOpen || isRegistrationModalOpen)&&(
                <div  className="header-modal">
                    <div className= "header-modal-content">
                        <div  className="header-auth-container">  
                        <div  className="header-auth-options">
                            {isLoggedIn ?(
                                 <button className="button2" onClick={handleLogOut}>Logout</button>
                            ):(
                            <button className="button2"onClick={loginHandler}>Login</button>
                            )}
                            <button className="button2"onClick={registrationHandler}>Register</button>
                        </div>
                        </div>
                        {isLoginModalOpen && <LoginModal onClose={modalCloseHandler} onSuccess ={()=>{setLoggedIn(true)}}/>}
                        {isRegistrationModalOpen && <RegisterModal onClose={modalCloseHandler} />}
                    </div>
                </div>
            )}
        </div>
        
    )
};