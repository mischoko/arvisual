    //menu functionality
window.onscroll = function() {
    var nav = document.getElementById('nav');
    var color0 = document.getElementsByClassName('menuItem')[0];
    var color1 = document.getElementsByClassName('menuItem')[1];
    var color2 = document.getElementsByClassName('menuItem')[2];
    var color3 = document.getElementsByClassName('menuItem')[3];
    var fix = document.getElementById('menu');
    if ( window.pageYOffset > 100 ) {
            nav.classList.add("blackNav");
            color0.classList.add("whiteOut");
            color1.classList.add("whiteOut");
            color2.classList.add("whiteOut");
            color3.classList.add("whiteOut");
            fix.classList.add("menuFix");
    }
    else {
            nav.classList.remove("blackNav");
            color0.classList.remove("whiteOut");
            color1.classList.remove("whiteOut");
            color2.classList.remove("whiteOut");
            color3.classList.remove("whiteOut");
            fix.classList.remove("menuFix");
    }
}