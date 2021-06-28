import React from 'react';
import "./Navbar.css";
import { NavLink  } from "react-router-dom";


function Navbar() {
    return (
        <div>
           <nav className="navbar">
               <div className="nav-cont">
               <NavLink to="/" className ="navlogo">
                   logo
               </NavLink>

               <ul>
                   <li>
                   <NavLink to="/" className ="navlogo">
                   logo
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="home">
                   Home
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="purchase">
                   Purchase
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="inventory">
                   Inventory
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="sales">
                   Sales
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="workfores">
                   Workfores
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="login">
                   Login
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="signup">
                   Start Now
                   </NavLink>
                   </li>

                   <li>
                   <NavLink to="/" className ="navlogo">
                   Inventory
                   </NavLink>
                   </li>

                   
               </ul>

               </div>
           </nav>
        </div>
    );
}

export default Navbar;
