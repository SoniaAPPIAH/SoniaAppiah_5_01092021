function Basket() {
    let productLocalStorage = JSON.parse(localStorage.getItem("produit"));
    console.log(productLocalStorage);

    if(productLocalStorage == null){
        document.getElementsByClassName("Teddies-basket")[0].innerHTML = `<p id="Basket-empty"> Votre panier est vide</p>`;
    } else{
        for (i = 0; i < productLocalStorage.length; i++) {
            document.getElementsByClassName("Teddies-basket")[0].innerHTML += `<div id="template-card_basket">
                                                                                    <img class="photo_basket" src="${productLocalStorage[i].image}"/>
                                                                                    <div class="bloc_text_basket">
                                                                                        <h2 class="title_basket">${productLocalStorage[i].name}</h1>
                                                                                        <p class="description_basket">${productLocalStorage[i].description}</p>
                                                                                        <p class="colors-basket">${productLocalStorage[i].colors}</p>
                                                                                    </div>
                                                                                    <div class="quantity_basket">
                                                                                        <input type="number" name="quantity" min="0" max="99" value="${productLocalStorage[i].quantity}"">
                                                                                    </div>
                                                                                    <div class="price_basket">
                                                                                        <p>${productLocalStorage[i].price / 100}€</p>
                                                                                    </div>
                                                                                </div>`;
        }
    }
}

Basket() ;