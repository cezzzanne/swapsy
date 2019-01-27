import React from 'react';

class RegForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value})
        }
    handleEmailChange(event) {
        this.setState({email: event.target.value})
        }
    handlePasswordChange(event) {
        this.setState({password: event.target.value})
        }

    handleSubmit(event) {
        alert('Thanks, ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <form>
                <label>
                    Name:
                    <input type="text" name='name' onChange={this.handleNameChange} />
                </label>
            </form>
            <form>
                <label>
                    Email:
                    <input type="text" name='email' onChange={this.handleEmailChange} />
                </label>
            </form>
            <form>
                <label>
                    Password:
                    <input type="password" name='password' onChange={this.handlePasswordChange} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Submit" />
            </form>
            </div>

        );
    }
}

export default RegForm;
