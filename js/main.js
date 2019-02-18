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
    var i0 = document.getElementsByClassName('ipart')[0];
    var i1 = document.getElementsByClassName('ipart')[1];
    var i2 = document.getElementsByClassName('ipart')[2];
    var logoColor0 = document.getElementsByClassName('changeToBlack')[0];
    var logoColor1 = document.getElementsByClassName('changeToBlack')[1];
    var logoColor2 = document.getElementsByClassName('changeToBlack')[2];
    var logoColor3 = document.getElementsByClassName('changeToBlack')[3];
    var logoColor4 = document.getElementsByClassName('changeToBlack')[4];
    var logoColor5 = document.getElementsByClassName('changeToBlack')[5];
    var logoColor6 = document.getElementsByClassName('changeToBlack')[6];
    var logoColor7 = document.getElementsByClassName('changeToBlack')[7];
    var logoColor8 = document.getElementsByClassName('changeToBlack')[7];
    if ( window.pageYOffset > 100 ) {
            nav.classList.add("blackNav");
            color0.classList.add("darkOut");
            color1.classList.add("darkOut");
            color2.classList.add("darkOut");
            color3.classList.add("darkOut");
            color4.classList.add("darkOut");
            fix.classList.add("menuFix");
            logo.classList.add("logoFix");
            i0.style.background = "black";
            i1.style.background = "black";
            i2.style.background = "black";
            logoColor0.style.fill = "black";
            logoColor1.style.fill = "black";
            logoColor2.style.fill = "black";
            logoColor3.style.fill = "black";
            logoColor4.style.fill = "black";
            logoColor5.style.fill = "black";
            logoColor6.style.fill = "black";
            logoColor7.style.fill = "black";
            logoColor8.style.fill = "black";
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
            i0.style.background = "white";
            i1.style.background = "white";
            i2.style.background = "white";
            logoColor0.style.fill = "white";
            logoColor1.style.fill = "white";
            logoColor2.style.fill = "white";
            logoColor3.style.fill = "white";
            logoColor4.style.fill = "white";
            logoColor5.style.fill = "white";
            logoColor6.style.fill = "white";
            logoColor7.style.fill = "white";
            logoColor8.style.fill = "white";
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
  var i0 = document.getElementsByClassName('ipart')[0];
  var i1 = document.getElementsByClassName('ipart')[1];
  var i2 = document.getElementsByClassName('ipart')[2];
  var checkbox = document.getElementById('navClick');
  var bug = document.getElementById('mobileMenu');
  var contact = document.getElementsByClassName('menuItem')[4];
  var width = window.innerWidth;
  if (checkbox.checked == true){
    bug.classList.remove('hidden');
    contact.addEventListener("click", function(){
        i0.style.background = "black";
        i1.style.background = "black";
        i2.style.background = "black";
        checkbox.checked = false;
    })
  } else if (width > 864){
  }
};

//popup request demo
document.querySelector('#btnDemoPop').addEventListener("click", function(){
  var popup = document.getElementById('popupMain');
  var exit = document.getElementById('popupExit');
  popup.style.display = "block";
    
  exit.addEventListener("click", function(){
    popup.style.display = "none";
    })
});

//fix on normal menu visibility
var width = window.innerWidth;
var bug = document.getElementById('mobileMenu');
if(width > 864){
    bug.classList.remove('hidden');
}
