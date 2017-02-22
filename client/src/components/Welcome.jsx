import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="inner">
         <h2>Welcome Page</h2>
         <Link className="btn btn-lg" to="/games">Browse Albums!</Link>
      </div>
    );
  }
}
