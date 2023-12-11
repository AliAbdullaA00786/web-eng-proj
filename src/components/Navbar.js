import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/styles.css';
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

async function logout()
{
    try
    {
        await signOut(auth);
    }
    catch
    {
        console.log("Failed to log out");
    }
}

function Navbar()
{
    return (
        <nav className="navTop" role="main">
            <Link to = "/" className="homepage">Home</Link>
            <ul>
                <li> <Link to="/dashboard">Dashboard</Link></li>
                <li> <Link to="/login">Login</Link> </li>
                <li> <Link to="/register">Register</Link> </li>
                <li> <Link to="/search">Search</Link> </li>
                <li> <Link to="/createProject">Create Project</Link> </li>
                <li> <Link to="/viewProjects">View Projects</Link> </li>
                <li> <Link onClick={logout} to="/">Log Out</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;