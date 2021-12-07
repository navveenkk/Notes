


function validateField() {  
            var restrictedWords = new Array("kill", "rape", "rapist", "fuck", "fucker", "fucking", "sex", "asshole", "fuck You", "dick", "bitch", "suck my dick", "ass hole");  
            var txtInput = document.getElementById("input").value;  
            var error = 0;  
            for (var i = 0; i < restrictedWords.length; i++) {  
                var val = restrictedWords[i];  
                if ((txtInput.toLowerCase()).indexOf(val.toString()) > -1) {  
                    error = error + 1;  
                }  
            }  
  
            if (error > 0) {  
                document.getElementById("input").value ="";
                document.getElementById("b1").style.visibility="hidden";  
            }  
            else {  
              document.getElementById("b1").style.visibility="visible";   
            }  
        } 
    

        window.onscroll = function() {myScr()};
    

function myScr() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    
      document.getElementById("side-container").className = "appr";
      document.getElementById("search-box").appendChild(document.getElementById("logo-name"));
      document.getElementById("search-box").appendChild(document.getElementById("search"));
  }
      else {
    document.getElementById("side-container").className="si-co-hi";
  document.getElementById("navigation-box").appendChild(document.getElementById("logo-name"));
      document.getElementById("navigation-box").appendChild(document.getElementById("search"));
    
  } 
  
   
}
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
      t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover", "hover-2"), i.classList.add("hover", "hover-2")
    }
    function s(t) {
        e.classList.remove("hover", "hover-2"), i.classList.remove("hover", "hover-2")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target, .hover-target-2"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	document.addEventListener('DOMContentLoaded', function () {
	    var hoverLink = document.querySelector('.logo');
	    var bodychange = document.querySelector('body');

	    hoverLink.addEventListener('mouseenter', function (e) {
	        bodychange.classList.add('logo-wrap');
	    });
	    hoverLink.addEventListener('mouseleave', function () {
	        bodychange.classList.remove('logo-wrap');
	    })
	})
	document.addEventListener('DOMContentLoaded', function () {
	    var hoverLink = document.querySelector('.img-1');
	    var bodychange = document.querySelector('body');

	    hoverLink.addEventListener('mouseenter', function (e) {
	        bodychange.classList.add('img-1-wrap');
	    });
	    hoverLink.addEventListener('mouseleave', function () {
	        bodychange.classList.remove('img-1-wrap');
	    })
	})
	document.addEventListener('DOMContentLoaded', function () {
	    var hoverLink = document.querySelector('.img-2');
	    var bodychange = document.querySelector('body');

	    hoverLink.addEventListener('mouseenter', function (e) {
	        bodychange.classList.add('img-2-wrap');
	    });
	    hoverLink.addEventListener('mouseleave', function () {
	        bodychange.classList.remove('img-2-wrap');
	    })
	})
	document.addEventListener('DOMContentLoaded', function () {
	    var hoverLink = document.querySelector('.img-3');
	    var bodychange = document.querySelector('body');

	    hoverLink.addEventListener('mouseenter', function (e) {
	        bodychange.classList.add('img-3-wrap');
	    });
	    hoverLink.addEventListener('mouseleave', function () {
	        bodychange.classList.remove('img-3-wrap');
	    })
	})
	document.addEventListener('DOMContentLoaded', function () {
	    var hoverLink = document.querySelector('.img-4');
	    var bodychange = document.querySelector('body');

	    hoverLink.addEventListener('mouseenter', function (e) {
	        bodychange.classList.add('img-4-wrap');
	    });
	    hoverLink.addEventListener('mouseleave', function () {
	        bodychange.classList.remove('img-4-wrap');
	    })
	})

      function coverRead() {
       var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myReads(this);
    }
};
xhttp.open("GET", "blog.xml", true);
xhttp.send();
}

function myReads(xml) {
      var x, i, txt, xmlDoc; 
          xmlDoc = xml.responseXML;
          txt = "";
          x = xmlDoc.getElementsByTagName("trending");
          for (i = 0; i < x.length; i++) { 
          txt += "<div class=ocVdi8u id=posts>"+"<div class=ISdcf3h>"+x[i].getElementsByTagName("topic")[0].childNodes[0].nodeValue +"</div>"+"<div class=Nbj6Jkli>" +
          x[i].getElementsByTagName("definition")[0].childNodes[0].nodeValue + "</div>" + "</div>";
          }
          document.getElementById("story-box").innerHTML = txt; 
      }


        function SearchTerms(){
          const words = ["psyche", "lakhimpur kheri"];
          var x = document.getElementById("input").value;
words.push(x);
document.getElementById("t").innerHTML = words;
        }
 
