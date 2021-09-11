
// const axios=require('axios');

// // http://localhost:3010/weather?city_Name=Amman
// // server.get('/weather', (req, res) => {
// //     const cityName = req.query.cityName;

// //     let weatherArray =[]
// //     let weather = WeatherData.find( item=> {

// //         if (cityName=== item.city_name ){
// //             weatherArray = item.WeatherData.map((day) => {
// //                 let newObj = new Forecast(day);
// //                 return newObj;
// //               });
// //             }
// //           });
// //   res.send(weatherArray);
// // });

// // function Forecast(day) {
// //   (this.date = day.valid_date),
// //     (this.desc = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}`);
// // }

// function moduleMovie(req,res){ 

//     let name = req.query.city;
//     let URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${process.env.Weather_APP_Key}`;
    
//          axios
//          .get(URL)
//          .then(modulew =>{
//             let newDay = modulew.data.data.map((item) => {
//                 return new Forecast(item);
//          })
//          res.send(newDay);
//             })
//             .catch(()=>{
//                 res.status(404).send('Sorry , Not found 404');
//             })
        
//     }

//     function Forecast(day) {
//         (this.date = day.valid_date),
//             (this.desc = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description}`);
//     }

//     module.exports=moduleMovie;