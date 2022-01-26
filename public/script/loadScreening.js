import { loadScreenings } from "./apiLoader.js";

export class Screenings {
  constructor (data) {
    this.title = data.attributes.movie.data.attributes.title; 
    this.id = data.attributes.movie.data.id; 
    this.room = data.attributes.room; 
    this.time = data.attributes.start_time;
  }
}
export async function getScreenings() {
  const now = new Date();
  const now2 = new Date();
  const result = new Date(now2.setDate(now2.getDate() + 6));
  console.log(now); 
  console.log(result); 
  const screen = (await loadScreenings())
  .filter(obj => {
    const screeningTime = new Date(obj.time);
    return screeningTime > now && screeningTime < result;
  })
  .slice(0, 10);
  
  return {
    screen
  }
}

/*export async function getScreenings() {
  const now = new Date();
  const screen = (await loadScreenings())
  .filter(obj => {
    const screeningTime = new Date(obj.time);
    return screeningTime > now;
  })
  .slice(0, 10);

  return {
    screen
  }
}
*/