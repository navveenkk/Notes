function loadSearch(){
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "https://github.com/navveenkk/NoteBook/blob/79895c6b5a2e2eb5ed609c453fb972a7e7fa164f/data.xml", true);
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
