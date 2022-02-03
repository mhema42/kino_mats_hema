# kino-ytterhogdal

Startpage
    •	/api/screeningtime
    •	Method = GET

Moviepage
    •	/api/movies/:movieId/screeningtime
    •	Method = GET
        :movieId - för filtrering på filmtitlar

Reviews
    •	/api/movies/:movieId/reviews/:actualPage/:reviewPageId
    •	Method = GET

    •	/api/movies/:movieId/reviews
    •	Method = POST

Body: 	
    data: {
            author: req.body.name,
            comment: req.body.comment,
            rating: req.body.rating,
            movie: req.params.movieId,
        }

Ratings
    (Imdb ratings)
    •	/api/movies/:movieId/rating
    •	Method = GET
    (average ratings)
    •	/api/movies/:movieId/ratings
    •	Method = GET