import React, { PureComponent } from 'react';
import { Link } from 'react-router';

// <button role="button" onClick={() => deleteAlbum(_id)}>Delete</button>
export default class Album extends PureComponent {
   render () {
      const { _id, i, name, description, picture, deleteAlbum } = this.props;
      return (
         <div className="item Grid--center Grid-cell--center Grid--gutters">
            <div className="thumbnail">
               <img src={picture} alt="..." className="thumbnail" />
            </div>
            <div className="item_content">
               <h3>{name}</h3>
               <p className="description">{`${description.substring(0, 20)}...`}</p>
               <div className="btn-group btn-group__center">
                  <Link className="btn" to={'/albums/' + _id}>View album</Link>
               </div>
            </div>
         </div>
      );
   }
}
