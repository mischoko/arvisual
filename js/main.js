    //menu functionality
window.onscroll = function() {
    var nav = document.getElementById('nav');
    var color0 = document.getElementsByClassName('menuItem')[0];
    var color1 = document.getElementsByClassName('menuItem')[1];
    var color2 = document.getElementsByClassName('menuItem')[2];
    var color3 = document.getElementsByClassName('menuItem')[3];
    var color4 = document.getElementsByClassName('menuItem')[4];
    var fix = document.getElementById('menu');
    var logo = document.getElementById('logoAR');
    if ( window.pageYOffset > 100 ) {
            nav.classList.add("blackNav");
            color0.classList.add("darkOut");
            color1.classList.add("darkOut");
            color2.classList.add("darkOut");
            color3.classList.add("darkOut");
            color4.classList.add("darkOut");
            fix.classList.add("menuFix");
            logo.classList.add("logoFix");
    }
    else {
            nav.classList.remove("blackNav");
            color0.classList.remove("darkOut");
            color1.classList.remove("darkOut");
            color2.classList.remove("darkOut");
            color3.classList.remove("darkOut");
            color4.classList.remove("darkOut");
            fix.classList.remove("menuFix");
            logo.classList.remove("logoFix");
    }
}
//scrolling function
 document.querySelector('.menuContBtn').addEventListener("click", function(event) {
    event.preventDefault();
    var offset = 0, y = 0, dy, call = setInterval(function(){
    	if( Math.abs(dy=offset-y)>1 ) y += dy;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop;
		y = document.documentElement.scrollTop;
});


function fun() {
  var checkbox = document.getElementById('navClick');
  var bug = document.getElementById('mobileMenu');
  var contact = document.getElementsByClassName('menuItem')[4];
  if (checkbox.checked == true){
    bug.classList.remove('hidden');
    contact.addEventListener("click", function(){
        checkbox.checked = false;
    })
  } else {
  }
}

//popup request demo
document.querySelector('#btnDemoPop').addEventListener("click", function(){
  var popup = document.getElementById('popupMain');
  var exit = document.getElementById('popupExit');
  popup.style.display = "block";
    
  exit.addEventListener("click", function(){
    popup.style.display = "none";
    })
})