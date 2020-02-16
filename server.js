const express = require('express');
const app = express();
const port = 3000;
const restRouter = require('./routes/rest');

//app.get('/', (req, res) => res.send('Hello World '))
app.use('', restRouter);
//see express doc for detail

app.listen(port, () => console.log(`running on ${port}`))