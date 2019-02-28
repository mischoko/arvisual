    //menu functionality
window.onscroll = function() {
    var nav = document.getElementById('nav');
    var fix = document.getElementById('menu');
    var logo = document.getElementById('logoAR');
    if ( window.pageYOffset > 50 ) {
            nav.classList.add("blackNav");
            fix.classList.add("menuFix");
            logo.classList.add("logoFix");
    }
    else {
            nav.classList.remove("blackNav");
            fix.classList.remove("menuFix");
            logo.classList.remove("logoFix");
    }
}

//fix on normal menu visibility
var width = window.innerWidth;
var bug = document.getElementById('mobileMenu');
if(width > 964){
    bug.classList.remove('hidden');
}else{
  bug.classList.add('hidden');
}

//scrolling function
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
//onclick function for hamburge menu
function fun() {
  var i0 = document.getElementsByClassName('ipart')[0];
  var i1 = document.getElementsByClassName('ipart')[1];
  var i2 = document.getElementsByClassName('ipart')[2];
  var checkbox = document.getElementById('navClick');
  var bug = document.getElementById('mobileMenu');
  var contact = document.getElementsByClassName('menuContBtn')[0];
  if (checkbox.checked == true){
    bug.classList.remove('hidden');
    i0.style.background = "#393939";
    i1.style.background = "#393939";
    i2.style.background = "#393939";
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
    i0.style.background = "#393939";
    i1.style.background = "#393939";
    i2.style.background = "#393939";
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
