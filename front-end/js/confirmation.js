function orderConfirmation() {
    const firstName = document.querySelector(".firstName");
    const orderId = document.querySelector(".orderId");
    const totalConfirmation = document.querySelector(".totalPrice");
    
    firstName.innerText = localStorage.getItem("firstName");
    orderId.innerText = localStorage.getItem("orderId");
    totalConfirmation.innerText = localStorage.getItem("Basket");
 //   totalConfirmation.innerText = totalPrice;
  
    // On vide le localStorage //
    //localStorage.clear(); 
  }

  orderConfirmation();