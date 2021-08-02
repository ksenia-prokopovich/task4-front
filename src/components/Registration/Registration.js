import React from 'react';
import './Registration.css';



class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            email: '',
            password: ''
        }
    }

    create(){
        fetch('https://server-37go.onrender.com/users/create', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstname: this.state.firstname, email: this.state.email, password: this.state.password}),
        })
            .then(response => response.json())
            .then();
    }

    firstnameChange(event) {
        this.setState({
            ...this.state,
            firstname: event.target.value
        });
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

        return <div className='registrations container'>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" value={this.state.firstname} onChange={this.firstnameChange.bind(this)} className="form-control"
                       aria-describedby="textHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" value={this.state.email} onChange={this.emailChange.bind(this)} className="form-control"
                       aria-describedby="emailHelp"/>
                    </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button className="btn btn-primary" type="submit">
                <a className="nav-link active" aria-current="page" href="/login" onClick={this.create.bind(this)}>Sign Up</a>
            </button>
        </div>
    };
}

export default Registration;
