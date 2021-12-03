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
                document.getElementById("b1").style.visibility="hidden";  
            }  
            else {  
              document.getElementById("b1").style.visibility="visible";   
            }  
        }
  

  
