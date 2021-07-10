
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router , Switch , Route
} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.css';




import { Sales } from './components/Pages/sale';
import { workfores } from './components/Pages/workfores';
import { signup } from './components/Pages/signup';
import { login } from './components/Pages/login';
import { home } from './components/Pages/home';
import { Inventory } from './components/Pages/inventory';
import { Editinven } from './components/Pages/editcComp/editinven';
import { Addinven } from './components/Pages/addComp/addinven';
import { Purchase } from './components/Pages/purchase';
import { Addrawm } from './components/Pages/addComp/addpur';
import { Editrawm } from './components/Pages/editcComp/editpur';
import { Addsaler } from './components/Pages/salersComp/addsaler';
import { SalerHist } from './components/Pages/salersComp/salerHist';
import { Addtran } from './components/Pages/salersComp/addtran';


function App() {
  return (
   <div>
    <Router>
      <Navbar/>


      <div className="page">
          <Switch>
            <Route exact path="/" component={home}/>

            <Route exact path="/inventory" component={Inventory}/>

            <Route exact path="/purchase" component={Purchase}/>
            
            <Route  path="/sales" component={Sales}/>
            
            <Route  path="/workfores" component={workfores}/>
            
            <Route  path="/signup" component={signup}/>
            
            <Route  path="/login" component={login}/>

            <Route  path="/addinven" component={Addinven}/>

            <Route  path="/editinven/:id" component={Editinven}/>

            <Route  path="/addrawm" component={Addrawm}/>

            <Route  path="/editraw/:id" component={Editrawm}/>

            <Route  path="/addsaler" component={Addsaler}/>

            <Route  path="/salerHist/:id" component={SalerHist}/>

            <Route  path="/addtran/:id" component={Addtran}/>
          
          </Switch>
          </div>
    </Router>

   </div>
  );
}

export default App;
