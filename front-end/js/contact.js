const TeddiesOrder = 'http://localhost:3000/api/teddies/order';

document.querySelector('.form input[type="button"]').addEventListener("click",function(){
    const valid = true;
    for(let input of document.querySelectorAll(".form input")){
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
    if(valid){
        
    }
    
});