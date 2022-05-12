import React from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Productlist from "./Components/Productlist";
import Cart from "./Components/Cart/Cart";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Modal from "./Components/Modal";
function App() {
  return (
  <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Productlist}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route component={Default}></Route>
    </Switch>
    <Modal/>
  </React.Fragment>
    
  );
}

export default App;
