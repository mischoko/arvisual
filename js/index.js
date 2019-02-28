    //menu functionality
window.onscroll = function() {
    var nav = document.getElementById('nav');
    var color0 = document.getElementsByClassName('menuItem')[0];
    var color1 = document.getElementsByClassName('menuItem')[1];
    var color2 = document.getElementsByClassName('menuItem')[2];
    var color3 = document.getElementsByClassName('menuItem')[3];
    var color4 = document.getElementsByClassName('menuItem')[4];
    var color5 = document.getElementsByClassName('menuItem')[5];
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
    if ( window.pageYOffset > 100 ) {
            nav.classList.add("blackNav");
            color0.classList.add("darkOut");
            color1.classList.add("darkOut");
            color2.classList.add("darkOut");
            color3.classList.add("darkOut");
            color4.classList.add("darkOut");
            color5.classList.add("darkOut");
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
    }
    else {
            nav.classList.remove("blackNav");
            color0.classList.remove("darkOut");
            color1.classList.remove("darkOut");
            color2.classList.remove("darkOut");
            color3.classList.remove("darkOut");
            color4.classList.remove("darkOut");
            color5.classList.remove("darkOut");
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
    }
}
//contBtn scroll fucntion onclick
 document.querySelector('.menuContBtn').addEventListener("click", function(event) {
    event.preventDefault();
    var offset = 0, y = 0, dy, call = setInterval(function(){
    	if( Math.abs(dy=offset-y)>1 ) y += dy;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y - 70;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop;
		y = document.documentElement.scrollTop;
});
//ctaBtn scroll function onclick
document.getElementById('ctaBtn').addEventListener('click', function(){
  event.preventDefault();
    var offset = 0, y = 0, dy, call = setInterval(function(){
    	if( Math.abs(dy=offset-y)>1 ) y += dy;
      else { clearInterval(call); y = offset; }
      document.documentElement.scrollTop = y - 70;
    },10);
    offset = document.getElementById(event.srcElement.dataset.scroll).offsetTop;
		y = document.documentElement.scrollTop;
});
//onclick function for hamburger menu
function fun() {
  var i0 = document.getElementsByClassName('ipart')[0];
  var i1 = document.getElementsByClassName('ipart')[1];
  var i2 = document.getElementsByClassName('ipart')[2];
  var checkbox = document.getElementById('navClick');
  var bug = document.getElementById('mobileMenu');
  var contact = document.getElementsByClassName('menuContBtn')[0];
  if (checkbox.checked == true){
    bug.classList.remove('hidden');
    i0.style.background = "black";
    i1.style.background = "black";
    i2.style.background = "black";
    contact.addEventListener("click", function(){
        checkbox.checked = false;
    })
  } else if (checkbox.checked == false){
    bug.classList.add('hidden');
    i0.style.background = "#393939";
    i1.style.background = "#393939";
    i2.style.background = "#393939";
  }
};
document.onclick = function(){
var whitebar = document.getElementById('nav');
    var i0 = document.getElementsByClassName('ipart')[0];
    var i1 = document.getElementsByClassName('ipart')[1];
    var i2 = document.getElementsByClassName('ipart')[2];
if (whitebar.classList.contains('blackNav')){
    i0.style.background = "black";
        i1.style.background = "black";
        i2.style.background = "black";
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
});
//popup request from footer anchor
document.getElementById('footDemo').addEventListener("click", function(){
  var popup = document.getElementById('popupMain');
  var exit = document.getElementById('popupExit');
  popup.style.display = "block";
  exit.addEventListener("click", function(){
    popup.style.display = "none";
    })
});
//close popup by allright btn after success msg
document.getElementById('okBtn').addEventListener("click", function(){
  var popup = document.getElementById('popupMain');
      popup.style.display = "none";
});
//okBtn2 / first mail form closer
document.getElementById('okBtn2').addEventListener("click", function(){
  var message = document.getElementsByClassName('successAlert2')[0];
  var form = document.getElementsByClassName('contact_form2')[0];
    message.style.display = "none";
    form.style.display = "flex";
});
//fix on normal menu visibility
var width = window.innerWidth;
var bug = document.getElementById('mobileMenu');
if(width > 964){
    bug.classList.remove('hidden');
}
//mailer script
!function(){
    var contactForm = document.querySelector('.contact_form');
    var subjectElement = document.querySelector('.input-subject');
    var emailElement = document.querySelector('.input-email');
    var messageElement = document.querySelector('.input-message');
    var calendarElement = document.querySelector('.calendar');
    var successAlertElement = document.querySelector('.successAlert');
    var contactFormElement = document.querySelector('.contact_form');

    function onComplete () {
        calendarElement.style.display = 'none';
        successAlertElement.style.display = 'block';
        contactFormElement.reset();
    }

  	function onSubmit(event) {
        event.preventDefault();
        var email = messageElement.value;
        var message = emailElement.value;

        if (email && message) {

            var request = new XMLHttpRequest();
            var url = "https://www.arvisual.eu/neue/mailer.php"

            request.open('POST', url);

            var subject = subjectElement.value;
            var data = new FormData();
            data.append("subj", subject);
            data.append("message", message); 
            data.append("email", email);
            request.send(data);

            request.onreadystatechange = function () {
                if(request.readyState === 4) {
                    onComplete();
                }
            };
        }
        return false;
    };
    contactForm.onsubmit = onSubmit;
}();

//mailer script yer own solution
!function(){
  var contactForm = document.querySelector('.contact_form2');
  //var subjectElement = document.querySelector('.input-subject');
  var emailElement = document.querySelector('.input-email2');
  var messageElement = document.querySelector('.input-message2');
  var calendarElement = document.querySelector('.calendar2');
  var successAlertElement = document.querySelector('.successAlert2');
  var contactFormElement = document.querySelector('.contact_form2');

  function onComplete () {
      calendarElement.style.display = 'none';
      successAlertElement.style.display = 'block';
      contactFormElement.reset();
  }

  function onSubmit(event) {
      event.preventDefault();
      var email = messageElement.value;
      var message = emailElement.value;

      if (email && message) {

          var request = new XMLHttpRequest();
          var url = "https://www.arvisual.eu/neue/mailer2.php"

          request.open('POST', url);

          //var subject = subjectElement.value;
          var data = new FormData();
          //data.append("subj", subject);
          data.append("message", message); 
          data.append("email", email);
          request.send(data);

          request.onreadystatechange = function () {
              if(request.readyState === 4) {
                  onComplete();
              }
          };
      }
      return false;
  };
  contactForm.onsubmit = onSubmit;
}();

//exit btn position calc
document.onclick = function(){
var element = document.getElementsByClassName('popupBody')[0];
var widthElement = element.offsetWidth;
var widthTotal = window.innerWidth;
var subTotal = widthTotal - widthElement;
var total = subTotal / 2 - 10;
var exitbtn = document.getElementById('popupExit');
exitbtn.style.right = total + "px";
}
//reveal tagline
window.onload = function(){
  var elem = document.getElementById('tagline');
  setTimeout(() => {
        elem.style.opacity = "1";
  }, 200);
}