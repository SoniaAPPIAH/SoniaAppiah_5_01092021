const TeddiesOrder = 'http://localhost:3000/api/teddies/order';

// ---- Affiche les données stockées dans le LocalStorage ---- //
let productLocalStorage = JSON.parse(localStorage.getItem("produit"));

// ----Affiche les informations du panier ou un message indiquant que le panier est vide ---- //
function displayBasket() {
    if(productLocalStorage == null){
        document.getElementsByClassName("Teddies-basket")[0].innerHTML = `<p id="Basket-empty"> Votre panier est vide</p>`;
        document.getElementById("total-price").style.display = "none";
        document.getElementById("order-form").style.display = "none";
    } else{
        for (i = 0; i < productLocalStorage.length; i++) {
            document.getElementsByClassName("Teddies-basket")[0].innerHTML += `<div id="template-card_basket" data-id="${productLocalStorage[i]._id}">
                                                                                    <img class="photo_basket" src="${productLocalStorage[i].image}"/>
                                                                                    <div class="bloc-text_basket">
                                                                                        <h2 class="title_basket">${productLocalStorage[i].name}</h2>
                                                                                        <p class="colors-basket">- ${productLocalStorage[i].colors} -</p>
                                                                                    </div>
                                                                                    <div class="bloc-variable">                                                                                   
                                                                                        <p class="quantity_basket">${productLocalStorage[i].quantity}</p>                                                                                   
                                                                                        <p class="price_basket">${productLocalStorage[i].price / 100}€</p>
                                                                                    </div>
                                                                                </div>`;
        }
    }
    totalBasketCalcul(productLocalStorage);
}

// ---- Calcul du prix total du panier ---- //
function totalBasketCalcul(productLocalStorage) {
    let totalPriceCalcul = [];
    for (productPriceBasket of productLocalStorage) {
        totalPriceCalcul.push(productPriceBasket.price);
    }
    
    const reducer = (accumulator, priceValue) => accumulator + priceValue;
    const totalPrice = totalPriceCalcul.reduce(reducer,0);

    document.getElementById("total-price").innerHTML = `<p>Total : <span class="totalbasket">${totalPrice / 100}</span> €</p>`;
    localStorage.setItem("totalBasket", JSON.stringify(totalPrice));
}

const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;

// ---- Envoi des informations de la commande au server ---- //
function sendOrder () {
    document.querySelector(".button-order").addEventListener("click", function() {
            let contact = {
                lastName: document.querySelector(".lastName").value,
                firstName: document.querySelector(".firstName").value,
                email: document.querySelector(".email").value,
                address: document.querySelector(".address").value,
                city: document.querySelector(".city").value, 
                basket: document.querySelector(".totalbasket").value, 
            };

            if ((regexName.test(contact.lastName) == true) &
                (regexName.test(contact.firstName) == true) &
                (regexMail.test(contact.email) == true) &
                (regexAddress.test(contact.address) == true) &
                (regexCity.test(contact.city) == true)
            ) {

            let products = [];
            for (listId of productLocalStorage) {
                products.push(listId.TeddyId);
            }

            const toSend = {
                products,
                contact,
            };
        
            fetch(TeddiesOrder, {
                method: "POST",
                body: JSON.stringify(toSend),
                headers: {
                    "Content-Type" : "application/json",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("firstName", data.contact.firstName);
                localStorage.setItem("orderId", data.orderId);
                localStorage.setItem("Basket", data.contact.basket);
                document.location.href = "confirmation.html";
            })
        } else {
            alert("Merci de bien vouloir remplir tous les champs correctement.");
        }
    });
}

displayBasket();
sendOrder();