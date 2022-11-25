import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (ComposedComponent) {
  class AdminAuthorization extends Component {

    componentWillMount() {
      if (!localStorage.getItem('token') || jwt_decode(localStorage.getItem('token')).role !== 'admin') {
        window.location = "/";
      }
    }

    componentWillUpdate(nextProps) {
      if (!localStorage.getItem('token') || !jwt_decode(localStorage.getItem('token')).role !== 'admin') {
        window.location = "/";
      }
    }

    render() {
      return <ComposedComponent />
    }
  }

  return AdminAuthorization;
}