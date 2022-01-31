
const url = document.location + '';
const movieId = url.split('/').filter(e => e).slice(-1);
let reviewPageId = 0; 


(async function loadReview() {
    const res = await fetch("http://localhost:5080/api/movies/"+ movieId + "/reviews/" +reviewPageId); 
    const payload = await res.json();
    let arrayLength = payload.metaArrayData; 
    let pageNumber = reviewPageId + 1; 

    const reviewTotal = document.querySelector(".reviewTotal");
    if(arrayLength >= 1) {
        reviewTotal.innerHTML = "Review page " +pageNumber + "/ " +arrayLength;
    } else {
        reviewTotal.innerHTML = "There are currently no reviews for the selected movie, so you could be the first one to review it ;)"
    }
    
    const nextReviewButton = document.querySelector(".nextReviewButton");
    nextReviewButton.onclick = function nextReviewPage () {
        if(reviewPageId +1 < arrayLength){
            reviewPageId++;  
        } else { 
            reviewPageId;
        } 
        loadReview(); 
    }

    const previousReviewButton = document.querySelector(".previousReviewButton");
    previousReviewButton.onclick = function previousReviewPage () {
        if(reviewPageId -1 +arrayLength >= arrayLength){
            reviewPageId--;   
        } else {
            reviewPageId;  
        } 
        loadReview(); 
    }
  
    document.querySelector(".movie-review").innerHTML = ""; 

    if(arrayLength >= 1) {
        payload.data.forEach(review => {
            const li = document.createElement("li");
            const author = document.createElement("span");
            author.innerText = review.author + " "; 
            const rating = document.createElement("a");
            rating.innerText = "Rating: " + review.rating + " "; 
            const comment = document.createElement("a");
            comment.innerText = "comment: " + review.comment; 
            
            if(author) {li.append(author)}; 
            if(rating) {li.append(rating)}; 
            if(comment) {li.append(comment)}; 
            document.querySelector(".movie-review").append(li);
        });    
    }     
  })(); 


const submitBtn = document.querySelector("#addBtn");

submitBtn.addEventListener("click", async (ev) => {
    ev.preventDefault();
    const rating = document.querySelector("#rate").value;
    const comment = document.querySelector("#addComment").value;
    const author = document.querySelector("#addName").value;
    console.log(movieId, rating, comment, author);

    await fetch("http://localhost:5080/api/reviews", { 
        method: "POST",
        headers: {
             "Content-Type": "application/json",
        },
        body: JSON.stringify({
            movieId: movieId,
            comment: comment,
            rating: rating,
            name: author
        }), 
    }    
); 
});
