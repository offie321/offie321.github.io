show = "true";
document.getElementById("showfilterKnop").addEventListener("click", () => {
    var filterContainer = document.getElementsByClassName("shop_filter");
    var shopMain = document.getElementById("main");
    var section_shop_items = document.getElementById("section_shop_items")

    var filterButton  = document.getElementById("showfilterKnop")

    if (filterButton.dataset.showHide != "Show") {
        for (let index = 0; index < filterContainer.length; index++) {
            section_shop_items.style.visibility = "hidden"
            filterContainer[index].style.display = "block"
            filterButton.dataset.showHide = "Show"
            // filterContainer[index].style.marginLeft = "0px"
            // filterContainer[index].style.transition = "2s"

            show = "false";
            console.log("Filters Zichtbaar");
            filterButton.innerHTML = "Hide Filters"
            
        }
        shopMain.style.gridTemplateColumns = "1fr";


    }
    else if (filterButton.dataset.showHide = "Show") {
        for (let index = 0; index < filterContainer.length; index++) {
            section_shop_items.style.visibility = "visible"
            filterContainer[index].style.display = "none"
            filterButton.dataset.showHide = "Hide"
            // filterContainer[index].style.marginLeft = "-250px"
            // filterContainer[index].style.transition = "2s"

            console.log("Filters niet zichtbaar");

            filterButton.innerHTML = "Show Filters"
            
        }

        shopMain.style.gridTemplateColumns = "1fr";
    }
});