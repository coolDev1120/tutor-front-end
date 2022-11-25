import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!localStorage.getItem('token') || !jwt_decode(localStorage.getItem('token')).role) {
        window.location = "/auth";
      }
    }

    componentWillUpdate(nextProps) {
      if (!localStorage.getItem('token') || !jwt_decode(localStorage.getItem('token')).role) {
        window.location = "/auth";
      }
    }

    render() {
      return <ComposedComponent />
    }
  }

  return Authentication;
}
