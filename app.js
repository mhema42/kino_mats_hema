import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import fetch from "node-fetch";

import { loadReviews } from "./public/script/apiLoader.js";
import { loadRating } from "./public/script/apiLoader.js";
import loadRatings from "./public/script/loadRatings.js";
import { getScreenings, getScreeningsMovie } from "./public/script/loadScreening.js"; 
import api from "./public/script/apiLoader.js";
import reviews from "./public/script/loadReviews.js";

const app = express();

app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine('handlebars', engine({
    defaultLayout: 'index',
    helpers: {
        markdown: md => marked(md)
    },
}));

app.get("/", async (req, res) => {
    res.render("main");
});

app.get("/api/screeningtime", async (req, res) => {
    const screening = (await getScreenings(api));

    res.json(screening)
}); 

//used for the caching function for the review page
let cachTimer = 1; 
let review; 
let reviewArray = []; 
let cachedMovieId = 0.1; 
let cachedPageNumber; 
let cachedLastPage;   
let pageTotal; 
let lastPage; 
let j = 0; 
let reviewIndex = 1; 

app.get("/api/movies/:movieId/reviews/:actualPage/:reviewPageId", async (req, res) => {
    let currentTime = new Date().toLocaleString(); 

    if(cachedMovieId != req.params.movieId) {reviewArray.splice(0, reviewArray.length); j = 0;}
    if(currentTime >= cachTimer || cachTimer === 1 || cachedMovieId != req.params.movieId || cachedPageNumber < req.params.actualPage || pageTotal === req.params.reviewPageId){
        let data = await loadReviews(req.params.movieId, req.params.actualPage);
        pageTotal = data.meta.pagination.total;
        lastPage = data.meta.pagination.pageCount;
        review = data.data.map(r => new reviews(r));

        cachTimer = new Date(new Date().getTime() + 2*60*1000).toLocaleString(); 
        cachedMovieId = req.params.movieId; 
        cachedPageNumber = data.meta.pagination.page;
    }
        for(let i = 0; i < review.length; i+5) {
                reviewArray[j] = review.splice(0, 5);
                j++; 
            }

       let arrayLength = reviewArray.length; 
       let remove = parseInt(cachedPageNumber); 

       if(cachedPageNumber > 1) {reviewIndex = parseInt(req.params.reviewPageId) + parseInt(cachedPageNumber) -remove}
       else {reviewIndex = req.params.reviewPageId};

        res.json({
            data: reviewArray[reviewIndex],
            currentArrayLength: arrayLength, 
            totalArrayLength: pageTotal,
            lastPage: lastPage,
        })
    }); 


// route for screeningtimes on movie page
app.get("/api/movies/:movieId/screeningtime", async (req, res) => {
    const screening = await getScreeningsMovie(req.params.movieId);

    res.json(screening)
}); 

app.get("/movies", async (req, res) => {
    const movies = await api.loadMovies();
    res.render("movies", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
    const movie = await api.loadMovie(req.params.movieId);
    if (movie) {
        res.render("movie", { movie });
    } else {
        res.status(404).render("404");
    }
});

app.get("/api/movies/:movieId/ratings/", async (req, res) => {
    const data = await loadRating(req.params.movieId);       
    const id = data.attributes.imdbId;  
    const imdb = await loadRatings(id);    
    res.json({
    rating: imdb        
    })            
}); 

app.use(express.json());

app.post("/api/movies/:movieId/reviews", async (req, res) => {
    const response = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {
      data: {
        author: req.body.name,
        comment: req.body.comment,
        rating: req.body.rating,
        movie: req.params.movieId,
      }
    }) })
    .then(res => {
      console.log(req.body);
      console.log(res);
      return res.json();  
    });
    res.status(201).end();
});

app.get("/about", async (req, res) => {
    res.render("about");
});

app.use("/404", async (req, res) => {
    res.render("404");
    res.status(404);
});

app.use("/", express.static("./public"));

app.listen(5080);

export default app;