import React, { Component } from 'react';
import { createUser } from '../../services/userAPI';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleOnClick() {
    const { inputName } = this.state;
    createUser({
      name: inputName,
    });
  }

  render() {
    const { inputName } = this.state;
    const numberVerifyDisable = 3;

    return (
      <form>
        <label htmlFor="inputName">
          <input
            data-testid="login-name-input"
            name="inputName"
            type="text"
            onChange={ this.handleOnChange }
            value={ inputName }
          />
        </label>

        <button
          data-testid="login-submit-button"
          type="button"
          disabled={ inputName.length < numberVerifyDisable }
          onClick={ this.handleOnClick }
        >
          Entrar
        </button>

      </form>
    );
  }
}

export default Form;
