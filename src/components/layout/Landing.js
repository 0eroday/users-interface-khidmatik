import React from 'react'
import {Link} from 'react-router-dom';
const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">khidmatik</h1>
          <p className="lead">
            in our website you can find all the online services solutions
          </p>
          <div className="buttons">
            <Link to="register" className="btn btn-primary">See Our Solutions</Link>
            <Link to="login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
