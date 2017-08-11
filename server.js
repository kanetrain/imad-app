var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool= require('pg').pool;

var config= {
user: 'yogicool1',
database: 'yogicool1',
host: 'db.imad.hasura-app.io',
port: '5432'

};

var app = express();

app.use(morgan('combined'));














app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) 
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'))
);

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
