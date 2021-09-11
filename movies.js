
const axios=require('axios');
let myMemory={};


function moduleMovie(req,res){ 
    
    let name = req.query.query;

    if(myMemory[name]!==undefined)

    {
      res.send(myMemory[name]);
    }
       
    else {

        let URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.movie_APP_Key}&language=en-US&page=1&include_adult=false&query=${name}`;

        axios
        .get(URL)
        .then (modulem => {
            let newMovie = modulem.data.results.map((item) => {

                return new movie(item);
        })
        myMemory[name]=newMovie;

        res.status(200).send(newMovie);
        })
        .catch(()=>{
            res.status(404).send('Sorry , Not found 404');
        })

    }

    }


    function movie(day) {
      (this.title = day.original_title),
        (this.overview = day.overview),
        (this.average_votes = day.vote_average),
        (this.total_votes = day.vote_count),
        (this.popularity = day.popularity),
        (this.released_on = day.release_date);
    }

    module.exports=moduleMovie;