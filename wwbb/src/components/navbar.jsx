import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

export default class NavBar extends React.Component {

    constructor() {
        super();
    }

    render() {

        return(   
                <div className="nav-wrapper">
                    <div className="nav-container">

                        <Link to='/' className="brand-logo">WWBB</Link>

                        <ul id="slide-out" className="sidenav">
                          <li>
                            <Link className="sidenav-close" to="/">Home</Link>
                          </li>
                          <li>
                            <Link className="sidenav-close" to="/about">About</Link>
                          </li>
                          <li>
                            <Link className="sidenav-close" to="/media">Media</Link>
                          </li>
                          <li>
                            <Link className="sidenav-close" to="/contact">Contact</Link>
                          </li>
                        </ul>
                        <a href="#" data-target="slide-out" className="sidenav-trigger right"><i className="material-icons menu-icon icon-white">menu</i></a>
                    </div>
                </div>  
        )
    }
}