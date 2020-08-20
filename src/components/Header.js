import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div className="header">
         <ul className="jumbo">
              <li className="slogan"><a>Basic React Js Tricks</a></li>
              <li><a href="https://instagram.com/ashay__tiwari"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/ashay-tiwari-447604197/"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.facebook.com/ashay.tiwari.71"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://github.com/ashaytiwari"><i className="fab fa-github"></i></a></li>
          </ul>
          
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">CODEBOX <i className="fas fa-cube"></i> </Link>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/postLists">AJAX-Request</Link></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#About">About</a></li>
                  <li className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown">Hooks
                    <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><Link to="/useState">useState-Hook</Link></li>
                      <li><Link to="/useEffect">useEffect-Hook</Link></li>
                      <li><Link to="/useReducer">useReducer-Hook</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        
        </div>
    )
  }
}

export default withRouter(Header)
