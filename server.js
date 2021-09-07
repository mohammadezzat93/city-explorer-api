// 'use strict';

// require('dotenv').config();
// const express = require('express'); // import express
// const WeatherData = require('./assests/Weather.json');
// const cors = require('cors'); //import

// const server = express();
// server.use(cors())

// const PORT = process.env.PORT;

// // http://localhost:3010/
// server.get('/', (req, res) => {
//     res.send('Welcome To My Page');
// });

// // http://localhost:3000/getWeather?name=bulbasaur
// server.get('/getWeather', (req, res) => {
//     const city_name = req.query.city_name;

//     const newArray = weatherDate[0].data.find( item=> {
//         if (item.city_name === city_name) 
//             return item;
//     });
//     res.send(newArray)
//     });

//     const Weather = WeatherData[0].data.map( item => {
//         let object = new Forecast(item);
//         return object;
//     });

//     res.send(Weather);

// class Forecast {

//     constructor(item) {

//         this.description = item.weather.description;
//         this.data = item.valid_date;
//     }
// }

// // uneversal : http://localhost:3000/******* */  **Always End**
// server.get('*', (req, res) => {

//     res.status(404).send('Sory , Page Not found');
// });



// server.listen(PORT, () => {
//     console.log(`im listening on ${PORT}`);
// });





// =======================================================================================================



'use strict';

require('dotenv').config();
const express = require('express'); // import express
const WeatherData = require('./assests/Weather.json');
const cors = require('cors'); //import

const server = express();
server.use(cors())

const PORT = process.env.PORT;

// http://localhost:3010/
server.get('/', (req, res) => {
    res.send('Welcome To My Page');
});

// http://localhost:3010/weather?city_Name=Amman
// https://localhost:3010/weather?cityName=${cityName}
server.get('/weather', (req, res) => {
    const cityName = req.query.cityName;

    let weatherArray =[]
    let resultObjecy = WeatherData.find( item=> {

        if (item.city_name === cityName){

             weatherArray = item.data.map(day =>{
                const obj = new Forecast(day);
                return obj;
            })
        }
    });
    res.send(resultObjecy)
    // console.log(weatherArray);
    // console.log(resultObjecy);
    });


    function Forecast(day){
        this.date = day.valid_date;
        this.desc = `Low of ${day.Low_temp}, high of ${day.high_temp} with ${day.weather.description}`
    }

// uneversal : http://localhost:3000/******* */  **Always End**
server.get('*', (req, res) => {

    res.status(404).send('Sory , Page Not found');
});



server.listen(PORT, () => {
    console.log(`im listening on ${PORT}`);
});


