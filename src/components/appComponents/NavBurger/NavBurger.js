import React from "react";
import "./NavBurger.css"
import {Link } from "react-router-dom";

const Burger = () =>{
    return(
        <div className="BurgerContainer">  
            <ul>
                <Link to = "/about">Home</Link>
                <li>Track</li>
                <li>About</li>

            </ul>

        </div>
    )
}

export default Burger;