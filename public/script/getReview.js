import fetch from "node-fetch";

export default async function getReview() {
    const url = "http://localhost:5080/api/movies/";
    const movieId = url.split('/').filter(e => e).slice(-1);    
    const res = await fetch("http://localhost:5080/api/movies/"+ movieId + "/reviews"); 
    const payload = await res.json();

    return payload.data;
};

getReview();