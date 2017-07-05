  // Note to self: make custom filter in their own customfile.js

var app = angular.module("movieNamesApp");

app.filter("filterGenre", function() {

  return function (input, genre, voteAverageRating) {      // genre & selectorRating = it can be named "whatever" you want, like "x"

    var output = [];

    // This is how you make Custom Filter for movie genres:
      // loop through input
            //input = movie names
      // find each movie that has the 'genre' in the 'genres' property of the movie
      // push those movies to the output array
      // movies with those associated genres

// for-loop thru movies:
    for (var i = 0; i < input.length; i++) {

      var movie = input[i];

// refers to movie:
// {
//       "vote_count": 1087,
//       "id": 297762,
//       "video": false,
//       "vote_average": 7,
//       "title": "Wonder Woman",
//       "popularity": 115.676051,
//       "poster_path": "/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
//       "original_language": "en",
//       "original_title": "Wonder Woman",
//       "genre_ids": [
//         28,
//         12,
//         14,
//         878
//       ],
//       "backdrop_path": "/hA5oCgvgCxj5MEWcLpjXXTwEANF.jpg",
//       "adult": false,
//       "overview": "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
//       "release_date": "2017-05-30"
//     }



// refers to genre_id:
// [
//         28,
//         12,
//         14,
//         878
//       ]



// This is how you get the movie list to display when no dropdown values are selected:
// still inside movie for loop:
     var movieMatched = false;

// If genre is empty OR vote average is empty, show movie names on list:
     if (genre == '' || voteAverageRating == '') {
       movieMatched = true;
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


  // I'm adding everything below line 78 start:
      // if (genre == false && voteAverageRating == true) {
      //   movieMathched = true;
      // }
      // if (genre == true && voteAverageRating == false) {
      //   movieMatched = true;
      // }

      // end

      if (movieMatched) {
        output.push(movie);
      }
      
    }
    return output;

    // the 'genre names' are shown because you named them on the option element in the index.html with the id#'s as the values.
  
    }
  
});

// to get movie names list showing again without filter say if genre is blank show