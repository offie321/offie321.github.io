window.onload = () => {
    var items = document.getElementById("section_shop_items");
    var item = items.children;
    var favKnop = document.getElementsByClassName('fav');
    var cardBuyKnop = document.getElementsByClassName('card_buy');
    var readMoreButton = document.getElementsByClassName('readMoreButton');

    // automatisch aangeven id (artikel + cijfer)
    for (i = 0; i < item.length; i++) {
        artikelName = "artikel" + i;
        item[i].setAttribute("id", artikelName);
    }

    // automatisch aangeven van product name en aangeven id bij bijbehorend article
    for (i = 0; i < favKnop.length; i++) {
        artikelName = "artikel" + i;
        favKnop[i].setAttribute("data-productname", artikelName);
    }

    // automatisch aangeven van product name en aangeven id bij bijbehorend article
    for (i = 0; i < cardBuyKnop.length; i++) {
        artikelName = "artikel" + i;
        cardBuyKnop[i].setAttribute("data-productname", artikelName);
    }

    // automatisch aangeven van product name en aangeven id bij bijbehorend article
    for (i = 0; i < readMoreButton.length; i++) {
        artikelName = "artikel" + i;
        readMoreButton[i].setAttribute("data-opened-item", "false");
    }

};

// --------------------------------------------------------------------------

// window.onload = () => {
//     var items = document.getElementById("section_shop_items");
//     var item = items.children;
//     var favKnop = document.getElementsByClassName('fav');

//     // automatisch aangeven id (artikel + cijfer)
//     for (i = 0; i < item.length; i++) {
//         artikelName = "artikel" + i;
//         item[i].setAttribute("id", artikelName);
//     }

//     // automatisch aangeven van product name en aangeven id bij bijbehorend article
//     for (i = 0; i < favKnop.length; i++) {
//         artikelName = "artikel" + i;
//         favKnop[i].setAttribute("data-product-name", artikelName);
//         console.log(artikelName);
//     }
// };