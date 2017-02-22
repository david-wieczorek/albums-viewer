import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Layout extends PureComponent {
   render () {
      return (
         <div className="archives">
            {this.props.children}
         </div>
      );
   }
}
