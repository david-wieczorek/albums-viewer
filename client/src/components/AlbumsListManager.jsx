import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Album from './Album';

export default class AlbumsListManager extends PureComponent {
   render () {
      const { albums, searchBar, setSearchBar, deleteAlbum } = this.props;
      return (

         <div className="container">
            <div className="archive_options">
               <input type="search" placeholder="Search by Name" className="search-bar" onKeyUp={setSearchBar} />
               <Link to="/albums/add" className="btn">Add a new Album!</Link>
            </div>
            <div className="archive_list grid">
               {
                  // An album is only shown if its name contains the string from the searchBar
                  albums
                  .filter(album => album.name.toLowerCase().includes(searchBar))
                  .map((album, i) => {
                     return (
                        <Album  {...album}
                           key={album._id}
                           i={i}
                           deleteAlbum={deleteAlbum}
                        />
                     );
                  })
               }
            </div>
         </div>

      );
   }
}
