// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("navId").style.backgroundColor = "rgba(10, 10, 10, 0.9)";
    document.getElementById("navId").style.transition = "0.25s";

    document.getElementById("navLogo").style.filter = "opacity(1)";
    document.getElementById("navLogo").style.transition = "0.5s";
    document.getElementById("navLogo").style.transitionDelay = "0.35s";
  } else {
    if(document.documentElement.clientWidth < 1365){
      document.getElementById("navId").style.backgroundColor = "rgba(10, 10, 10, 0.6)";
    }else{
      document.getElementById("navId").style.backgroundColor = "rgba(10, 10, 10, 0)";
    }

    document.getElementById("navId").style.transition = "0.25s";

    document.getElementById("navLogo").style.filter = "opacity(0)";
    document.getElementById("navLogo").style.transition = "0.5ss";
    document.getElementById("navLogo").style.transitionDelay = "0.15s";
  }
}

// Animate to direction when scrolling TEST

//This works Finally

$(window).on('scroll',function(){
		var trainPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
    $('.train').css('transform','translateX('+(trainPosition-50)+'%)');

//Self try 1
    var fragment1Pos = Math.round($(window).scrollTop() / $(window).height() * 100);
    $('.Fragment1').css({
      "transform": 'translate('+(fragment1Pos+1)+'px,'+(fragment1Pos-1)+'px) rotate('+(-fragment1Pos+360)+'deg)',

  });

  //Self try 2
      var fragment2Pos = Math.round($(window).scrollTop() / $(window).height() * 100);
      $('.Fragment2').css({
        "transform": 'translate('+(-fragment2Pos)+'px,'+(fragment2Pos+1)+'px) rotate('+(fragment2Pos)+'deg)',

    });

});