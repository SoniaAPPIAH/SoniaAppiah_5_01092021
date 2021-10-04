
let productLocalStorage = JSON.parse(localStorage.getItem("produit"));

if(productLocalStorage == null){
    document.getElementsByClassName("Teddies-basket")[0].innerHTML = `<p id="Basket-empty"> Votre panier est vide</p>`;
    document.getElementById("total-price").style.display = "none";
} else{
    for (i = 0; i < productLocalStorage.length; i++) {
        document.getElementsByClassName("Teddies-basket")[0].innerHTML += `<div id="template-card_basket">
                                                                                <img class="photo_basket" src="${productLocalStorage[i].image}"/>
                                                                                <div class="bloc-text_basket">
                                                                                    <h2 class="title_basket">${productLocalStorage[i].name}</h2>
                                                                                    <p class="colors-basket">- ${productLocalStorage[i].colors} -</p>
                                                                                </div>
                                                                                <div class="bloc-variable">
                                                                                    <div class="quantity_basket">
                                                                                        <input type="number" name="quantity" min="0" max="99" value="${productLocalStorage[i].quantity}">
                                                                                    </div>
                                                                                    <div class="price_basket">
                                                                                        <p>${productLocalStorage[i].price / 100}€</p>
                                                                                    </div>
                                                                                    <div class="icon-delete_basket">
                                                                                        <button class="delete_item" type="button"> <i class="fas fa-trash-alt"></i> </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>`;
    }
}

// ---- Configuration du prix total pour chaque produit ---- //


// ---- Configuration du prix total du panier ---- //

let totalPriceCalcul = [];

for (let j = 0; j < productLocalStorage.length; j++) {
    let productPriceBasket = productLocalStorage[j].price;

    totalPriceCalcul.push(productPriceBasket);
}

const reducer = (accumulator, priceValue) => accumulator + priceValue;
const totalPrice = totalPriceCalcul.reduce(reducer,0);

const priceHTML = document.getElementById("total-price").innerHTML = `<p>Total : ${totalPrice / 100} €</p>`;


