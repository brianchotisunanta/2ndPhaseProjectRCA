// Custom Filter for dropdown menus:

var app = angular.module("movieNamesApp");

app.filter("filterGenre", function() {
  return function (input, genre, voteAverageRating) {      // genre & selectorRating = it can be named "whatever" you want, like "x"
    var output = [];
  // for-loop thru movies:
      for (var i = 0; i < input.length; i++) {
        var movie = input[i];
  // This is how you get the movie list to display when no dropdown values are selected:
  // still inside movie for loop:
        var movieMatched = false;   // doesn't show movie list
  // If genre is empty OR vote average is empty, show movie names on list:
          if (genre == '' && voteAverageRating == '') {   // was || but changed to &&
              movieMatched = true;    // shows movie list
          }
  // for-loop thru genre_id inside movie for-loop:
          for (var j = 0; j < movie.genre_ids.length; j++) {
            if (movie.genre_ids[j] == genre) {      // genre = it can be named "whatever" you want, like "x"
            movieMatched = true;
            }
          }
          if (movie.vote_average_filter == voteAverageRating) {
            movieMatched = true;
          }
        if (movieMatched) {
          output.push(movie);
        }
      }
    return output;
  }
});
