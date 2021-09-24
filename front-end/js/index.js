// --------------- PARAMETRES DES API --------------- //

const TeddiesAPI = 'http://localhost:3000/api/teddies';
const TeddiesId = 'http://localhost:3000/api/teddies/:_id';
const TeddiesOrder = 'http://localhost:3000/api/teddies/order';

// --------------- CONNEXION AVEC l'API --------------- //
 




async function getTeddies () {
    fetch(TeddiesAPI)
    .then( data => data.json())
    .then( jsonListTeddies => {
        createCards (jsonListTeddies);

    });
}

function createCards (jsonTeddies) {
    for(let jsonTeddy of jsonTeddies){
        document.getElementsByClassName("Teddies-card")[0].innerHTML += ` <a href="product.html" id="template-card" class="col-2 justify-content-center text-center">
                                                                                <img class="photo" src="${jsonTeddy.imageUrl}"/>
                                                                                <h2 class="title">${jsonTeddy.name}</h2>
                                                                                <p class="description">${jsonTeddy.description}</p>
                                                                                <p class="price">${jsonTeddy.price}</p>
                                                                            </a>`;
    }
}

getTeddies ();
