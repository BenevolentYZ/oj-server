const express = require('express');
const app = express();
const port = 3000;
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://yutianz:zyt930615@ds145304.mlab.com:45304/1805')

//app.get('/', (req, res) => res.send('Hello World '))
app.use(express.static(path.join(__dirname, '../public')));
app.use('', restRouter);
//see express doc for detail

app.listen(port, () => console.log(`running on ${port}`))