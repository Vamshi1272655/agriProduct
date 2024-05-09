import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./container/Login";
import { Dashboard } from "./container/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
