const infos = JSON.parse(localStorage.getItem("order"));

document.getElementsByClassName("order-confirmation")[0].innerHTML = `<p>Bonjour ${infos[0].contact.firstname} </p>
                                                            <p>Votre commande  a bien été validée !</p><br />
                                                            <p>Vous trouverez ci-dessous le récapitulatif :</p>
                                                            <p>N° de commande : ${infos[0].orderId}</p>
                                                            <p>Prix total TTC: $${infos.totalPrice}€</p>
                                                            `;

console.log(infos);