function loadSearch(){
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "data.xml", true);
xhttp.send();
}

function myFunction(xml) {
      var x,lcase,spc, i, txt, txta, txtb, xmlDoc, term; 
          lcase = document.getElementById("input");
          spc = lcase.value.toLowerCase();
          term = spc.split(' ').join('_');
          xmlDoc = xml.responseXML;
          txt = "";
          x = xmlDoc.getElementsByTagName(term);
          for (i = 0; i < x.length; i++) { 
          txt += "<div class=ocVdi8u id=posts>"+"<div class=ISdcf3h>"+x[i].getElementsByTagName("topic")[0].childNodes[0].nodeValue +"</div>"+"<div class=Nbj6Jkli>" +
          x[i].getElementsByTagName("definition")[0].childNodes[0].nodeValue + "</div>"+"<div class=Ooyh3vIb>" + x[i].getElementsByTagName("hashtags")[0].childNodes[0].nodeValue + "</div>" + "</div>";
          }
          
          txta="";
          x = xmlDoc.getElementsByTagName(term);
          for (i = 0; i < x.length; i++) { 
          txta += "<div class=ocVdi8u>"+"<img src="+  x[i].getElementsByTagName("pics")[0].childNodes[0].nodeValue+ ">"+"</div>";
          }
          txtb="";
          x = xmlDoc.getElementsByTagName(term);
          for (i = 0; i < x.length; i++) { 
          txtb += "<div class=ocVdi8u>"+"<iframe src=" + x[i].getElementsByTagName("video")[0].childNodes[0].nodeValue +" frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>"+"</div>";
          }
          txtc="";
          x = xmlDoc.getElementsByTagName(term);
          for (i = 0; i < x.length; i++) { 
          txtc +=  "<img src="+  x[i].getElementsByTagName("pics")[0].childNodes[0].nodeValue+ ">";
          }

          document.getElementById("notes-container").innerHTML = txt + txta + txtb;
          document.getElementById("notes-container").style.display = "";
          document.getElementById("search-term").innerHTML = txt;

          
          
         


}

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

      
function searchform(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
  
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "searchform-list");
      a.setAttribute("class", "searchform-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
        
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "searchform-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {       
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        
        currentFocus--;
        
        addActive(x);
      } else if (e.keyCode == 13) {
        
        e.preventDefault();
        if (currentFocus > -1) {
          
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    
    if (!x) return false;
    
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
  
    x[currentFocus].classList.add("searchform-active");
  }
  function removeActive(x) {

    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("searchform-active");
    }
  }
  function closeAllLists(elmnt) {
  
    var x = document.getElementsByClassName("searchform-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = ["Psyche", "Lakhimpur Kheri"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
searchform(document.getElementById("input"), countries);



