const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const request = require('request');
var router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.get("/region",function(req, res){
    var remote = request('http://169.254.169.254/latest/meta-data/placement/availability-zone');
    req.pipe(remote);
    remote.pipe(res);
  });
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port, console.log("Listening on port :" + port));