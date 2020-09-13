import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./NavbarLight.css";
import { IconContext } from "react-icons/lib";
// npm install react-icons

function NavbarLight() {

  const history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    
    <IconContext.Provider value={{color: '#276788'}}>
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/"  onClick={closeMobileMenu}>
          <img src='/white-logo.png' alt="Unjuk Rasa" className="navbar__logo"/>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/exhibition" className="nav-links" onClick={closeMobileMenu}>
              Exhibition
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/webseries" className="nav-links" onClick={closeMobileMenu}>
            Web Series
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tentang" className="nav-links" onClick={closeMobileMenu}>
              Tentang
            </Link>
          </li>
          
        </ul>
      </div>
    </div>

    <div className="navbar-mobile">
    <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/exhibition" className="nav-links" onClick={closeMobileMenu}>
              Exhib
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/webseries" className="nav-links" onClick={closeMobileMenu}>
            Series
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tentang" className="nav-links" onClick={closeMobileMenu}>
              Tentang
            </Link>
          </li>
          
        </ul>
    </div>
    </IconContext.Provider>
  );
}

export default NavbarLight;
