import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import * as dotenv from 'dotenv';

import "assets/styles/tailwind.css";
import 'antd/dist/reset.css';
// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import General from "layouts/General.js";
// views without layouts
import Landing from "views/Landing.js";
import Test from "views/test"

import { Provider } from "react-redux";
import store from "./redux/store";

dotenv.config()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/general" component={General} />
        <Route path="/landing" exact component={Landing} />

        <Route path="/test" exact component={Test} />

        <Redirect from="/" to="/general/home" />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
