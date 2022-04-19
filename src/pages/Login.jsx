import React, { Component } from 'react';
import Form from '../componentes/formLogin/Form';

class Login extends Component {
  render() {
    return (
      <div data-testid="page-login">
        <p>Login</p>
        <Form />
      </div>
    );
  }
}

export default Login;
