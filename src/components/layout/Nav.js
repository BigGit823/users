import React from "react";
import {Link, NavLink} from "react-router-dom";


const Nav = () =>{
    return (
        <nav class="navigation_bar">
            <a href="/">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
            </a>
            <ul>
                <li class="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" exact to="/about">About</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" exact to="/gallery">Gallery</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" exact to="/team">Team</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                </li>
            </ul>
            <label id="icon">
                <i class="fa fa-bars"></i>
            </label>
        </nav>
    );
};

export default Nav;