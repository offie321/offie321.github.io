function scrollDown() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    var heightPercentage = (h / 100) * 45;

    // if screen size smaller than 800px
    if (w <= 800) {
        window.scrollBy(0, (h - 50));
    } else {
        window.scrollBy(0, (h - heightPercentage));
    }
}

window.addEventListener("scroll", function () {
    var distance = window.pageYOffset;
    var headerImg = this.document.getElementById("headerImg");
    var logo_lol = this.document.getElementById("header_logo_lol");
    var header_button_lol = this.document.getElementById("header_button");
    var yt_video_lol = this.document.getElementById("yt_video");
    var overlay = this.document.getElementById("overlay");

    var scaling = (0.5 * distance)
    var x = 1920 + (scaling);

    var top_logo = 50 - (scaling * 0.15);
    var header_button = 70 - (scaling * 0.09);
    var yt_video = -50 - (scaling * 0.9);
    var yt_video_width = 1000 + (scaling * 2);

    headerImg.style.backgroundSize = x + "px";
    logo_lol.style.top = top_logo + "%";
    header_button_lol.style.top = header_button + "%";
    yt_video_lol.style.marginTop = yt_video + "px";
    yt_video_lol.style.width = yt_video_width + "px";
    
    let h = window.innerHeight;

    var heightPercentage = (h / 100) * 45;
    var brightness = 1 - ((distance - heightPercentage - 150) / 500);

    // bij 918 - heightPercentage change brightness of video
    if((distance > 600)){
        yt_video_lol.style.filter = "brightness(" + brightness + ")"
    }else{
        yt_video_lol.style.filter = "brightness(" + 1 + ")"
    }

    var headerBrightness = 0.600 + (distance / 2500);
    overlay.style.opacity = headerBrightness;
    
});
