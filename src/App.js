import React from "react";
import "./App.css";
// import Navbar from './components/Navbar';
import NavbarLight from "./components/NavbarLight";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Router } from 'react-router'
import Start from "./components/pages/Start/Start";
import BukuTamu from "./components/pages/BukuTamu/BukuTamu";
import { AnimatePresence } from "framer-motion";
import Exhibition from "./components/pages/Exhibition/Exhibition";
import Tentang from "./components/pages/Tentang/Tentang";
import WebSeries from "./components/pages/WebSeries/WebSeries";

function App() {
  
  
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/buku-tamu" component={BukuTamu} />
          <Route path="/exhibition" component={Exhibition} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/webseries" component={WebSeries} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
