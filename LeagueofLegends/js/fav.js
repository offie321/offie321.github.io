// favorieten
function addFav(element) {
    var productName = element.dataset.productname;

    var productCard = document.getElementById(productName)

    console.log("Product name: " + productName);
    console.log("Element is: " + element)

    if (element.dataset.geklikt != "true") {
        element.dataset.geklikt = true;
        productCard.dataset.liked = true;
    } else if (element.dataset.geklikt == "true") {
        element.dataset.geklikt = false;
        productCard.dataset.liked = false;
    }
}

// --------------------------------------------------------------------------

// function addFav(element) {
//     var productName = element.getAttribute("data-product-name");

//     console.log("Product number: " + productName);
//     console.log("Element is: " + element)

//     productName.currentColor = "green"

//     element.classList.add("favGeklikt")

//     var productCard = document.getElementById(productName)
//     productCard.classList.add("favJa");
// }