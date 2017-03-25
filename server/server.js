/*jshint esversion:6 */

const express = require('express');
const app = express();
const CONFIG = require('./config/config');
const bodyParser = require ('body-parser');
const methodOverride = require('method-override');

const db = require('./models');
let Cards = db.Card;
const cardsRoute = require('./routes/cards');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api/kanban/todo', cardsRoute);

app.get('/', (req, res) =>{
  res.send('fawka is workin');
});

app.listen(8080, function(){
  console.log('sever started');
  db.sequelize.sync();
});

module.exports = app;
