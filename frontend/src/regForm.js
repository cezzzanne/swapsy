import React from 'react';

class RegForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Name',
            email: 'Email',
            password: 'Password'
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
            <div className="field">
            <form>
                    <input className="input is-medium is-rounded" type="text" name='name' placeholder='name' onChange={this.handleNameChange} />
            </form>
                </div>
                <div className="field">
            <form>
                    <input className="input is-medium is-rounded" type="text" name='email' placeholder='email' onChange={this.handleEmailChange} />
            </form>
                </div>
                <div className="field">
            <form>
                    <input className="input is-medium is-rounded" type="text" name='password' placeholder='password' onChange={this.handlePasswordChange} />
            </form>
                </div>
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default RegForm;


