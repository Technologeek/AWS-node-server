const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const request = require('request');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
request('http://169.254.169.254/latest/meta-ment/availability-zone', function (error, response, body) {
  if (!error && response) {
    console.log(response) // Show the HTML for the Google homepage. 
  }
  else {
    console.log("Error "+response)
  }
})
app.listen(port, console.log("Listening on port :" + port));