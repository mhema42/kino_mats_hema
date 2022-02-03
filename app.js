import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import fetch from "node-fetch";
import { loadReviews } from "./public/script/apiLoader.js";
import { loadRating } from "./public/script/apiLoader.js";
import loadRatings from "./public/script/loadRatings.js";
import { getScreenings, getScreeningsMovie } from "./public/script/loadScreening.js"; 
import api from "./public/script/apiLoader.js";
import { loadAllRatings } from "./public/script/apiLoader.js";

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

app.get("/api/movies/:movieId/reviews/:reviewPageId", async (req, res) => {
    const review = await loadReviews(req.params.movieId);
    let j = 0; 
    const reviewArray = []; 

    for(let i = 0; 0 < review.length; i+5) {
            reviewArray[j] = review.splice(0, 5); 
            j++; 
        }
        let arrayLength = reviewArray.length; 

        res.json({
            data: reviewArray[req.params.reviewPageId],
            metaArrayData: arrayLength
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

//------------------- test -------------------------------

app.get("/api/movies/:movieId/ratings", async (req, res) => {
    const data = await loadAllRatings(req.params.movieId);  

    res.json(data) 
});

// --------------------test--------------------------------


app.get("/api/movies/:movieId/rating", async (req, res) => {
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