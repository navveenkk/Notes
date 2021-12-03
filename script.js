function validateField() {
  var x = document.getElementById("myInput").value;
  if (x == "") {
    document.getElementById("b1").style.visibility="hidden";
  } else {
    document.getElementById("b1").style.visibility="visible";
  }

    
}


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
          var x,lcase,spc, i, txt, xmlDoc, term; 
          lcase = document.getElementById("input");
          spc = lcase.value.toLowerCase();
          term = spc.split(' ').join('_');
          xmlDoc = xml.responseXML;
          txt = "search results for" + lcase;
          x = xmlDoc.getElementsByTagName(term);
          for (i = 0; i < x.length; i++) { 
          txt += "<div class=post ocVdi8u>"+"<div class=topic ISdcf3h>"+x[i].getElementsByTagName("topic")[0].childNodes[0].nodeValue +"</div>"+"<div class=def Nbj6Jkli>" +
          x[i].getElementsByTagName("definition")[0].childNodes[0].nodeValue + "</div>" + "<div class=tags Ooyh3vIb>" + x[i].getElementsByTagName("hashtags")[0].childNodes[0].nodeValue + "</div>" + "</div>";
          }
          document.getElementById("notes").innerHTML = txt;
      
  }
      
      
  