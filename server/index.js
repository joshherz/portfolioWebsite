const express = require('express');
const db = require('../db/index.js');
const port = 8080;
const app = express();
const bodyParser = require('body-parser');

//app.use('/', express.static('public'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, ()=> {console.log(`listening on port number: ${port}`)});

// app.get('/portfolio/api', (req,res) => {
//   res.send('Hello World. This is my portfolio website');
// });