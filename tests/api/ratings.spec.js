//import { loadAllRatings } from "../../public/script/apiLoader.js";//
import { loadAllRatings } from "../../public/script/apiLoader.js";
import getRatings from "../../public/script/getRatings.js";

const api = { async loadComment() {[
    {
        "id": 165,
        "attributes": {
          "comment": "I'm so proud of my dad",
          "rating": 5,
          "author": 'Son',
          "verified": null,
          "createdAt": '2022-02-01T21:23:11.058Z',
          "updatedAt": '2022-02-01T21:23:11.058Z'
        }
      },
      {
        "id": 166,
        "attributes": {
          "comment": "I'm so proud of my dad",
          "rating": 5,
          "author": 'Son',
          "verified": null,
          "createdAt": '2022-02-01T21:23:35.561Z',
          "updatedAt": '2022-02-01T21:23:35.561Z'
        }
      },
      {
        "id": 167,
        "attributes": {
          "comment": "I'm so proud of my dad",
          "rating": 5,
          "author": 'Son',
          "verified": null,
          "createdAt": '2022-02-01T21:23:35.561Z',
          "updatedAt": '2022-02-01T21:23:35.561Z'
        }
      },
      {
        "id": 190,
        "attributes": {
          "comment": 'helt okej',
          "rating": 3,
          "author": 'hej',
          "verified": null,
          "createdAt": '2022-02-02T12:41:33.257Z',
          "updatedAt": '2022-02-02T12:41:33.257Z'
        }
      },
      {
        "id": 191,
        "attributes": {
          "comment": 'bra',
          "rating": 4,
          "author": 'hejsan',
          "verified": null,
          "createdAt": '2022-02-02T12:42:36.011Z',
          "updatedAt": '2022-02-02T12:42:36.011Z'
        }
      },
      {
        "id": 223,
        "attributes": {
          "comment": 'so so',
          "rating": 2,
          "author": 'Patrik',
          "verified": true,
          "createdAt": '2022-02-02T15:04:08.527Z',
          "updatedAt": '2022-02-02T15:04:08.527Z'
        }
      },
      {
        "id": 228,
        "attributes": {
          "comment": 'Helt ok!',
          "rating": 3,
          "author": 'John Doe',
          "verified": true,
          "createdAt": '2022-02-02T15:07:45.140Z',
          "updatedAt": '2022-02-02T15:07:45.140Z'
        }
      },
      {
        "id": 288,
        "attributes": {
          "comment": 'bleh',
          "rating": 2,
          "author": 'godmother',
          "verified": true,
          "createdAt": '2022-02-03T21:43:23.372Z',
          "updatedAt": '2022-02-03T21:43:23.372Z'
        }
      }
]}}

const movieId = 2;



test("Recieved data correct format", async () => {
    const payload = await getRatings(movieId, api);

    console.log(payload)
    expect(payload).toBeTruthy();
    expect(payload.data).toBeGreaterThanOrEqual(0);
    //expect(payload.length).toBeGreaterThanOrEqual(0);
    //expect(payload[0].attributes.rating).toBeGreaterThanOrEqual(0);

});

