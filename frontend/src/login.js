import React from "react";
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleUserEmail = this.handleUserEmail.bind(this);
    this.handleUserPassword = this.handleUserPassword.bind(this);
  }

    validateForm() {
      return this.state.email.length > 0 && this.state.password > 0;
    }

    handleUserEmail(event) {
      this.setState({email: event.target.value})
    }

    handleUserPassword(event) {
      this.setState({password: event.target.value})
    }

    handleSubmit(event) {
      alert('Thanks, ' + this.state.email);
      event.preventDefault();
    }

  render() {
    return (
      <div className = "Login">
        <form onSubmit = {this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>
              Email
            </ControlLabel>
            <FormControl autoFocus type="email"
              value={this.state.email}
              onChange={this.handleUserEmail}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>
              Password
            </ControlLabel>
            <FormControl type = "password"
              value={this.state.password}
              onChange={this.handleUserPassword}
            />
          </FormGroup>
          <Button
          block
          bsSize="large"
          type="submit"
        >
          Login
        </Button>
        </form>
      </div>
    );
  }
}

// removed
// disabled={!this.validateForm()}
// from button
