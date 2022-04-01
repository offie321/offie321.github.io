// add to cart
function addToCart(element) {
    var productName = element.dataset.productname;

    var productCard = document.getElementById(productName)

    console.log("Product name: " + productName);
    console.log("Element is: " + element)

    if (element.dataset.gekocht != "true") {
        element.dataset.gekocht = true;
        element.innerHTML = "Remove X"
        productCard.dataset.bought = true;
    } else if (element.dataset.gekocht == "true") {
        element.dataset.gekocht = false;
        productCard.dataset.bought = false;
        element.innerHTML = "Add &#128722;"
    }

    const shoppingCart = [];
    // tellen aantal items die in shoppingcart zitten
    for (i = 0; i < card.length; i++) {
        if (card[i].dataset.bought == "true") {
            shoppingCart.push(card[i]);
        }
    }

    var shoppingCartSize = shoppingCart.length;
    document.getElementById("shoppingCartBtn").innerHTML = "&#128722; Winkelwagen <span class=\"shoppingcartCounter\">" + shoppingCartSize + " </span>"
}
