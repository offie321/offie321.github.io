document.getElementById("hamburger").addEventListener("click", () => {
    const navUl = document.getElementById("nav_ul");
    const navLi = navUl.children;
    const body = document.getElementById("body")
    var showMobileNav = navUl.dataset.mobileNavShow;

    if (body.dataset.page == "shop") {
        var showfilterKnop = document.getElementById("showfilterKnop")
    }

    if (showMobileNav != "false") {
        navUl.dataset.mobileNavShow = false
        if (body.dataset.page == "shop") {
            showfilterKnop.style.visibility = "hidden"
        }
        navUl.style.height = "100vh"
        setTimeout(function () {
            for (var i = 2; i < navLi.length; i++) {
                navLi[i].style.visibility = "visible"
                navLi[i].style.marginRight = "0%";
            }
        }, 500);
        // show = "pis";
        // console.log(show);
        console.log(navLi);

        console.log(showMobileNav)
    }
    else if (showMobileNav == "false") {
        navUl.dataset.mobileNavShow = true
        if (body.dataset.page == "shop") {
            showfilterKnop.style.visibility = "visible"
        }
        setTimeout(function () {
            navUl.style.height = "72px"
            navUl.style.flexDirection = "column";
        }, 500);

        for (var i = 2; i < navLi.length; i++) {
            navLi[i].style.visibility = "hidden";
            navLi[i].style.marginRight = "50%";
        }
        // show = "poep";
        // console.log(show);
        console.log(showMobileNav)
    }

    console.log("YOOOOOOOOOOOOOOOOOOOOO HAMBURGEEEEER")
});