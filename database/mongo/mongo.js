const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fakeData', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose-d!'));

const nameSchema = mongoose.Schema({
  item: String,
  type: String,
  price: Number,
  colors: String,
  image: Number,
  collections: String
});

const nameModel = mongoose.model('names', nameSchema);

module.exports = db;
