import React from 'react';
import './App.css';
import Registration from "./components/Registration/Registration";
import UsersList from "./components/Users-list/Users-list";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import NotFound from "./components/Not-found/Not-found";

class App extends React.Component {

  constructor() {
      super();
      this.state = {
          user: localStorage.getItem('user')
      }
  }

  render() {
    return <div>
        <Header/>
        <Router>
            <Switch>
                {this.state.user && <Route exact path="/" component={UsersList} />}
                {!this.state.user && <Route path="/registration" component={Registration} />}
                {!this.state.user && <Route path="/login" component={Login}/>}
                <Route component={NotFound}/>
            </Switch>
        </Router>
    </div>
  };
}


export default App;
