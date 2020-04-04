const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fakeData', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose-d!'));

module.exports = db;
