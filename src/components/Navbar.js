import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function Navbar() {
    return (
        <Router>
            <nav className="navcontainer">
                <ul className="navtext">
                    <li>
                        <Link className="navbord" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="navbord" to="/links">Achievements</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    )
}
export default Navbar;