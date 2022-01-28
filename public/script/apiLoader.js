import fetch from "node-fetch";
import { Screenings } from "./loadScreening.js"; 
import reviews from "./loadReviews.js"; 

const API_BASE = 'https://lernia-kino-cms.herokuapp.com/api';

export async function loadMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  return payload.data;
}

export async function loadMovie(id) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  return payload.data;
}

export async function loadScreenings() {
  const res = await fetch(API_BASE + '/screenings?populate=movie');
  const payload = await res.json();
  return payload.data.map(da => new Screenings(da));
}

export async function loadReviews(movieId) {
  const res = await fetch(API_BASE + "/reviews?filters[movie]=" + movieId);
  const payload = await res.json();
  return payload.data.map(r => new reviews(r)); 
}