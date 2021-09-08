'use strict';

require('dotenv').config();
const express = require('express'); // import express
// const WeatherData = require('./assests/Weather.json');

const axios = require('axios');

const cors = require('cors'); //import

const server = express();
server.use(cors())

const PORT = process.env.PORT;


const moduleWeather=require('./weather')

const moduleMovie =require('./movies');

// http://localhost:3010/
server.get('/', (req, res) => {
    res.send('Welcome To My Page');
});

// http://localhost:3010/weather/?city=Amman
server.get('/weather',moduleWeather);

//http://localhost:3010/movies?query=amman
server.get('/movies',moduleMovie);

// uneversal : http://localhost:3000/******* */  **Always End**
server.get('*', (req, res) => {

    res.status(404).send('Sory , Page Not found');
});

server.listen(PORT, () => {
    console.log(`im listening on ${PORT}`);
});

