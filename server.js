'use strict';

require('dotenv').config();
const express = require('express'); // import express
const WeatherData = require('./assests/Weather.json');

const axios = require('axios');

const cors = require('cors'); //import

const server = express();
server.use(cors())

const PORT = process.env.PORT;

// http://localhost:3010/
server.get('/', (req, res) => {
    res.send('Welcome To My Page');
});

// http://localhost:3010/weather?city_Name=Amman
// server.get('/weather', (req, res) => {
//     const cityName = req.query.cityName;

//     let weatherArray =[]
//     let weather = WeatherData.find( item=> {

//         if (cityName=== item.city_name ){
//             weatherArray = item.WeatherData.map((day) => {
//                 let newObj = new Forecast(day);
//                 return newObj;
//               });
//             }
//           });
//   res.send(weatherArray);
// });

// function Forecast(day) {
//   (this.date = day.valid_date),
//     (this.desc = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}`);
// }

server.get("/weather", (req, res) => {
    let name = req.query.city;
    let URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${process.env.Weather_APP_Key}`;
    let getWeather = async () => {
        try {
            let arr = await axios.get(URL);
            console.log(arr);
            let newDay = arr.data.data.map((item) => {
                return new Forecast(item);
            });
            res.send(newDay);
        } catch {
            console.log(err);
        }
    };
    getWeather();
    function Forecast(day) {
        (this.date = day.valid_date),
            (this.desc = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}`);
    }
});


server.get("/movies", (req, res) => {
    let name = req.query.query;
  
               
    let URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.movie_APP_Key}&language=en-US&page=1&include_adult=false&query=${name}`
    let getMovies = async () => {
      try {
        let arr = await axios.get(URL);
        console.log(arr.data);
        let newMovie = arr.data.results.map((item) => {

          return new movie(item);
        });
        res.send(newMovie);
      } catch {
        (err) => console.log(err);
      }
    };
    getMovies();
    function movie(day) {
      (this.title = day.original_title),
        (this.overview = day.overview),
        (this.average_votes = day.vote_average),
        (this.total_votes = day.vote_count),
        (this.popularity = day.popularity),
        (this.released_on = day.release_date);
    }
  });

// uneversal : http://localhost:3000/******* */  **Always End**
server.get('*', (req, res) => {

    res.status(404).send('Sory , Page Not found');
});



server.listen(PORT, () => {
    console.log(`im listening on ${PORT}`);
});

