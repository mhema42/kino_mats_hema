import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { getScreenings, getScreeningsMovie } from "./public/script/loadScreening.js"; 
import api from "./public/script/apiLoader.js";
import { loadReviews } from "./public/script/apiLoader.js";
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
let catchedMovieId = 0.1; 
let catchedPageNumber = 0.1; 
let pageTotal; 
let j = 0; 

app.get("/api/movies/:movieId/reviews/:actualPage/:reviewPageId", async (req, res) => {
    let currentTime = new Date().toLocaleString(); 

    if(currentTime >= cachTimer || cachTimer === 1 || catchedMovieId != req.params.movieId || catchedPageNumber != req.params.actualPage){
        let data = await loadReviews(req.params.movieId, req.params.actualPage);
        pageTotal = data.meta.pagination.total;
        review = data.data.map(r => new reviews(r)); 

        cachTimer = new Date(new Date().getTime() + 2*60*1000).toLocaleString();
        catchedMovieId = req.params.movieId; 
        catchedPageNumber = data.meta.pagination.page;
    }
        
        for(let i = 0; i < review.length; i+5) {
                reviewArray[j] = review.splice(0, 5);
                j++; 
            }

       let arrayLength = reviewArray.length; 
       let reviewIndex = req.params.reviewPageId -1 + catchedPageNumber; 

        res.json({
            data: reviewArray[reviewIndex],
            currentArrayLength: arrayLength, 
            totalArrayLength: pageTotal,
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