const express = require('express');
const path = require('path');
const parser = require('body-parser');
const PORT = 3004;
const db = require('../database/index.js');
const getSimilar = require('./controller.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/item', getSimilar);

app.listen(PORT, () => console.log('Listening to port ', PORT));