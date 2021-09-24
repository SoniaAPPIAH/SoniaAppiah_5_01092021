// ------------------------------ PAGE PRODUIT ------------------------------ //
// ---- Récupération des informations de chaque Teddy ---- //

// ---- Ajout des produits au panier---- //

function addProduct(teddiesId) {
    let listProducts = getProducts();
    listProducts.push(teddiesId);
    saveProducts(listProducts);
}

function getProducts(){
    let listProducts = localStorage.getItem("listProducts");
    if(listProducts == null) {
        return [];
    }else{
        return JSON.parse(listProducts);
    }
}

function saveProducts(listProducts){
    localStorage.setItem("listProducts",JSON.stringify(listProducts));
}