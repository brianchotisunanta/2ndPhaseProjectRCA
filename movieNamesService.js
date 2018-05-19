app.service("movieNamesService", function($http)  {
var key = "";

  this.getMovieName = function() {
    return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+api_key+"&language=en-US&page=1");
  }

  // Movie Genre Request
  this.getMovieGenre = function() {
    return $http.get("https://api.themoviedb.org/3/genre/movie/list?api_key="+api_key+"&language=en-US");
  }

});

// this = refers to movieNamesService
// this.getMovieName = movieNamesService.getMovieName() = name on the movieNamesController side

//getMovieName = name of the function; you can name it anything as long as the name is both the same in the service and controller.
