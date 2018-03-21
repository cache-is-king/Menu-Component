// require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());

app.options('*', cors());

app.use('/restaurants', routes);

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/', express.static(path.join(__dirname, '../public')));

module.exports = app;
