document.getElementById("submitCheck").addEventListener("click", () => {
    var favoCheck = document.getElementById("Favo").checked;
    // var figureCheck = document.getElementById("figureCheck").checked;
    // var plushCheck = document.getElementById("plushCheck").checked;
    var card = document.getElementsByClassName("card");

    var noItem = document.getElementById("noItems");


    var aantal = 0;
    // Alle cards op display none zetten
    for (i = 0; i < card.length; i++) {
        card[i].style.display = "none";
        console.log(i);
    }

    // array voor alle cards
    const searchedCards = [];


    // als er een categorie is aangeklikt

    var x = document.getElementById("shopcategories");
    var i = x.selectedIndex;
    var gekozenCategorie = x.options[i].text;
    console.log(gekozenCategorie)


    //   for (i = 0; i < searchedCards.length; i++) {
    //     if (searchedCards[i].dataset.productcategory == "figure") {
    //         searchedCards[i].style.display = "-webkit-box";
    //         console.log("Figures checked")

    //     } else if (searchedCards[i].dataset.productcategory != "figure") {
    //         searchedCards[i].style.display = "none";
    //         console.log("geen figures")

    //     }
    // }


    // if (abcUpChecked == true) {
    //     searchedCards.sort();
    //     console.log(searchedCards)
    // }else if(abcDownChecked == true){
    //     searchedCards.sort();
    //     searchedCards.reverse();
    //     console.log(searchedCards)
    // }



    //Als er niet gezocht is wordt de array gevuld met alle cards. 
    for (i = 0; i < card.length; i++) {
        if (card[i].dataset.komtvoor == "true") {
            searchedCards.push(card[i]);
        }
        // else if (card[i].dataset.komtvoor != "true") {
        //     searchedCards.remove(card[i]);
        //     // delete searchedCards[card[i]];
        //     console.log("REMOOOOOOVE")
        // }
    }

    // alle cards die in de array zitten op display block zetten.
    for (i = 0; i < searchedCards.length; i++) {
        searchedCards[i].style.display = "block";
        console.log("inladen")
        // aantal ++
    }

    if (gekozenCategorie != "All") {
        for (i = 0; i < searchedCards.length; i++) {
            if (searchedCards[i].dataset.productcategory == gekozenCategorie) {
                searchedCards[i].style.display = "block";
                console.log("Figures checked")
            } else if (searchedCards[i].dataset.productcategory != gekozenCategorie) {
                searchedCards[i].style.display = "none";
                console.log("geen figures")
            }
        }
    }


    // // check figure
    // if (figureCheck == true) {
    //     for (i = 0; i < searchedCards.length; i++) {
    //         if (searchedCards[i].dataset.productcategory == "Figures") {
    //             searchedCards[i].style.display = "-webkit-box";
    //             console.log("Figures checked")

    //         } else if (searchedCards[i].dataset.productcategory != "Figures") {
    //             searchedCards[i].style.display = "none";
    //             console.log("geen figures")

    //         }
    //     }
    // }

    // // check plushes
    // if (plushCheck == true) {
    //     for (i = 0; i < searchedCards.length; i++) {
    //         if (searchedCards[i].dataset.productcategory == "Plushes") {
    //             searchedCards[i].style.display = "-webkit-box";
    //             console.log("Plush checked")

    //         } else if (searchedCards[i].dataset.productcategory != "Plushes") {
    //             searchedCards[i].style.display = "none";
    //             console.log("geen plush")

    //         }
    //     }
    // }

    // alleen favo cards laten zien 
    if (favoCheck == true) {
        for (i = 0; i < searchedCards.length; i++) {
            if (searchedCards[i].dataset.liked != "true") {
                searchedCards[i].style.display = "none";
                // aantal --
            } else if (searchedCards[i].dataset.liked == "true") {
                searchedCards[i].style.display = "block";
            }
        }
    }

    // bericht laten zien als er geen items worden laten zien. Dus bij aantal == 0
    for (i = 0; i < card.length; i++) {
        if (card[i].style.display == "block") {
            aantal++
        }
    }

    if (aantal != 0) {
        noItem.dataset.noitem = "false"
    } else {
        noItem.dataset.noitem = "true"
    }
    console.log("aantal is: " + aantal)

    //!!!!!!!!!!!!!! Onderstaande code zorgt ook op groot scherm dat de filter weggaat wanneer er op de zoek knop is gedrukt

    // Onderstaande code is voor het weghalen van het filter scherm wanneer 
    // er op zoek is geklikt maar ook op groot scherm wordt het filter 
    // scherm weggehaald

    let w = window.innerWidth;
    // zoek op filter hide de shopfilters alleen op een scherm van 600px of minder breed.
    if(w <= 600){
        var filterButton = document.getElementById("showfilterKnop")

        var filterContainer = document.getElementsByClassName("shop_filter");
    
        var section_shop_items = document.getElementById("section_shop_items")
        var shopMain = document.getElementById("main");
        filterButton.dataset.showHide = "Hide"
        filterButton.innerHTML = "Show Filters"
        section_shop_items.style.visibility = "visible"
        for (let i = 0; i < filterContainer.length; i++) {
            filterContainer[i].style.display = "none"
        }
        shopMain.style.gridTemplateColumns = "1fr";
        console.log("Filters niet zichtbaar");
    }

}
);






// document.getElementById("submitCheck").addEventListener("click", () => {
//     var favoCheck = document.getElementById("Favo").checked;
//     var countChecked = 0;

//     var favoriet = document.getElementsByClassName("favJa");
//     var card = document.getElementsByClassName("card");


//     var aantal = 0;
//     // If the checkbox is checked, display the output text
//     for (i = 0; i < card.length; i++) {
//         card[i].style.display = "none";
//         console.log(i);
//     }

//     // alleen favo cards laten zien
//     if (favoCheck == true) {
//         for (i = 0; i < favoriet.length; i++) {
//             favoriet[i].style.display = "block";
//             aantal++;
//         }
//         countChecked += 1;
//     }

//     if (
//         // Hier alle filters checken op false
//         favoCheck == false
//     ) {
//         // als alle filters false zijn dan alle cards laten zien
//         for (i = 0; i < card.length; i++) {
//             card[i].style.display = "block";
//             console.log(i);
//         }
//         document.getElementById("main").style.gridTemplateColumns = "repeat(250px, 1fr)";
//     }

//     console.log(countChecked);




// }
// );