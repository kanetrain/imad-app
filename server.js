var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send('Article one requested and will be served here');
});

app.get'/article-two', function (req, res) {
  res.send('Article one requested and will be served here');
}):

app. get'/article-three',function (req, res) {
res send('article three requested and will be served here');
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
