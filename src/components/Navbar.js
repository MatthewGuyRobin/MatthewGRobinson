import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
            <nav className="navcontainer">
                <ul className="navtext">
                    <li>
                        <Link className="navbord" to="/MatthewGRobinson">Home</Link>
                    </li>
                    <li>
                        <Link className="navbord" to="/Success">Achievements</Link>
                    </li>
                </ul>
            </nav>
    
    )
}
export default Navbar;