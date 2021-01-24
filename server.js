const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/models.js'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/router.js'); //importing route
routes(app); //register the route


app.listen(port);


app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

console.log('REST API WORKING ' + port);
