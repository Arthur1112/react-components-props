import React from "react";


function Footer(){
    const isLoggedIn = true;
    const bgColor = (isLoggedIn) ? 'wheat' : 'red';
        return(
        <footer 
        style={{ width: "100%",backgroundColor: bgColor}}
        className="footer">
        <p>
            &copy; Boca Code, 2022.
        </p>
        </footer>
    )
}



export default Footer;