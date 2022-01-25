const API_BASE = 'https://lernia-kino-cms.herokuapp.com/api';

export default async function loadScreenings() {
  const res = await fetch(API_BASE + '/screenings?populate=movie');
  const payload = await res.json();
  console.log(payload);
  return payload.data;
}