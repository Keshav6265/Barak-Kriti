import React from "react";
import {Link,NavLink} from "react-router-dom";
import "./Navbar.css";

const Navbar=()=>{
    return (
        <nav>
        <Link to="/" className="title">Home</Link>
            <ul>
                <li><NavLink to="/Patient">Patients</NavLink></li>
                <li><NavLink to="/Doctor">Doctors</NavLink></li>
                <li><NavLink to="/Report">Reports</NavLink></li>
                <li><NavLink to="/Admin">Admin</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;