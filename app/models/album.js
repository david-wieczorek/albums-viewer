// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Our schema definition
const albumSchema = new Schema(
   {
      name: String,
      year: Number,
      description: String,
      picture: String,
      postDate : { type: Date, default: Date.now } // Timestamp
   },
   {
      versionKey: false // You should be aware of the outcome after set to false
   }
);

// We export the schema to use it anywhere else
export default mongoose.model('Album', albumSchema);
