import  getReview  from "../../public/script/getReview.js";

const rate = { async loadRating() {
    return [
        {   "movie":  
                {   
                    "id": 2,
                    "data": {
                        "comment": "Good",
                        "rating": "5",
                        "name": "Olaf"
                    }
                },
            "movie":
                {   
                    "id": 2,
                    "data": {                        
                        "comment": "So so",
                        "rating": "3",
                        "name": "Dennis"
                    }
                },
            "movie":
                {
                    "id": 2,
                    "data": {                        
                        "comment": "So so",
                        "rating": "5",
                        "name": "Alex"
                    }
                },
            "movie":
                {
                    "id": 2,
                    "data": {                       
                        "comment": "So so",
                        "rating": "0",
                        "name": "Dennis"
                    }
                },
            "movie":    
                {
                    "id": 2,
                    "data": {
                        "comment": "So so",
                        "rating": "2",
                        "name": "Dennis"
                    }
                },
            "movie":
                {
                    "id": 2,
                    "data": {
                        "comment": "So so",
                        "rating": "1",
                        "name": "Dennis"
                    }
                },
            }
        ]
    }   
};


const rat = { async loadRating() { 
    return [ {
    "id": 2,
                
                    "data": {
                        "comment": "So so",
                        "rating": "1",
                        "name": "Dennis"
                    }
            }
    ]}
}



test("Recieved data ", async () => {
    const payload = await getReview(rat);
    
    expect(payload).toBeTruthy();
    expect(payload.data.rating).toBeTruthy();

});

