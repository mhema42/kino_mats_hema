"use strict"

//You can use this to try if the fetch functions are working, we can remove it when we are adding the rendering function. 
import loadJsonData from "../src/js/loadJson.js";

(async () => {
    const jData = new loadJsonData();
    const movie = await jData.loadCurrentMovies(); 
    console.log(movie[0].title);  
    console.log(movie[0].posterUrl);    

    const jData2 = new loadJsonData();
    const movie2 = await jData2.loadUpcomingMovies(); 
    console.log(movie2[0].title);  
    console.log(movie2[0].posterUrl);  

})(); 


    