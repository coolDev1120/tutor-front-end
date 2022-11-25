import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as dotenv from 'dotenv';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import 'antd/dist/reset.css';
// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import General from "layouts/General.js";
// views without layouts
import Landing from "views/Landing.js"; 

dotenv.config()

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/general" component={General} />
      <Route path="/landing" exact component={Landing} />

      <Redirect from="/" to="/general/dashboard" />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
