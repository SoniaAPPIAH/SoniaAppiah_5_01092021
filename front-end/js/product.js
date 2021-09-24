// ------------------------------ PAGE PRODUIT ------------------------------ //
// ---- Récupération des informations de chaque Teddy ---- //
let params = (new URL(document.location)).searchParams;
let TeddyId = params.get("_id");

// ---- Personnalisation de l'adresse de l'API ---- //
const TeddyUrl = `http://localhost:3000/api/teddies/${TeddyId}`;

fetch(TeddyUrl)
    .then(data => data.json())
    .then((infoTeddy) => {
        addCard(infoTeddy);

        function addCard(product) {
            document.getElementsByClassName("Teddies-display")[0].innerHTML += `<a href="product.html?_id=${product._id}" id="template-card" data-id="${product._id}" class="col-2 justify-content-center text-center">
                                                                                    <img class="photo_product" src="${product.imageUrl}"/>
                                                                                    <h2 class="title_product">${product.name}</h2>
                                                                                    <p class="description_product">${product.description}</p>
                                                                                    <p class="price_product">${product.price}</p>
                                                                                </a>`;
    }
});

