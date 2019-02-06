const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3004/similarlist', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', err => console.log('CONNECTION ERROR: ', err));
db.once('open', () => console.log('Connected to the database.'));

module.exports = db;