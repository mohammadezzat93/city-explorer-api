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

const axios=require('axios');

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

            return item;
        }
        
    });

    try {
        let result2 = resultObjecy.data.map(day =>{

            let date = day.valid_date;
            let description = day.weather.description;

            return new Forecast(date,description);
        });
        res.send(result2)
    }
    catch(error){
        res.send("Sorry, page not found")
    }
});


//http://localhost:3010/Movie?cityName=Amman
server.get('/Movie',(req,res)=>{
    const cityName =req.query.cityName;
     let url=`https://api.themoviedb.org/3/search/Movie?api_key=5b47c5f240da700445a4b450bb4f30de&cityName=${cityName}`;
                   
     let mov = [];
     axios.get(url).then(item=>{

       mov = item.map(item=>{
          return new Movie(item);
      });
      res.send(mov);
     });
 });

class Forecast{
    constructor(date,description){
        this.date = day.valid_date;
        this.desc = `Low of ${day.Low_temp}, high of ${day.high_temp} with ${day.weather.description}`
      }

}
class Movie{

    constructor(item){
      this.name=item.name;
      this.overview=item.overview;
      this.vote_average=item.vote_average;
      this.vote_count=item.vote_count;
    
    }
}
    // function Forecast(day){
    //     this.date = day.valid_date;
    //     this.desc = `Low of ${day.Low_temp}, high of ${day.high_temp} with ${day.weather.description}`
    // }

// uneversal : http://localhost:3000/******* */  **Always End**
server.get('*', (req, res) => {

    res.status(404).send('Sory , Page Not found');
});



server.listen(PORT, () => {
    console.log(`im listening on ${PORT}`);
});
