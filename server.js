const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const request = require('request');

let result = request('https://www.google.com/', function (error, response, body) {
  if (!error && response) {
  }
  else {
    console.log("Error "+response)
  }
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/region',function(req,res){
    res.send(result);
})

app.listen(port, console.log("Listening on port :" + port));