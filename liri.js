require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var fs = require("fs");

var moment = require("moment");



switch(process.argv[2])
{
    case "concert-this":
    var artist = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    
    .then(function(response) {
        // console.log(response);
        for(var i = 0; i < response.data.length; i++){
            console.log(response.data[i].venue.name);
            if(response.data[i].venue.region != "") {
                console.log(response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
            } else {
                console.log(response.data[i].venue.city + ", " + response.data[i].venue.country);
            }
            var eventDate = moment(response.data[i].datetime).format("MM DD YYYY");
            console.log(eventDate);
            
        }
    
  })
  .catch(function(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
  break;


  case "spotify-this-song":
  var song = process.argv[3];
  if(song === undefined){
      song = "The Sign";
  }
  spotify.search({type:"track", query:song})

  .then(function(response) {

    
    for(var i = 0; i < response.tracks.items.length; i++){

        if(song = "The Sign"){
            response.tracks.items[i].artists = "Ace of Base";
            response.tracks.items[i].name = "The Sign";
        }
        console.log("-----------------------------");
        console.log(response.tracks.items[i].artists);
        console.log(response.tracks.items[i].name);
        console.log(response.tracks.items[i].preview_url);
        console.log(response.tracks.items[i].album.name);
    }


  })
  .catch(function(err) {
    console.log(err);
  });
  break;


  case "movie-this":
  var movie = process.argv[3];
  if(movie === undefined){
    movie = "Mr. Nobody";
}
  axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + movie + "&y=&plot=short")

  .then(function(response) {
        
        console.log(response.data.Title);
        console.log(response.data.Year);
        console.log(response.data.imdbRating);
        console.log(response.data.Country);
        console.log(response.data.Language);
        console.log(response.data.Plot);
        console.log(response.data.Actors);
        
    

})
.catch(function(error) {
if (error.response) {
  console.log(error.response.data);
  console.log(error.response.status);
  console.log(error.response.headers);
} else if (error.request) {
  console.log(error.request);
} else {
  console.log("Error", error.message);
}
console.log(error.config);
});
break;


case "do-what-it-says":
fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
  
   
    console.log(data);
  
    
    var dataArr = data.split(",");

    console.log(dataArr[0]);
    console.log(dataArr[1]);

    process.argv[2] = dataArr[0];
    process.argv[3] = dataArr[1];

    console.log(process.argv[2]);
    console.log(process.argv[3]);

    
    


  });
  break;



  


  


}






