function timeout() {
    setTimeout(function(){ alert("Hello"); }, 3000);   
}

var slideIndex = 3;
showDivs(slideIndex);
TimerSwitch();
timeout();

function plusDivs(n) {
    showDivs(slideIndex += n);
    TimerSwitch();
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    //var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    //for (i = 0; i < dots.length; i++) {
      //  dots[i].className = dots[i].className.replace(" w3-white", "");
    //}
    x[slideIndex-1].style.display = "block";  
    //dots[slideIndex-1].className += " w3-white";
}

function TimerSwitch() {
    TimerRunning=true;
    var timer = setTimeout(function() { plusDivs(1) }, 4000);
}
/*
$(document).ready(function() {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
});
