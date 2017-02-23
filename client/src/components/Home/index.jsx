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
      <div className="wrapper">
         <header>
            My albums Collection
         </header>
         <nav className="main-navigation">
            <ul className="nav">
               <li className={this.active('/')}><Link to="/">Home</Link></li>
               <li className={this.active('/albums')}><Link to="/albums">Albums collection</Link></li>
               <li className={this.active('/contact')}><Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
         <div className="main">
            <div className="content">
               {this.props.children}
            </div>
         </div>
         <footer>
            Made by DWK
         </footer>
      </div>
    );
  }
}
