import React from "react";
import Burger from "../NavBurger/NavBurger";
import "./NavBar.css"

const Nav = () => {
        return(
            <header className="Nav">
                <div className="Logo"><h1> FitPro</h1></div>
                <Burger />
            </header>
        )
    
};

export default Nav;