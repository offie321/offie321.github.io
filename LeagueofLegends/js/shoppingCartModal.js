
// Get the modal
var modal = document.getElementById("shoppingCartModal");

// Get the button that opens the modal
var shoppingCartBtn = document.getElementById("shoppingCartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var card = document.getElementsByClassName("card");

// // array voor alle cards
// const shoppingCart = [];

var modalRightContainer = document.getElementById('modalRightContainer')
// When the user clicks the button, open the modal 
shoppingCartBtn.onclick = function () {
    // array voor alle cards
    const shoppingCart = [];
    var cartItem = document.getElementsByClassName('shoppingcartItemName')
    var modalGridItemsContainer = document.getElementById('modalGridItemsContainer')
    modalGridItemsContainer.innerHTML = ""

    var totalePrijs = 0
    // modalRightContainer.innerHTML = ""

    modal.style.display = "block";
    console.log("geklikt")

    // add to shoppingcart array 
    for (i = 0; i < card.length; i++) {
        if (card[i].dataset.bought == "true") {
            shoppingCart.push(card[i]);
        }
    }
    if(shoppingCart.length >= 1){

    // laten zien items in shoppingcard laat nu alleen de laatste zien
    for (let i = 0; i < shoppingCart.length; i++) {
        var figure = shoppingCart[i].children[0];
        var img = figure.getElementsByTagName("img")
        // child 2 is prijs van product
        var price = figure.children[1].innerHTML
        var imgInside = img[0]
        price = parseInt(price)

        var src = imgInside.src
        var alt = imgInside.alt
        // var alt = img.getAttribute('alt')
        var header = shoppingCart[i].children[1];
        // eerste child element is de titel
        var titel = header.children[0];
        titel = titel.innerHTML;
        console.log(titel)
        console.log(img)
        var productName = shoppingCart[i].id

        console.log(productName)

        console.log(shoppingCart)
        
        // Items in de shoppingcart modal
        modalGridItemsContainer.innerHTML +=
            "<article class=\"modalArticle\">" +
            "<p class=\"shoppingcartItemName\">" + titel + "</p>" +
            "<figure>" +
            "<img src=" + src + " " + alt + ">" +
            "</figure>" +
            "<p>Aantal: <input class=\"formNumberInputReversed\" type=\"number\" value=\"1\" size=\"1\"></p>" +
            "<p>Prijs: <span class=\"price\">" + price + "</span></p>"
        "<button onclick=\"addToCart(this)\" class=\"formButtonReversed\" data-productname=\"" + productName + "\">Remove</button>" +
            "</article>"

        var aantalItems = shoppingCart.length

        totalePrijs += price


    }
}
else if(shoppingCart.length == 0){
    modalGridItemsContainer.innerHTML =
    "<p style=\"text-align:center; padding-top:25px; line-height:100%;\">shoppingcart is empty</p>"
}
    // Rechter kolom in de shoppingcart modal
    modalRightContainer.innerHTML =
        "<article id=\"paymentSteps\" class=\"paymentStepsContainer\">" +
        "<p><b>Cart</b></p>" +
        "<p class=\"dots\">Delivery</p>" +
        "<p>Payment</p>" +
        "</article>" +
        "<h2>Purchase Info</h2>" +
        "<p>Totaal aantal items: " + aantalItems + "</p>" +
        "<br>" +
        "<p>Totale prijs: <span class=\"price\">" + totalePrijs + "</span></p>" +
        "<button onclick=\"goToDelivery()\" style=\"position: absolute; bottom: 0px; width: 90%;\" class=\"formButtonReversed\">Choose delivery</button>"

    console.log(shoppingCart)
}

// Delivery Options
function goToDelivery() {
    modalRightContainer.innerHTML =
        "<article id=\"paymentSteps\" class=\"paymentStepsContainer\">" +
        "<p>Cart</p>" +
        "<p class=\"dots\"><b>Delivery</b></p>" +
        "<p>Payment</p>" +
        "</article>" +
        "<h2>Choose Delivery</h2>" +
        "<section class=\"deliveryOptions\">"+

        "<article>"+
        "<img src=\"./img/dhl_logo.jpg\" alt=\"dhl logo\">"+
        "<label>"+
        "<input type=\"checkbox\">"+
        "</label>"+    
        "</article>"+

        "<article>"+
        "<img src=\"./img/ups_logo.jpg\" alt=\"ups logo\">"+
        "<label>"+
        "<input type=\"checkbox\">"+
        "</label>"+    
        "</article>"+

        "<article>"+
        "<img src=\"./img/postnl_logo.jpg\" alt=\"postnl logo\">"+
        "<label>"+
        "<input type=\"checkbox\">"+
        "</label>"+    
        "</article>"+

        "</section>"+
        "<button onclick=\"goToPayment()\" style=\"position: absolute; bottom: 0px; width: 90%;\" class=\"formButtonReversed\">Choose payment</button>"
}

// Payment Options
function goToPayment() {
    modalRightContainer.innerHTML =
        "<article id=\"paymentSteps\" class=\"paymentStepsContainer\">" +
        "<p>Cart</p>" +
        "<p class=\"dots\">Delivery</p>" +
        "<p><b>Payment<b></p>" +
        "</article>" +
        "<h2>Choose Payment</h2>" +
        "<section class=\"deliveryOptions\">"+

        "<article>"+
        "<img src=\"./img/ideal_logo.png\" alt=\"ideal logo\">"+
        "<label>"+
        "<input type=\"checkbox\">"+
        "</label>"+    
        "</article>"+

        "<article>"+
        "<img src=\"./img/paypal.webp\" alt=\"paypal logo\">"+
        "<label>"+
        "<input type=\"checkbox\">"+
        "</label>"+    
        "</article>"+

        "<article>"+
        "<img src=\"./img/mastercard_logo.jpg\" alt=\"mastercard logo\">"+
        "<label>"+
        "<input type=\"checkbox\">"+
        "</label>"+    
        "</article>"+

        "</section>"+
        "<button onclick=\"finishShoppingCart()\" style=\"position: absolute; bottom: 0px; width: 90%;\" class=\"formButtonReversed\">Finish</button>"
}

function finishShoppingCart() {
    modal.style.display = "none";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}