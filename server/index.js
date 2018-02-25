'use strict'
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const btoa = require('btoa');
const path = require('path');


const port = process.env.PORT || 5000;
let app = express();
app.use(bodyParser.json());

app.get('/api/ping', function (req, res) {
    res.send('pong!');
});

// app.use(express.static(__dirname + '/build/'));
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname+'/build/index.html'));
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is live at port: ${port}`);
});