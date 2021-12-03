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
      xhttp.open("POST", "data.xml", true);
      xhttp.send();
  }
      
  function myFunction(xml) {
          var x,lcase,spc, i, txt, xmlDoc, term; 
          lcase = document.getElementById("myInput");
          spc = lcase.value.toLowerCase();
          term = spc.split(' ').join('_');
          xmlDoc = xml.responseXML;
          txt = "search results for" + lcase;
          x = xmlDoc.getElementsByTagName(term);
          for (i = 0; i < x.length; i++) { 
          txt += "<post>"+"<topic class=tpc>"+x[i].getElementsByTagName("topic")[0].childNodes[0].nodeValue + "</topic>"+ "<definition>" +
          x[i].getElementsByTagName("definition")[0].childNodes[0].nodeValue + "</definition>" + "<hashtags>" + x[i].getElementsByTagName("hashtags")[0].childNodes[0].nodeValue + "</hashtags>" + "</post>";
          }
          document.getElementById("demo").innerHTML = txt;
      
      }
      
      
  