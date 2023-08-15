import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./navbar.css";
export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/cart">
                    <AddShoppingCartIcon />
                </Link>
            </div>
        </div>
        
    )
};