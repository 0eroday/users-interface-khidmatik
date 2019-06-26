import React from 'react'
import {Link} from 'react-router-dom';
import a1 from '../../img/1.jpg';
import a2 from '../../img/2.jpg';
import a3 from '../../img/3.jpg';
import a4 from '../../img/4.jpg';


const Home_Team_section = () => {
  return (
    <div className="team_info">
      <div className="title">
        <h1>Meet Our team</h1>
      </div>
      <div className="team_box ">
          <div className="img-box ">
            <img src={a1} alt="a1" />
          </div>
          <div className="details">
            <div className="team_desc">
              <h1> Member Name <br/><span>Developer</span></h1>
              <ul>
              <li><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
              <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
              <li><Link to=""><i className="fab fa-instagram"></i></Link></li>
            </ul>
            </div>
          </div>
      </div>
      <div className="team_box">
          <div className="img-box">
            <img src={a2}  alt="a2"/>
          </div>
          <div className="details">
            <div className="team_desc">
              <h1> Member Name <br/><span>Developer</span></h1>
              <ul>
              <li><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
              <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
              <li><Link to=""><i className="fab fa-instagram"></i></Link></li>
            </ul>
            </div>
          </div>
      </div>
      <div className="team_box">
          <div className="img-box">
            <img src= {a3}  alt="a3"/>
          </div>
          <div className="details">
            <div className="team_desc">
              <h1> Member Name <br/><span>Developer</span></h1>
              <ul>
              <li><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
              <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
              <li><Link to=""><i className="fab fa-instagram"></i></Link></li>
            </ul>
            </div>            
          </div>
      </div>
      <div className="team_box">
          <div className="img-box">
            <img src= {a4}  alt="a4"/>
          </div>
          <div className="details">
            <div className="team_desc">
              <h1> Member Name <br/><span>Developer</span></h1>
              <ul>
              <li><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
              <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
              <li><Link to=""><i className="fab fa-instagram"></i></Link></li>
            </ul>
            </div>
          </div>
      </div>
      {/* <div className="box">
          <div className="icon">01</div>
          <div className="details">
            <h3>Nour</h3>
            <p>sit amet consectetur adipisicing elit. Quas autem et quis, enim est necessitatibus consequatur doloremque labore optio voluptatibus sed molestias iste. Exercitationem odit ex, consequatur necessitatibus molestias obcaecati.</p>
            <a href=""> know more</a>
          </div>
      </div> */}
      {/* <div className="box">
          <div className="icon">01</div>
          <div className="details">
            <h3>Y A S S I N</h3>
            <p>sit amet consectetur adipisicing elit. Quas autem et quis, enim est necessitatibus consequatur doloremque labore optio voluptatibus sed molestias iste. Exercitationem odit ex, consequatur necessitatibus molestias obcaecati.</p>
            <a href=""> know more</a>
          </div>
      </div> */}
    </div>
  )
}

export default Home_Team_section
