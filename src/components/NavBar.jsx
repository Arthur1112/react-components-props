import React from "react";
import '../styles/navbar.css'

//Every react component has to start with an uppercase letter
function NavBar() {
    //do some stuff
    return (
        <nav className='navbar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Account</li>
            </ul>
        </nav>
    ) // always return valid jsx
}

export default NavBar;