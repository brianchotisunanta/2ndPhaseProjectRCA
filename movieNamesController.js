app.controller("movieNamesController", function($scope, movieNamesService, $http) {

  $scope.movies = [];
  $scope.movieGenres = '';
  $scope.selected = '';

// Movie Name Titles with filter:
  movieNamesService.getMovieName().then(function(response) {
    console.log(response.data.results);

    $scope.movies = response.data.results;      //.results is the object of the movie names API
    for (var i = 0; i < $scope.movies.length; i++) {

      $scope.movies[i].vote_average_filter = Math.floor($scope.movies[i].vote_average)
        //Math.floor rounds down 7.6 to 7
        //setting vote_average_filter = vote_average
        // this results in Wonder Woman vote_average = 7.1 filtering when selecting 7
    }
  })

// Note to self: make custom filter in their own customfile.js

// Movie Genres:
  $scope.movieGenres = [];

  movieNamesService.getMovieGenre().then(function(response) {
    console.log(response);

    $scope.movieGenres = response.data.genres;      // .genres is last because it is the object of the movie genre API
                          //object.property; property = can be an object
    console.log($scope.movieGenres);  //this shows the movie genres id & name;
  })
});







// movieNamesService.getMovieName().then(function(response) {
//     console.log(response.data.results);

//     $scope.movieNames = response.data.results;
//     for (var i = 0; i < $scope.movieNames.length; i++) {
//       $scope.movieNames[i].vote_average_filter = Math.floor($scope.movieNames[i].vote_average)
//         //Math.floor rounds down 7.6 to 7
//         //setting vote_average_filter = vote_average
//         // this results in Wonder Woman vote_average = 7.1 filtering when selecting 7
//     }
//     console.log($scope.movieNames)
//   });
