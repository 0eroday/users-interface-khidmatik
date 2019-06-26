import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
// components imports
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home_Solutions_Section from './components/layout/Home_solutions_section';
import Home_About_Section from './components/layout/Home_about_section';
import Home_Team_Section from './components/layout/Home_Team_section';
import Footer from './components/layout/Footer';

const App = () =>(
  <Router>
    <Fragment >
      <Navbar/>
     <Route exact path="/" component= {Landing } />
     <section className="container s-container">
       <Switch>
          <Route exact path="/register" component = {Register} />
          <Route exact path="/login" component = {Login} />
          <Route exact path="/" component = {Home_Solutions_Section} />
          {/* <Route exact path="/login" component = {Home_about_section}/> */}
       </Switch>
     </section>
     <section className='container'>
     <Home_About_Section/>
     </section>
     <Home_Team_Section/>
     <Footer />
    </Fragment>
    </Router>
)
export default App;