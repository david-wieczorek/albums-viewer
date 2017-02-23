import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Game extends PureComponent {
   render () {
      const { _id, i, name, description, picture, toggleModal, deleteGame } = this.props;
      return (
         <div className="item Grid--center Grid-cell--center Grid--gutters">
            <div className="thumbnail">
               <img src={picture} alt="..." className="img-responsive thumbnail-pic" />
            </div>
            <div className="item_content">
               <h5>{name}</h5>
               <p className="description-thumbnail">{`${description.substring(0, 250)}...`}</p>
               <div className="btn-group" role="group" aria-label="...">
                  <button className="btn btn-danger" role="button" onClick={() => deleteGame(_id)}>Delete</button>
               </div>
            </div>
         </div>
      );
   }
}
