import React from "react";
import "./SideMenu.css";
import { BrowserRouter, useHistory, useLocation } from "react-router-dom";



function SideMenu() {
  const history = useHistory();
  let location = useLocation();
  const time = new Date();
  const hours = time.getUTCHours();
  const mins = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();

  return (
    <BrowserRouter>
      <div className="side-menu__container">
        <div>
          <div
            onClick={() => history.push("/user/overview")}
            className={`side-menu__links ${
              location.pathname === "/user/overview" ? "active" : ""
            }`}
          >
            Overview
          </div>
          <div
            onClick={() => history.push("/user/quiz")}
            className={`side-menu__links ${
              location.pathname === "/user/quiz" ? "active" : ""
            }`}
          >
            MCQ
          </div>
          <div
            onClick={() => history.push("/user/support")}
            className={`side-menu__links ${
              location.pathname === "/user/support" ? "active" : ""
            }`}
          >
            Support
          </div>
        </div>

        <div>
          {location.pathname === "/user/quiz" ? (
            <div className="side-menu__timer">
              <div className="side-menu__time">
                {
                    seconds
                }
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default SideMenu;
