const express = require('express');
const mongo = require('mongoose');
const path = require('path');
const api = require('./server/api.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = 8080;
app.listen(port,()=>{console.log(`Server run at port ${port}`)});



