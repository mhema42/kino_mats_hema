async function loadData() {
    const res = await fetch("http://localhost:5080/api/screeningtime");
    const data = await res.json(); 
    
    data.screen.forEach(showtime => {
        const li = document.createElement("li");
        const movieShowTime = document.createElement("span");
        movieShowTime.innerText = [ showtime.time.replace(/T(\T*)/, ", ") + ", " + showtime.room + ", " ]; 
        const movieTitle = document.createElement("a");
        movieTitle.innerText = showtime.title; 
        movieTitle.href = `/movies/${showtime.id}`;

        li.append(movieShowTime);
        li.append(movieTitle); 
        
        document.querySelector("#screening-list").append(li); 
    })
}; 

loadData();