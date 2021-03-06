'use strict'
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const btoa = require('btoa');
const path = require('path');
const cors = require('cors');


const port = process.env.PORT || 5000;
let app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/ping', function (req, res) {
    res.send('{"message":"pong!"}');
});

app.post('/api/complaint', function (req, res) {
  console.log('req:', req.body);
  var payload = req.body;
  request({
    url: 'http://52.173.135.92:8080/complaint/submitComplaint',
    headers: {'Content-type' : 'application/json'},
    method: "POST",
    json: true,
    body: payload
  }, function(error, response, body){
    console.log('response.body:', response.body);
    console.log('body:', body);
    res.send(response.body);
  });
});

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is live at port: ${port}`);
});