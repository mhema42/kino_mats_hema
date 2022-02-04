import fetch from "node-fetch";

test("Pagination Test1 Richards API and our API sends the same data for the same page", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=1&filters[movie]=1");
    let payload1 = await res1.json();
    
    const res2 = await fetch("http://localhost:5080/api/movies/1/reviews/1/0"); 
    let payload2 = await res2.json();

    expect(payload1.data[2].attributes.author === payload2.data[2].author).toBeTruthy();
    expect(payload1.data[2].attributes.comment === payload2.data[2].comment).toBeTruthy();
    expect(payload1.data[2].attributes.rating === payload2.data[2].rating).toBeTruthy();
    expect(payload1.data[2].id === payload2.data[2].id).toBeTruthy();
})

test("Pagination Test2 Richards API and our API sends the same data for the same page", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=8&filters[movie]=4");
    let payload1 = await res1.json();

    const dummy = await fetch("http://localhost:5080/api/movies/4/reviews/1/1"); 
    let dummyPay = await dummy.json();

    const res2 = await fetch("http://localhost:5080/api/movies/4/reviews/2/7"); 
    let payload2 = await res2.json();

    expect(payload1.data[3].attributes.author === payload2.data[3].author).toBeTruthy();
    expect(payload1.data[3].attributes.comment === payload2.data[3].comment).toBeTruthy();
    expect(payload1.data[3].attributes.rating === payload2.data[3].rating).toBeTruthy();
    expect(payload1.data[3].id === payload2.data[3].id).toBeTruthy();
})

test("Pagination Test3 Richards API and our API sends the same data for the same page", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=12&filters[movie]=4");
    let payload1 = await res1.json();

    const dummy = await fetch("http://localhost:5080/api/movies/4/reviews/1/1"); 
    let dummyPay = await dummy.json();

    const dummy2 = await fetch("http://localhost:5080/api/movies/4/reviews/2/6"); 
    let dummyPay2 = await dummy2.json();

    const res2 = await fetch("http://localhost:5080/api/movies/4/reviews/3/11"); 
    let payload2 = await res2.json();

    expect(payload1.data[4].attributes.author === payload2.data[4].author).toBeTruthy();
    expect(payload1.data[4].attributes.comment === payload2.data[4].comment).toBeTruthy();
    expect(payload1.data[4].attributes.rating === payload2.data[4].rating).toBeTruthy();
    expect(payload1.data[4].id === payload2.data[4].id).toBeTruthy();
})


test("Pagination Test4 Richards API and our API sends the same data for the same page", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=3&filters[movie]=8");
    let payload1 = await res1.json();
    
    const res2 = await fetch("http://localhost:5080/api/movies/8/reviews/1/2"); 
    let payload2 = await res2.json();

    expect(payload1.data[2].attributes.author === payload2.data[2].author).toBeTruthy();
    expect(payload1.data[2].attributes.comment === payload2.data[2].comment).toBeTruthy();
    expect(payload1.data[2].attributes.rating === payload2.data[2].rating).toBeTruthy();
    expect(payload1.data[2].id === payload2.data[2].id).toBeTruthy();
})

    




