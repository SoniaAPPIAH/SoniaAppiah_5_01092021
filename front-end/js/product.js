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
            document.getElementsByClassName("Teddies-display")[0].innerHTML += `<div id="template-card_product" data-id="${product._id}">
                                                                                    <img class="photo_product" src="${product.imageUrl}"/>
                                                                                    <div class="bloc_text_product">
                                                                                        <h1 class="title_product">${product.name}</h1>
                                                                                        <p class="description_product">${product.description}</p>
                                                                                        <p class="price_product">${product.price}</p>
                                                                                        <label>
                                                                                            <select name="colors" class="Teddies-colors">
                                                                                            </select>
                                                                                        </label>
                                                                                    </div>
                                                                                </div>`;
        addColors(product);                                                                                               
        }

        function addColors(product) {
            for(let colors of product.colors) {
                document.getElementsByClassName("Teddies-colors")[0].innerHTML += `<option>${colors}</option>`; 
            }
        }
    });

