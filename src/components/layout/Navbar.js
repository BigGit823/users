import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                    </li>
                    
                </ul>

            </div>
            </div>
        </nav>
    );

};

export default Navbar;