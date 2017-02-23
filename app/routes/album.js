// We import our game schema
import Album from '../models/album';

// Get all the games sorted by postDate
const getAlbums = (req, res) => {
    // Query the db, if no errors send all the games to the client
    Album.find(null, null, { sort: { postDate : 1 } }, (err, albums) => {
        if (err) {
            res.send(err);
        }
        res.json(albums); // Games sent as json
    });
}

// Get a single game filtered by ID
const getAlbum = (req, res) => {
    const { id } = req.params;
    // Query the db for a single game, if no errors send it to the client
    Album.findById(id, (err, album) => {
        if (err) {
            res.send(err);
        }
        res.json(album); // Game sent as json
    });
}

// Get the body data and create a new Game
const postAlbum = (req, res) => {
  // We assign the game info to a empty game and send a message back if no errors
  let album = Object.assign(new Album(), req.body);
  // ...Then we save it into the db
  album.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'album created' }); // A simple JSON answer to inform the client
  });
};

// Delete a game by the given ID
const deleteAlbum = (req, res) => {
// We remove the game by the given id and send a message back if no errors
  Album.remove(
    { _id: req.params.id },
    err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Album successfully deleted' }); // A simple JSON answer to inform the client
    }
  );
};

// We export our functions to be used in the server routes
export { getAlbums, getAlbum, postAlbum, deleteAlbum };
