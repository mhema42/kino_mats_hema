import fetch from "node-fetch";

export default async function (id) {
    
    fetch("https://imdb8.p.rapidapi.com/title/get-ratings?tconst=" + id , {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "67baa3e498mshe9d27c22177b7a4p13141bjsnbc2fd5344d9d"
        }
    })

        .then(response => {
            return response.json().then((data) => {
            const imdbrating = data.rating / 2; 
            console.log(imdbrating);          
            return imdbrating;
            })
            
        })

   
        /*.then(data => {
            const imdbrating = data.rating / 2; 
            console.log(imdbrating);          
            return imdbrating;
        })*/

        .catch(err => {
            console.error(err);
        })
      
};