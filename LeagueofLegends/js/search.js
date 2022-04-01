//searchbar !!!!! werkt maar search en checkbox werken niet tegelijk
document.getElementById("submitCheck").addEventListener("click", () => {
    var searchbar = document.getElementById('shop_searchbar');

    var search = searchbar.value;

    var card = document.getElementsByClassName("card");

    let filter = search.toUpperCase();
    // console.log(filter);
    for (let i = 0; i < card.length; i++) {
        var header = card[i].children[1];
        var titel = header.children[0];
        titel = titel.innerHTML;

        let titelTextUpper = titel.toUpperCase();
        // console.log(titelTextUpper);
        if (titelTextUpper.indexOf(filter) !== -1) {
            console.log('komt voor');
            card[i].style.display = "block";
            card[i].dataset.komtvoor = true;
        }
        else {
            console.log('komt niet voor');
            card[i].style.display = "none";
            card[i].dataset.komtvoor = false;
        }
    }
}
);