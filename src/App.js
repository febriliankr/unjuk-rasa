import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import NavbarLight from './components/NavbarLight';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home/Home';
import FooterLight from './components/FooterLight';
import DcuMg from './components/pages/DcuMg/DcuMg';
import Register from './components/Register';
import About from './components/pages/About/About';
import User from './components/pages/User/User';
import Start from './components/pages/Start/Start';


function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route path='/MG' component={DcuMg}/>
        <Route path='/about' component={About}/>
        <Route path='/register' component={Register}/>
        <Route path='/user' component={User}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
