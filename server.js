'use strict';

require('dotenv').config();
const express = require('express'); // import express
const WeatherData = require('./assests/Weather.json');
const cors = require('cors'); // import cors

const server = express();
server.use(cors())

const PORT = process.env.PORT;

/* 
we can request 3 ways : 
1 : browser
2 : from Extentsions vs : Thunder Client
3 : Postman

*/

// http://localhost:3010/
server.get('/', (req,res) =>{
    res.send('Send 1');
});

// http://localhost:3000/test
server.get('/test',(req,res) =>{
res.send('Send 2');
});

// http://localhost:3000/clouds
server.get('/clouds',(req,res) =>{
    let description = WeatherData[0].data.map( item=> {
        console.log(item.weather.description);
        return [item.datetime,item.weather.description];
        
    });
    res.send(description);
    });

    // http://localhost:3000/getPock?name=bulbasaur
server.get('/getPock',(req,res) =>{
    const description = req.query.description;
    const x = WeatherData[0].data.find(item =>{
        if(item.description === description)
            return item;
    });
    res.send(x)
    });

 // uneversal : http://localhost:3000/******* */  **Always End**
server.get('*',(req,res) =>{

    res.status(404).send('Sory , Page Not found');
    });



server.listen(PORT, () =>{
    console.log(`im listening on ${PORT}`);
});


