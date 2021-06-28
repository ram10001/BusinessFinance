import React from 'react';
import {
    BrowserRouter as Router , Switch , Route
  } from "react-router-dom";
import WorkfNav from './workfores-comp/workfores-nav';
import { attendance } from './workfores-comp/attendance';
import { workers } from './workfores-comp/workers';

export const workfores = () => {
    return (
        <div>
            <h1>workfores</h1>
            <Router>
                <WorkfNav/>

                    <div className="wfpages">

                        <Switch>
                            <Route path="/workers" component={workers}/>

                            <Route path="/attendance" component={attendance}/>

                            
                        </Switch>

                </div>


            </Router>
        </div>
    )
};
