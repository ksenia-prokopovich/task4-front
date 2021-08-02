import React from 'react';
import './Login.css';
import {handleErrors} from "../../utils/error-handler";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hasError: false
        }
    }

    singIn() {
        fetch('https://server-37go.onrender.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
        })
            .then(response => handleErrors(response))
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                localStorage.setItem("user", JSON.stringify(response))
                window.location.href = "/"
            })
            .catch(() => {
                this.state.hasError = true
                this.setState(this.state)
            })
    }

    emailChange(event) {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    }

    render() {
        return <div className='login container'>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" value={this.state.email} onChange={this.emailChange.bind(this)}
                       aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.passwordChange.bind(this)} id="exampleInputPassword1"/>
            </div>
            {this.state.hasError && (<div className="alert alert-danger" role="alert">
                Your email or password is incorrect!</div>)}
            <button className="btn btn-primary" type="submit" onClick={this.singIn.bind(this)}>
                Sign In
            </button>
        </div>
    };
}

export default Login;
