import './nav.scss';
import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  active (path) {
    // Returns active when the path is equal to the current location
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }
  render () {
    return (
      <div className="main">
         <header>
            <h1>My albums archive</h1>
         </header>
         <nav className="main-navigation">
            <ul className="nav">
               <li className={this.active('/')}><Link to="/">Home</Link></li>
               <li className={this.active('/about')}><Link to="/about">About</Link></li>
               <li className={this.active('/contact')}><Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
         {this.props.children}
         <footer>
            <h6>Made by DWK</h6>
         </footer>
      </div>
    );
  }
}
