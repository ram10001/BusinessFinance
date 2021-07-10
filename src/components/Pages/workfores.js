import React from 'react';
import {
    BrowserRouter as Router , Switch , Route
  } from "react-router-dom";
import WorkfNav from './workfores-comp/workfores-nav';
import { attendance } from './workfores-comp/attendance';
import { Workers } from './workfores-comp/workers';
import { AddUser } from './workfores-comp/AddUser';
import { EditUser } from './workfores-comp/Edituser';
import { ViewUser } from './workfores-comp/ViewUser';




export const workfores = () => {
    return (
        <div>
            <h1>workfores</h1>
            <Router>
                <WorkfNav/>

                    <div className="wfpages">

                        <Switch>
                            <Route path="/workers" component={Workers}/>

                            <Route path="/attendance" component={attendance}/>

                            <Route path="/adduser" component={AddUser}/>

                            <Route path="/edituser/:id" component={EditUser}/>

                            <Route path="/viewuser/:id" component={ViewUser}/>


                        </Switch>

                </div>


            </Router>
        </div>
    )
};
