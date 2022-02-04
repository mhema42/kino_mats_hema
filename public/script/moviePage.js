const url = document.location + '';
const movieId = url.split('/').filter(e => e).slice(-1);
let reviewPageId = 0; 
let actualPage = 1; 
let payload; 
let lastPage; 
let totalArrayLength; 

async function loadReview () {
    const res = await fetch("http://localhost:5080/api/movies/"+ movieId + "/reviews/" + actualPage + "/"+ reviewPageId); 
    payload = await res.json();
    let arrayLength = payload.currentArrayLength;
    lastPage = payload.lastPage; 

    totalArrayLength = payload.totalArrayLength; 
    let pageNumber = reviewPageId + 1; 
    let intervalsVariable = actualPage * 5; 

    const reviewTotal = document.querySelector(".reviewTotal");
    if(arrayLength >= 1) {
        reviewTotal.innerHTML = "Review page " +pageNumber + "/ " +totalArrayLength;
    } else {
      if (reviewPageId + 1 > intervalsVariable - 1) {
        actualPage++;
        reviewPageId++;
      }
      reviewPageId;
    }
    loadReview();
  };

  const previousReviewButton = document.querySelector(".previousReviewButton");
  if (pageNumber === 1) {
    (previousReviewButton.disabled = true),
      previousReviewButton.classList.add("disabledButton");
  } else {
    (previousReviewButton.disabled = false),
      previousReviewButton.classList.remove("disabledButton");
  }
  previousReviewButton.onclick = function previousReviewPage() {
    let divider = (intervalsVariable = intervalsVariable - 5);
    if (reviewPageId - 1 + arrayLength >= arrayLength) {
      reviewPageId--;
      if (reviewPageId + 1 === divider) {
        actualPage--;
      }
    } else {
      reviewPageId;
    }
    loadReview();
  };

  document.querySelector(".movie-review").innerHTML = "";

  if (arrayLength >= 1) {
    payload.data.forEach((review) => {
      const li = document.createElement("li");
      const author = document.createElement("span");
      author.innerText = review.author + " ";
      const rating = document.createElement("a");
      rating.innerText = "Rating: " + review.rating + " ";
      const comment = document.createElement("a");
      comment.innerText = "Comment: " + review.comment;

      if (author) {
        li.append(author);
      }
      if (rating) {
        li.append(rating);
      }
      if (comment) {
        li.append(comment);
      }
      document.querySelector(".movie-review").append(li);
    });
  }

loadReview();

// fetch to local API for screening times for individual movies
(async () => {
    const res = await fetch("http://localhost:5080/api/movies/" + movieId + "/screeningtime");
    const data = await res.json(); 

    data.data.forEach(showtime => {
        const li = document.createElement("li");
        const movieShowTime = document.createElement("span");
        movieShowTime.innerText = [ showtime.time.replace(/T/, " kl ").replace(/:00.000Z/, " i ") + showtime.room + showtime.title ];

        li.append(movieShowTime);
     
        document.querySelector(".screenings-for-each-movie").append(li); 
    }); 
})();

(async () => {
  const res2 = await fetch(
    "http://localhost:5080/api/movies/" + movieId + "/ratings/"
  );
  const rate = await res2.json();
  document.querySelector(".movie-rating").innerHTML = rate.metaMsg + " " + JSON.stringify(rate.rating);
})();


document.querySelector("#addBtn").onclick = async (ev) => {
  ev.preventDefault();
  const rating = document.querySelector("#rate").value;
  const comment = document.querySelector("#addComment").value;
  const author = document.querySelector("#addName").value;

  await fetch(`/api/movies/${movieId}/reviews`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieId: movieId,
      comment: comment,
      rating: rating,
      name: author,
    }),
  });

  document.querySelector("#rate").selectedIndex = 0;
  document.querySelector("#addComment").value = "";
  document.querySelector("#addName").value = "";

  loadReview();
};
