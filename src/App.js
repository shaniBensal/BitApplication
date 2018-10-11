import React, { Component } from 'react';

import HomePage from './pages/HomePage/HomePage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import EditContact from './pages/EditContact/EditContact'
import SignUp from './pages/SignUp/SignUp'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetails from './pages/ContactDetails/ContactDetails'
import { HashRouter as Router, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import UserService from './services/UserService'
import { observable, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends Component {
  state = {
    logIn: UserService.getLoggedInUser()
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" render={() => (this.state.logIn ? <HomePage /> : <Redirect to='/signUp' />)} />
            <Route path="/contact/edit/:id?" component={EditContact} />
            <Route exact path="/contact/:id" component={ContactDetails} />
            <Route exact path="/contact" render={() => (this.state.logIn ? <ContactPage /> : <Redirect to='/signUp' />)} />
            <Route path='/signup' component={SignUp} />
            <Route path='/statistic' component={StatisticPage} />
            {/* <PrivateRoute
              exact
              user="CHECK_USER_PROP"
              path="/admin"
              component={Admin}
            /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
