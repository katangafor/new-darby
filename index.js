const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/info', (req, res) => {
  res.send('here are some words'); 
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`new-darby listening on ${port}`);