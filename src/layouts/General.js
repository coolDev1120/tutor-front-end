import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RequireAuth from '../components/auth/require_auth';
import 'antd/dist/reset.css';


// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


// views
import Profile from "views/general/profile/index"
import Tutor from "views/general/tutor/index"
import Dashboard from "views/general/dashboard/Index";
import Become from "views/become/index"
import Editschedule from "../views/general/editschedule"
import Myschedule from "../views/general/profile/myschedule"
import PayByLecture from "views/general/payment/payBylecture"
import Chatbox from "components/Chatbox/index"

const General = () => {

  return (
    <>
      <IndexNavbar fixed />
      <Chatbox />
      <Switch>
        <Route path="/general/dashboard" exact component={(Dashboard)} />
        <Route path="/general/profile" exact component={RequireAuth(Profile)} />
        <Route path="/general/tutor/:id" exact component={RequireAuth(Tutor)} />
        <Route path="/general/become" exact component={RequireAuth(Become)} />
        <Route path="/general/editschedule" exact component={RequireAuth(Editschedule)} />
        <Route path="/general/myschedule" exact component={RequireAuth(Myschedule)} />
        <Route path="/general/checkout/:id" exact component={RequireAuth(PayByLecture)} />


        <Redirect from="/general/setting/" to="/general/profile" />
        <Redirect from="/general/" to="/general/dashboard" />
      </Switch>
      <Footer />
    </>
  );
}


export default General