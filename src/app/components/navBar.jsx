import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
                <Link className="navbar-brand" to="/main">
                    Main
                </Link>
                <Link className="navbar-brand" to="/login">
                    Login
                </Link>
                <Link className="navbar-brand" to="/users">
                    Users
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
