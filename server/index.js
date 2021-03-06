const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const PORT = 3004;
const seed = require('../database/seed.js');
const db = require('../database/index.js');
const { getSimilar, getLike } = require('./controller.js');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/similar/:id', getSimilar);
app.get('/like/:id', getLike);

app.listen(PORT, () => console.log('Listening to port ', PORT));
