const baseURL = 'https://api.giphy.com/v1/gifs/random?api_key=OoASkUyHZQ9SK0yxkMOEvCin0rTdF7Fo&tag=&rating=r';
const key = 'OoASkUyHZQ9SK0yxkMOEvCin0rTdF7Fo';
const tag = '';
const rating = 'g';
let url;

const gifResult = document.getElementById('randoGif');
// gifResult.setAttribute('id', 'img');

const button = document.querySelector('.feelingLucky');
button.addEventListener('click', fetchResults);

function fetchResults(object) {
    console.log(object);  
    // object.preventDefault();
    let url = baseURL;
    console.log(url);
        fetch(url)
        .then(function(response){
        // console.log(response);
        return response.json();
        })
        .then(function(data) {
        console.log(data);
        displayResults(data);
    })
}

// fetch(baseURL)
// .then(function(response){
//     console.log(response);
//     return response.json();
// })


// function displayResults(e) {                         
//     e.preventDefault();
//     url = `${baseURL}` + '?api-key=' + key + '&tag=' + '&rating=' + rating;
//     console.log("URL:", url);
// }

// const gifMeBro = async () => {
//     const response = await fetch(baseURL);
//     const json = await response.json();
//     return json;
    
// }

// gifMeBro().then(json => {
//     console.log(json);
// })

function displayResults(json) {
    console.log('Results:', json.data.bitly_gif_url);
    while (gifResult.firstChild) {
        gifResult.removeChild(gifResult.firstChild);
    }
    let gifs = json.data.images.original.url;
        // for(let i = 0; i < gifs.length; i++) {
            let gifMaker = document.createElement('img');
            let yourGif = document.createElement('div');
            gifMaker.setAttribute("src", json.data.image_original_url);
            gifMaker.setAttribute("width", "100%");
            gifMaker.setAttribute("height", "750");
            // gifMaker.setAttribute("justify-content", "center")
            gifMaker.setAttribute("alt", "ur gif no load :(");
            gifMaker.className += "otherclass";

            document.body.appendChild(gifMaker);
            
            // let current = gifs.data.bitly_gif_url[i];
            // console.log("Current:", current);

            yourGif.href = gifs;

            gifResult.appendChild(gifMaker);
            gifMaker.appendChild(yourGif);
        // }
        console.log(json);
        // var x = document.createElement("IMG");
        // let x = document.createElement("gifShow");
    
}












