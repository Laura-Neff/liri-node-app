require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var axios = require("axios");

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


  


}






