# liri-node-app
DEVELOPER: LAURA NEFF

A command line node app that searches Spotify for songs, Bands in Town for concerts, and OMDB for movies so that the user can access information about songs, concerts, and movies easier. The app is composed of a javascript and a text file. The app primarily achieves its purpose in its javascript file, in which a switch-case statment checks the value stored in the second index of the command line. If the user types "concert-this" (inputted in the second index of the command line), followed by the name of the artist inputted into the third element on the command line, then information about different venue of concerts for that artist, along with the city, country, and the dates for the concert are retrieved from the Bands in Town API via the axios npm. If the user types "spotify-this-song" followed by the name of the song they want to search the Spotify API for via the Spotify npm, information about different artists, names of songs, links to the previews of the songs, and album names containing the song, all related to the song inputted, is generated. If the user types "movie-this" followed by the name of the movie they want to search the OMDb API for via the axios npm, information about the title, year, Imdb rating, country where it was filmed, language the movie is offered in, plot of the movie, and actors of the movie are generated. Lastly, if the user types "do-what-it-says", the program reads from another file called "random.txt" via the fs package, converts the text from there into an array, and takes the first element of the resulting array and treats it as an operator, or rather a value for the second index of the command line, so that the previously defined switch-case statement can run accordingly. 



![switch-case-1](cd /Users/LauraNeff/Desktop/Switch1.png)

![switch-case-2](/Users/LauraNeff/Desktop/Switch2.png)

![switch-case-1](/Users/LauraNeff/Desktop/Switch3.png)
