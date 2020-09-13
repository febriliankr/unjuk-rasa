import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import NavbarLight from './components/NavbarLight';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Start from './components/pages/Start/Start';
import BukuTamu from './components/pages/BukuTamu/BukuTamu'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Start}/>
        <Route path='/buku-tamu' component={BukuTamu}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
