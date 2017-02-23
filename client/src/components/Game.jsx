import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Game extends PureComponent {
   render () {
      const { _id, i, name, description, picture, deleteGame } = this.props;
      console.log(this.props);
      return (
         <div className="item Grid--center Grid-cell--center Grid--gutters">
            <div className="thumbnail">
               <img src={picture} alt="..." className="img-responsive thumbnail-pic" />
            </div>
            <div className="item_content">
               <h5>{name}</h5>
               <p className="description-thumbnail">{`${description.substring(0, 250)}...`}</p>
               <button role="button" onClick={() => deleteGame(_id)}>Delete</button>
               <div className="btn-group btn-group__center" role="group" aria-label="...">
                  <Link className="btn" to={'/albums/' + _id}>View album</Link>
               </div>
            </div>
         </div>
      );
   }
}
