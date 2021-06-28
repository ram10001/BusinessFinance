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

               <ul className="nav-menu">
                   

                   <li className="nav-items">
                   <NavLink to="/" className ="nav-links">
                   Home
                   </NavLink>
                   </li>

                   <li className="nav-items">
                   <NavLink to="/purchase" className ="nav-links">
                   Purchase
                   </NavLink>
                   </li>


                   <li className="nav-items">
                   <NavLink to="/workfores" className ="nav-links">
                   Workfores
                   </NavLink>
                   </li>

                   <li className="nav-items">
                   <NavLink to="/inventory" className ="nav-links">
                   Inventory
                   </NavLink>
                   </li>

                   <li className="nav-items">
                   <NavLink to="/sales" className ="nav-links">
                   Sales
                   </NavLink>
                   </li>

                   

                        <li className="nav-items" >
                        <NavLink to="/login" className ="nav-links">
                        Login
                        </NavLink>
                        </li>

                        <li  className="nav-items">
                        <NavLink to="/signup" className ="nav-links">
                        Start Now
                        </NavLink>
                        </li>

                   

                   

                   
               </ul>

               </div>
           </nav>
        </div>
    );
}

export default Navbar;
