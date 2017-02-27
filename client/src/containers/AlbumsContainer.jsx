import React, { Component } from 'react';
import { AlbumsListManager } from '../components';

export default class AlbumsContainer extends Component {

   constructor (props) {
      super(props);
      // The initial state
      this.state = { albums: [], selectedAlbum: {}, searchBar: '' };
      // Bind the functions to this (context)
      this.deleteAlbum = this.deleteAlbum.bind(this);
      this.setSearchBar = this.setSearchBar.bind(this);
   }

   // Once the component mounted it fetches the data from the server
   componentDidMount () {
      this.getAlbums();
   }

   getAlbums () {
      fetch('http://localhost:8080/albums', {
         headers: new Headers({
            'Content-Type': 'application/json'
         })
      })
      .then(response => response.json()) // The json response to object literal
      .then(data => this.setState({ albums: data }));
   }

   deleteAlbum (id) {
      fetch(`http://localhost:8080/album/${id}`, {
         headers: new Headers({
            'Content-Type': 'application/json',
         }),
         method: 'DELETE',
      })
      .then(response => response.json())
      .then(response => {
         // The album is also removed from the state thanks to the filter function
         this.setState({ albums: this.state.albums.filter(album => album._id !== id) });
         console.log(response.message);
      });
   }

   setSearchBar (event) {
      // Super still filters super mario thanks to toLowerCase
      this.setState({ searchBar: event.target.value.toLowerCase() });
   }

   render () {
      const { albums, selectedAlbum, searchBar } = this.state;
      return (
         <div>
            <AlbumsListManager
               albums={albums}
               searchBar={searchBar}
               setSearchBar={this.setSearchBar}
               deleteAlbum={this.deleteAlbum}
            />
         </div>
      );
   }
}
