export async function getScreenings(api) {
  const now = new Date();
  //const now2 = new Date();
  //const result = getDate(now2.setDate(now2.getDate() + 6));
  const screen = (await api.loadScreenings())
    .filter(obj => {
    //const screeningTime = new Date(obj.time);
      const screeningTime = new Date(obj.attributes.start_time);
      return screeningTime //> now && screeningTime < result;
    })
    .slice(0, 10);
 
  return {
    data: screen.map(obj => {
      return {
        time: obj.attributes.start_time,
        room: obj.attributes.room,
        movie: {
          id: obj.attributes.movie.data.id,
          title: obj.attributes.movie.data.attributes.title,
        }
      };
    }),
  };
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