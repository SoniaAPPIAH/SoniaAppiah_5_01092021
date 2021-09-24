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
        document.getElementsByClassName("Teddies-card")[0].innerHTML += `<a href="product.html" id="template-card" data-id="${jsonTeddy._id}" class="col-2 justify-content-center text-center">
                                                                            <img class="photo" src="${jsonTeddy.imageUrl}"/>
                                                                            <h2 class="title">${jsonTeddy.name}</h2>
                                                                            <p class="description">${jsonTeddy.description}</p>
                                                                            <p class="price">${jsonTeddy.price}</p>
                                                                         </a>`;
    }
    
}

getTeddies ();



// ------------------------------ PAGE PRODUIT ------------------------------ //
// ---- Récupération des informations de chaque Teddy ---- //

// ---- Ajout des produits au panier---- //

function addProduct(teddiesId) {
    let listProducts = getProducts();
    listProducts.push(teddiesId);
    saveProducts(listProducts);
}

function getProducts(){
    let listProducts = localStorage.getItem("listProducts");
    if(listProducts == null) {
        return [];
    }else{
        return JSON.parse(listProducts);
    }
}

function saveProducts(listProducts){
    localStorage.setItem("listProducts",JSON.stringify(listProducts));
}