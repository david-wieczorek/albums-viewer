import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

export default class AddGameContainer extends Component {
   constructor (props) {
      super(props);
      // Initial state
      this.state = { newAlbum: {}};
      // Bind this (context) to the functions to be passed down to the children components
      this.submit = this.submit.bind(this);
      this.uploadPicture = this.uploadPicture.bind(this);
      this.setAlbum = this.setAlbum.bind(this);
   }
   submit () {
      // We create the newGame object to be posted to the server
      const newAlbum = Object.assign({}, { picture: $('#picture').attr('src') }, this.state.newAlbum);
      fetch('http://localhost:8080/albums', {
         headers: new Headers({
            'Content-Type': 'application/json'
         }),
         method: 'POST',
         body: JSON.stringify(newAlbum)
      })
      .then(response => response.json())
      .then(data => {
         console.log(data.message);
         // We go back to the games list view
         hashHistory.push('/albums');
      });
   }
   uploadPicture () {
      filepicker.pick (
         {
            mimetype: 'image/*', // Cannot upload other files but images
            container: 'modal',
            services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
            openTo: 'COMPUTER' // First choice to upload files from
         },
         function (Blob) {
            console.log(JSON.stringify(Blob));
            $('#picture').attr('src', Blob.url);
         },
         function (FPError) {
            console.log(FPError.toString());
         }
      );
   }
   // We make sure to keep the state up-to-date to the latest input values
   setAlbum () {
      const newAlbum = {
         name: document.getElementById('name').value,
         description: document.getElementById('description').value,
         year: document.getElementById('year').value,
         picture: $('#picture').attr('src')
      };
      this.setState({ newAlbum });
   }
   render () {
      return <Form submit={this.submit} uploadPicture={this.uploadPicture} setGame={this.setAlbum} />
   }
}
