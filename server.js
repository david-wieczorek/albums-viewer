import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

// We gotta import our models and routes
import Game from './app/models/album';
import { getAlbums, getAlbum, postAlbum, deleteAlbum } from './app/routes/album';

const app = express(); // Our express server!
const port = process.env.PORT || 8080;
const mongoHost = 'mongodb://localhost:27017';


// DB connection through Mongoose
const options = {
   server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
   replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}; // Just a bunch of options for the db connection
mongoose.Promise = global.Promise;
// Don't forget to substitute it with your connection string
mongoose.connect(mongoHost, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// API routes
app.route('/albums')
// create an album
.post(postAlbum)
// get all the albums collection
.get(getAlbums);
app.route('/albums/:id')
// get a single album
.get(getAlbum)
// delete a single album
.delete(deleteAlbum);

// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
   res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);
