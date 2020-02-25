const express = require('express');
const app = express();
const port = 3000;
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const path = require('path');
var http = require('http');
var socketIO = require('socket.io');
var io = socketIO();
var editorSocketService = require('./services/editorSocketService')(io);

mongoose.connect('mongodb://yutianz:zyt930615@ds145304.mlab.com:45304/1805')

//app.get('/', (req, res) => res.send('Hello World '))
app.use(express.static(path.join(__dirname, '../public')));
app.use('', restRouter);
//see express doc for detail

//app.listen(port, () => console.log(`running on ${port}`))
const server = http.createServer(app);
io.attach(server);
server.listen(port);
server.on('listening', () => {
    console.log('App is listening to port 3000');
});

app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public')});
})