// ------------------------------ PAGE PRODUIT ------------------------------ //
// ---- Récupération des informations de chaque Teddy ---- //
let params = (new URL(document.location)).searchParams;
let TeddyId = params.get("_id");

// ---- Personnalisation de l'adresse de l'API ---- //
const TeddyUrl = `http://localhost:3000/api/teddies/${TeddyId}`;

// ---- Affichage les informations du Teddy selectionné via l'Id ---- //
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
                                                                                        <p class="price_product">${product.price / 100}€</p>
                                                                                        <label>Couleurs</label>
                                                                                        <select name="colors" class="Teddies-colors"></select>
                                                                                        <label for="Teddy-quantity">Quantité</label>
                                                                                        <input type="number" id="Teddy-quantity" name="quantity" min="0" max="99">
                                                                                        <button id="btn-add-basket" type="submit">Ajouter au panier</button>
                                                                                    </div>
                                                                                </div>`;
            addColors(product); 
            addBasket();

        // ---- Ajout des Teddies et leur config au panier ---- //
        function addBasket() {
            const btnBasket = document.querySelector("#btn-add-basket");
            
            btnBasket.addEventListener("click", (event) =>{
                event.preventDefault();

                const quantity = document.querySelector("#Teddy-quantity");
                const quantityNumber = quantity.value;

                const colors = document.querySelector(".Teddies-colors");
                const colorsValue = colors.value;
        
                let infoProduct = {
                    TeddyId : product._id,
                    name : product.name,
                    quantity : quantityNumber,
                    colors : colorsValue,
                    price : product.price,
                }

                //---- Configuration du LocalStorage ---- //

                // JSON.parse = converti les données JSON du LocalStorage en objet JS //
                let productLocalStorage = JSON.parse(localStorage.getItem("produit"));
                console.log(productLocalStorage);

                if (productLocalStorage) {
                    productLocalStorage.push(infoProduct);
                    localStorage.setItem("produit", JSON.stringify(productLocalStorage));
                }

                else{
                    productLocalStorage = [];
                    productLocalStorage.push(infoProduct);
                    localStorage.setItem("produit", JSON.stringify(productLocalStorage));
                }
            })
        }
        }

// ---- Personnalisation des couleurs ---- //
        function addColors(product) {
            for(let colors of product.colors) {
                document.getElementsByClassName("Teddies-colors")[0].innerHTML += `<option value="${colors}">${colors}</option>`; 
            }
        }
    });





