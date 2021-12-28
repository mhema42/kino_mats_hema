"use strict"

import loadJsonData from "./loadJson.js";
//You can use this to see if the fetch functions are working, we can remove it when we are adding the rendering function. 


(async () => {
    const jData = new loadJsonData();

    const movie = await jData.loadCurrentMovies(); 
    console.log(movie)

    const movie2 = await jData.loadUpcomingMovies(); 
    console.log(movie2)

})(); 


    