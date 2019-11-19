
//const env = require('dotenv').load();
//const port = process.env.PORT || 3200;
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);


server.use((error, req, res, next) => {
    // log the error...  
    res.status(error.httpStatusCode).json({ message: error.message });    
});

server.listen(3333);