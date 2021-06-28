
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router , Switch , Route
} from "react-router-dom";

import { inventory } from './components/Pages/inventory';
import { purchase } from './components/Pages/purchase';
import { Sales } from './components/Pages/sale';
import { workfores } from './components/Pages/workfores';
import { signup } from './components/Pages/signup';
import { login } from './components/Pages/login';
import { home } from './components/Pages/home';


function App() {
  return (
   <div>
    <Router>
      <Navbar/>


      <div className="page">
          <Switch>
            <Route exact path="/" component={home}/>

            <Route exact path="/inventory" component={inventory}/>

            <Route exact path="/purchase" component={purchase}/>
            
            <Route  path="/sales" component={Sales}/>
            
            <Route  path="/workfores" component={workfores}/>
            
            <Route  path="/signup" component={signup}/>
            
            <Route  path="/login" component={login}/>
          
          </Switch>
          </div>
    </Router>

   </div>
  );
}

export default App;
