import { getScreeningsMovie } from "../../public/script/loadScreening.js";

const now = new Date;
const showRoom = "Stora salongen";
let movieId = 1;

test("Recieved data contains date&time which exceeds current date", async () => {
    const payload = await getScreeningsMovie(movieId);

    expect(payload.data[0].time < now);
});

test("Recieved data contains data and contains correct showroom", async () => {
    const payload = await getScreeningsMovie(movieId);

    expect(payload.data.length).toBeGreaterThan(0);   
    expect(payload.data[0].time).toBeTruthy();
    expect(payload.data[0].room).toBe(showRoom);
});

test("Recieved data contains correct title", async () => {
    
    const movieTitel = [
        "The Shawshank Redemption", 
        "The Godfather", 
        "The Godfather: Part II", 
        "The Dark Knight", 
        "12 Angry Men"
    ];

    for (;movieId < movieTitel.length;) {
        const payload = await getScreeningsMovie(movieId)
        expect(payload.data[0].title).toBe(movieTitel[movieId - 1])
        movieId ++
    };
});