const express = require('express');
const path = require('path');
const parser = require('body-parser');
const PORT = 3004;
const db = require('../database/index.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));

app.listen(PORT, () => console.log('Listening to port ', PORT));