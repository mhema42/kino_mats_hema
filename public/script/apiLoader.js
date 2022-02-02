import fetch from "node-fetch";
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
  const res = await fetch(API_BASE + '/screenings?populate=movie&pagination%5Blimit%5D=100');
  const payload = await res.json();
  return payload.data;
}

export async function loadScreeningsMovie(movieId) {
  const res = await fetch(API_BASE + "/screenings?populate=movie&filters[movie]=" + movieId);
  const payload = await res.json();
  return payload.data;
}

export async function loadReviews(movieId) {
  const res = await fetch(API_BASE + "/reviews?filters[movie]=" + movieId);
  const payload = await res.json();
  return payload.data.map(r => new reviews(r)); 
}

export async function loadRating(movieId) {
  const res = await fetch(API_BASE + "/movies/" + movieId);
  const payload = await res.json();
  return payload.data;
}

export default {
  loadMovies: loadMovies,
  loadMovie: loadMovie,
  loadScreenings: loadScreenings,
  loadReviews: loadReviews,
  loadRating: loadRating,
  loadScreeningsMovie: loadScreeningsMovie
};