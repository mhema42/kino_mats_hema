export default async function getRatings(movieId, api) {
    let data = (await api.loadAllRatings(movieId));  
    //let metaMsg = "User rating: ";  
    
    if(data.length < 5) {
        data = await loadRating(req.params.movieId);
        const id = data.attributes.imdbId; 
        data = await loadRatings(id);
        metaMsg = "Imdb rating: "; 
    } else {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i].attributes.rating;
        }
        data = Math.round(sum / data.length);
    }
    return data;
}