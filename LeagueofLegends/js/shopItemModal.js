// Get the modal
var shopItemModal = document.getElementById("shopItemModal");

var shopItemModalContent = document.getElementById("shopItemModalContent")

// var card = document.getElementsByClassName("card");
var card = document.getElementsByClassName("card");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("shopItemModalClose")[0];

var clickedElement

readMoreButtons = document.getElementsByClassName("readMoreButton")

function openShopItem(element) {
    clickedElement = element
    clickedElement.dataset.openedItem = "true"
    opened = clickedElement.dataset.openedItem

    for (let i = 0; i < readMoreButtons.length; i++) {
        if (readMoreButtons[i].dataset.openedItem == "true") {
            card[i]

            var figure = card[i].children[0];
            var img = figure.getElementsByTagName("img")
            // child 2 is prijs van product
            var price = figure.children[1].innerHTML
            var imgInside = img[0]
            price = parseInt(price)

            var src = imgInside.src
            var alt = imgInside.alt
            // var alt = img.getAttribute('alt')
            var header = card[i].children[1];
            // eerste child element is de titel
            var titel = header.children[0];
            titel = titel.innerHTML;

            var section = card[i].children[2];
            var p = section.children[0];
            var cardText = p.innerHTML;


            shopItemModalContent.innerHTML =
                "<article class=\"shopItemModalContentArticle\">" +
                "<span onclick=\"shopItemModalClose()\" class=\"shopItemModalClose\">&times;</span>" +
                "<section class=\"shopItemModalContainer\">" +
                "<article class=\"shopItemWrapper\">" +
                "<figure>" +
                "<img class=\"shopItemModalImg\" src=" + src + " " + alt + ">" +
                "</figure>" +
                "</article>" +
                "<article class=\"shopItemWrapper\">" +
                "<h2 class=\"shopItemModalTitel\">" + titel + "</h2>" +
                "<p class=\"shopItemModalPrice\">Price: &euro;" + price + "</p>" +
                "<br>" +
                "<h2><u>Description</u></h2>" +
                "<p class=\"shopItemModalCardText\">" + cardText + "</p>" +
                "</article>" +
                "</section>" +
                "</article>"
        }

    }

    shopItemModal.style.display = "block";
}

function shopItemModalClose() {
    shopItemModal.style.display = "none";
    opened = clickedElement.dataset.openedItem = "false"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    shopItemModal.style.display = "none";
    opened = clickedElement.dataset.openedItem = "false"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == shopItemModal) {
        shopItemModal.style.display = "none";
    }
}


