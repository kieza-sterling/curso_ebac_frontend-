document.addEventListener("DOMContentLoaded", function() {
    var campoA = document.getElementById("numeroA");
    var campoB = document.getElementById("numeroB");
    
    document.getElementById("enviar").addEventListener("click", function() {
      if (campoB.value < campoA.value) {
        alert("muito bem, o ponto B é maior do que o ponto A");
      } else {
        alert("o ponto B deve ser maior do que o ponto A");
      }
    });
  });