import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class AlbumListManager extends PureComponent {

   constructor (props) {
      super(props);
      // The initial state
      this.state = { albums: [], selectedAlbum: {}, searchBar: '' };
      // Bind the functions to this (context)
      this.getAlbum = this.getAlbum.bind(this);
   }

   getAlbum () {
      fetch(`http://localhost:8080/album/${id}`, {
         headers: new Headers({
            'Content-Type': 'application/json',
         }),
         method: 'GET',
      })
      .then(response => response.json())
      .then(response => {
         // The game is also removed from the state thanks to the filter function
         //this.setState({ games: this.state.games.filter(game => game._id !== id) });
         console.log(response.message);
      });
   }

   render () {
      const { album } = this.state;
      return (
         <div className="container">
            item album
         </div>
      );
   }
}
