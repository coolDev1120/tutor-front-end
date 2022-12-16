import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RequireAuth from '../components/auth/require_auth';
import 'antd/dist/reset.css';


// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


// views
import Home from "views/general/home";
import Profile from "views/general/profile/index"
import Tutor from "views/general/tutor/index"
import Dashboard from "views/general/dashboard/Index";
import Become from "views/become/index"
import Editschedule from "../views/general/editschedule"
import Myschedule from "../views/general/profile/myschedule"
import PayByLecture from "views/general/payment/payBylecture"
import Chatbox from "components/Chatbox/index"
import Register from "views/become/register"
import Report from "views/general/report"
import Report_detail from "views/general/report/detail"
import Faq from "views/general/FAQ"
import Lecture from "views/general/Lecture"


const General = () => {

  return (
    <>
      <IndexNavbar fixed />
      <Chatbox />
      <Switch>
        <Route path="/general/home" exact component={(Home)} />
        <Route path="/general/dashboard" exact component={(Dashboard)} />
        <Route path="/general/profile" exact component={RequireAuth(Profile)} />
        <Route path="/general/tutor/:id" exact component={RequireAuth(Tutor)} />
        <Route path="/general/become/" exact component={RequireAuth(Become)} />
        <Route path="/general/become/register" exact component={RequireAuth(Register)} />
        <Route path="/general/editschedule" exact component={RequireAuth(Editschedule)} />
        <Route path="/general/myschedule" exact component={RequireAuth(Myschedule)} />
        <Route path="/general/checkout/:id" exact component={RequireAuth(PayByLecture)} />
        <Route path="/general/report" exact component={RequireAuth(Report)} />
        <Route path="/general/report/detail/:id" exact component={RequireAuth(Report_detail)} />
        <Route path="/general/faq" exact component={Faq} />
        <Route path="/general/lecture" exact component={Lecture} />

        <Redirect from="/general/setting/" to="/general/profile" />
        <Redirect from="/general/" to="/general/home" />
      </Switch>
      <Footer />
    </>
  );
}


export default General