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
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src='/images/dlogo.png' alt="Unjuk Rasa" className="navbar__logo"/>
          {/* <MdFingerprint className="navbar-icon" /> */}
          
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/MG" className="nav-links" onClick={closeMobileMenu}>
            DCU MG
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-btn" >
            {button ? (
              <Link className="btn-link" >
                <Button onClick={() => history.push("/register")} buttonStyle="btn--evoblue" >
                Register Now
                </Button>
              </Link>
            ) : (
              <Link className="btn-link" onClick={closeMobileMenu}>
                <Button
                  onClick={() => history.push("/register")}
                  buttonStyle="btn--evoblue"
                  buttonSize="btn--mobile"
                >
                  Register Now
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default NavbarLight;
