import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
// components imports
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home_solutions_section from './components/layout/Home_solutions_section';

const App = () =>(
  <Router>
    <Fragment >
      <Navbar/>
     <Route exact path="/" component= {Landing } />
     <section className="container">
       <Switch>
          <Route exact path="/register" component = {Register} />
          <Route exact path="/login" component = {Login} />
          <Route exact path="/" component= {Home_solutions_section} />
       </Switch>
     </section>
    </Fragment>
    </Router>
)
export default App;