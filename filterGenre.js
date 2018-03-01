//custom filter for movie genre_id

var app = angular.module("movieNamesApp");

app.filter("filterGenre", function() {

  return function(input, genre) {   //genre = named whatever you want

    var output =[];

// first, for-loop thru movie:
    for (var i = 0; i < input.length; i++) {

      var movie = input[i];

// second, for-loop thru genre_id inside movie for-loop
      for (var j = 0; j < movie.genre_ids.length; j++) {

        if (movie.genre_ids[j] == genre) {    //genre = named whatever you want

          output.push(movie);
        }
      }
    }
    return output;
  }


});
