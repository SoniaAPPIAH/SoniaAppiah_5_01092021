const TeddiesOrder = 'http://localhost:3000/api/teddies/order';
let productLocalStorage = JSON.parse(localStorage.getItem("produit"));

function displayBasket() {
    if(productLocalStorage == null){
        document.getElementsByClassName("Teddies-basket")[0].innerHTML = `<p id="Basket-empty"> Votre panier est vide</p>`;
        document.getElementById("total-price").style.display = "none";
        document.getElementById("order-form").style.display = "none";
    } else{
        for (i = 0; i < productLocalStorage.length; i++) {
            document.getElementsByClassName("Teddies-basket")[0].innerHTML += `<div id="template-card_basket">
                                                                                    <img class="photo_basket" src="${productLocalStorage[i].image}"/>
                                                                                    <div class="bloc-text_basket">
                                                                                        <h2 class="title_basket">${productLocalStorage[i].name}</h2>
                                                                                        <p class="colors-basket">- ${productLocalStorage[i].colors} -</p>
                                                                                    </div>
                                                                                    <div class="bloc-variable">                                                                                   
                                                                                        <p class="quantity_basket">${productLocalStorage[i].quantity}</p>                                                                                   
                                                                                        <p class="price_basket">${productLocalStorage[i].price / 100}€</p>
                                                                                        <div class="icon-delete_basket">
                                                                                            <button class="delete_item" type="button"> <i class="fas fa-trash-alt"></i> </button>
                                                                                        </div>
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

    document.getElementById("total-price").innerHTML = `<p>Total : ${totalPrice / 100} €</p>`;
}

displayBasket();

document.querySelector(".button-order").addEventListener("click", function() {
    const valid = true;
    for(let input of document.querySelectorAll(".form input")){
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
    if(valid){
        let orderData = {
            contact: {
                lastName: document.querySelector("#lastName").value,
                firstName: document.querySelector("#firstName").value,
                email: document.querySelector("#email").value,
                address: document.querySelector("#address").value,
                city: document.querySelector("#city").value,     
            }   
        }
    
        let products = [];
        for (listIDTeddy of productLocalStorage) {
            products.push(listIDTeddy);
        }    

        fetch(TeddiesOrder, {
            method: "POST",
            body: JSON.stringify({orderData, products}),
            headers: {
                "Content-Type" : "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("order", JSON.stringify(data));
                window.location.href = "confirmation.html";
            })
    } else {
        alert("Veuillez renseigner les champs correctement");
    }
    
});