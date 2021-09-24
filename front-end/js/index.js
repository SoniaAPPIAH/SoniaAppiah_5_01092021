// ---- Paramètres de l'API ---- //

const TeddiesAPI = 'http://localhost:3000/api/teddies';
const TeddiesId = 'http://localhost:3000/api/teddies/:_id';
const TeddiesOrder = 'http://localhost:3000/api/teddies/order';

// ------------------------------ PAGE INDEX ------------------------------ //
// ---- Connexion avec l'API ---- //
 
async function getTeddies () {
    fetch(TeddiesAPI)
    .then( data => data.json())
    .then( jsonListTeddies => {
        createCards (jsonListTeddies);
    });
}

// ---- Création des cartes Teddy ---- //

function createCards (jsonTeddies) {
    for(let jsonTeddy of jsonTeddies){
        document.getElementsByClassName("Teddies-card")[0].innerHTML += `<a href="product.html?_id=${jsonTeddy._id}" id="template-card" data-id="${jsonTeddy._id}" class="col-2 justify-content-center text-center">
                                                                            <img class="photo_index" src="${jsonTeddy.imageUrl}"/>
                                                                            <h2 class="title_index">${jsonTeddy.name}</h2>
                                                                            <p class="description_index">${jsonTeddy.description}</p>
                                                                            <p class="price_index">${jsonTeddy.price}</p>
                                                                         </a>`;
    }
    
}

getTeddies ();