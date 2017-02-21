import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Layout extends PureComponent {
   render () {
      return (
         <div className="view">
            <nav className="navbar navbar-inverse">
               <Link className="navbar-brand" to="/">Home</Link>
            </nav>
            {this.props.children}
            <footer className="text-center">
               <p>© 2016 Samuele Zaza</p>
            </footer>
         </div>
      );
   }
}
