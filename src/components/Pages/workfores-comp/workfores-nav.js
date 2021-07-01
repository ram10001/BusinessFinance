import React from 'react';
import { NavLink  } from "react-router-dom";
import "./workfores-nav.css";

 function WorkfNav() {
    return (
        <div>
            <nav className="wfnav">
                <ul className="wfmenu">
                    <li>
                        <NavLink to="/workers"  className="wfn-link">
                            Workers
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/attendance"  className="wfn-link">
                            Attendance
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/adduser"  className="wfn-link">
                            Add User
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default WorkfNav;