import React from "react";
import SideMenu from "./components/SideMenu";
import "./User.css";
import { Switch, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Quiz from "./components/Quiz";
import Support from "./components/Support";

function User() {
  return (
    <div className="user__container">
      <SideMenu />
      <Switch>
        <Route exact path="/user/overview" component={Overview}/>
        <Route exact path="/user/quiz" component={Quiz}/>
        <Route exact path="/user/support" component={Support}/>
      </Switch>
    </div>
  );
}

export default User;
