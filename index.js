var bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/knock-knock', function (req, res) {

  res.send({
    "response" : `Who's there?`
  });

});

var port = process.env.PORT || 3000;

app.listen(port);