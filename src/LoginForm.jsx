import React, { Fragment } from 'react';

export class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        this.setState((state) => {
            return {
                ...state, 
                [event.target.name]: event.target.value,
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        // Send API CALL -  
    }
    



    render() {
        return (
            <Fragment>
                <h3>Login</h3>
                <form>
                    <div>
                        <label for = 'username'>Username</label>
                        <input type = 'text' name = 'username' value = {this.state.username} onChange = {this.handleChange}></input>
                    </div>
                    <div>
                        <label for = 'password'>Password</label>
                        <input type = 'text' name = 'password' value = {this.state.password} onChange = {this.handleChange}></input>
                    </div>
                    <div>
                        <input type = 'submit' value = 'Submit'></input>
                    </div>
                </form>
            </Fragment>
    )};
}
