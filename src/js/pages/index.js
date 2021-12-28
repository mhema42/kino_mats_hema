"use strict"

import loadJsonData from "../loadJson.js";
//You can use this to see if the render functions are workin, but it can easily be changed to render three movies for each section.  


(async () => {
    const jData = new loadJsonData();
            
    const current = await jData.loadCurrentMovies(); 
    current.slice(2, 5).forEach(Movie => //add slice before forEach here to only show 3 movies
        document.querySelector(".current-movieList").append(Movie.render())); 

    const upcoming = await jData.loadUpcomingMovies();
    upcoming.slice(2, 5).forEach(Movie =>   //add slice before forEach here to only show 3 movies
        document.querySelector(".upcoming-movieList").append(Movie.render())); 

    //popular movies will be sorted depending on rating later with a rating filter, but we will show three random movies for now. 
    current.slice(0, 3).forEach(Movie =>   //add slice on forEach here to only show 3 movies
            document.querySelector(".popular-movieList").append(Movie.render())); 
      
  })(); 



    