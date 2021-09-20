// --------------- PARAMETRES DES API --------------- //

let TeddiesAPI = 'http://localhost:3000/api/teddies';
let TeddiesId = 'http://localhost:3000/api/teddies/:_id';
let TeddiesOrder = 'http://localhost:3000/api/teddies/order';

// --------------- CONNEXION AVEC l'API --------------- //

class TeddiesCard{
    constructor(jsonTeddiesCard){
        this.jsonTeddiesCard = jsonTeddiesCard;
    }
}

fetch(TeddiesAPI)
    .then( data => data.json())
    .then( jsonListTeddies => {
        for(let jsonTeddies of jsonListTeddies){
            let card = new TeddiesCard(jsonTeddies);
            document.getElementsByClassName("Teddies-card")[0].innerHTML += ` <div id="template-card" class="col-2 justify-content-center text-center">
                                                                                    <img class="photo" src=${jsonTeddies.imageUrl}/>
                                                                                    <h2 class="title">${jsonTeddies.name}</h2>
                                                                                    <p class="description">${jsonTeddies.description}</p>
                                                                                    <p class="price">${jsonTeddies.price}</p>
                                                                                </div>`
        }
    });
