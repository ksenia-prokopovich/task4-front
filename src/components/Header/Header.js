import React from 'react';
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem("user")
        }
    }

    delete() {
        localStorage.removeItem("user")
        window.location.href = "/login"
    }

    render() {
        return <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {this.state.user && <ul className="navigation-list">
                    <a className="navbar-brand">{JSON.parse(this.state.user).firstname}</a>
                <div>
                    <button className="btn btn-outline-dark">
                        <a className="nav-link active" aria-current="page" href="/">User list</a>
                    </button>
                    <button className="btn btn-outline-dark" type="submit">
                        <a className="nav-link active" aria-current="page" onClick={this.delete}>Log Out</a>
                    </button>
                </div>
                </ul>}
                {!this.state.user && <ul className="navigation-list">
                        <div>
                            <button className="btn btn-outline-dark" type="submit">
                                <a className="nav-link active" aria-current="page" href="/login">Sign In</a>
                            </button>
                            <button className="btn btn-outline-dark" type="submit">
                                <a className="nav-link active" aria-current="page" href="/registration">Sign Up</a>
                            </button>
                        </div>
                    </ul>}
            </nav>
        </header>
    }
}


export default Header;
