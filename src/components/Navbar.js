import React from "react";
import {Link} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

function Navbar() {
    return (
    <Router>
        <nav className="navcontainer">
            <ul className="navtext">
                <li className="navtext">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/links">Links</Link>
                </li>
            </ul>
        </nav>
</Router>
    )
}
export default Navbar;