// const express = require('express');
// const cors = require('cors');

// const getWeatherData = require('./assests/Weather.json');
// const getPokeData = require('./assests/pokeData.json');

// // console.log(getWeatherData);
// // console.log(getPokeData);

// const server = express();
// server.use(cors())

// const PORT = 4003;

// // http://localhost:4003/
// server.get('/', (req, res) => {
//     res.send('Welcome To My Page');
//     console.log('Welcome To My Page !');
// });

// // http://localhost:4003/pokiData
// server.get('/pokiData', (req, res) => {
//     let specialData = getPokeData.results.map(item => {
//         return item.name;
//     });
//     console.log(specialData);
//     res.status(200).send(specialData);
// });

// // http://localhost:4003/singleData?name=bulbasaur
// server.get('/singleData', (req, res) => {
// const pokeName = req.query.name;
// const result = getPokeData.results.find(item =>{
//     if(item.name === pokeName){
//         return item;
//     }
// });
// res.send(result)
// });

// // uneversal : http://localhost:3000/******* */  **Always End** for wrong rout
// server.get('*', (req, res) => {

//     res.status(404).send('Sorry , Page Not found , Rout is wrong');
// });

// server.listen(PORT, () => {
//     console.log(`Im listining on ${PORT}`);
// })