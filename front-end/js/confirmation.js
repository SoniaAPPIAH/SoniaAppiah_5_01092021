const order = JSON.parse(localStorage.getItem("order"));
console.log(order);

document.getElementsByClassName("order-confirmation")[0].innerHTML = `<p>Bonjour </p>
                                                            <p>Votre commande  a bien été validée !</p><br /><br />
                                                            <p>Vous trouverez ci-dessous le récapitulatif :</p>
                                                            <p>N° de commande : </p>
                                                            <p>Prix total TTC:  €</p>
                                                            `;