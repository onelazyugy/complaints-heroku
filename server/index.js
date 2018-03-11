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
  res.send('{"message":"save success!"}');
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