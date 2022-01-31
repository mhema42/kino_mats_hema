import { Screenings } from "./loadScreening";
import fetch from "node-fetch";
import reviews from "./loadReviews";
import { loadReviews } from "./apiLoader.js"



//document.querySelector(".submit-review").innerHTML = ""; 

 export default function newReview() {
     const submitBtn = document.querySelector("#addBtn");
     submitBtn.addEventListener("submit", async (event) => {
        add.preventDefault();

        const movieId = event.target.movie.value;
        await fetch(`/api/movies/${movieId}/reviews`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: add.target.name.value,
                comment: add.target.comment.value,
                rating: add.target.rating.value
            })
        };
     });

     loadReviews(movieId);
 };

 newReview();
/*
(() => {
    document.querySelector(".menu-btn button-review").addEventListener("submit", async (event) => {
      add.preventDefault();
  
      const movieId = event.target.movie.value;
      await fetch(`/api/movies/${movieId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: add.target.name.value,
          comment: add.target.comment.value,
        }),
      });
  
      loadReviews(movieId);
    });
  })
  
  (); */