export default class Movie {
    constructor (data) {
        this.title = data.title;
        this.rating = data.rating;
        this.description = data.description;
        this.posterUrl = data.posterUrl;
        this.releaseDate = data.releaseDate; 
    }

    render() {
        const movieCard = document.createElement("li");
        movieCard.className = "movieCard-item";

        const poster = document.createElement("img");
        poster.className ="movieCard-poster";
        poster.src = this.posterUrl; 
        movieCard.append(poster)

        this.card = card; 

        return card; 

    }

}