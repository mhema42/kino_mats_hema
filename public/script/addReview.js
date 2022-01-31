



/*
export default function newReview() {
    
    document.querySelector("#addBtn").addEventListener("submit", async () => {
       
       const movieId = Screenings.data.attributes.movie.data.id;;
       const rating = document.querySelector("#rate").find(":selected").val();
       const commentText = document.querySelector("#addComment").value;
       const author = document.querySelector("#addName").value;
       console.log(movieId, rating, commentText, author);
       await fetch(`https://lernia-kino-cms.herokuapp.com/api/movies/${movieId}/reviews/`), {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify({
               movieId: movieId,
               comment: commentText,
               rating: rating,
               name: author
           })
           
       };console.log(body);
    });
    loadReview(movieId);
};

newReview(); 


export default function newReview() {
    const rating = document.querySelector("#rate").find(":selected").text();
    document.querySelector("#addBtn").addEventListener("submit", async (event) => {
       event.preventDefault();
       const movieId = event.target.movie.value;
       await fetch(`/api/movies/${movieId}/reviews`), {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify({
               movieId: event.target.movie.value,
               comment: event.target.comment.value,
               rating: event.target.rating.value,
               name: event.target.name.value
           })
       };
    });
    loadReview(movieId);
};
*/