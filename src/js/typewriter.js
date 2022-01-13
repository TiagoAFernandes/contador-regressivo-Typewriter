var i = 0;
var txt = "Para o dia 19/12/2022";
var valocidade = 100;
var cursor = document.getElementById("odia");
setTimeout(() => {
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("odia").innerHTML += txt.charAt(i);
      i++;
      cursor.dataset.content = "|";
      setTimeout(typeWriter, valocidade);
    } else {
      cursor.dataset.content = "";
    }
  }
  typeWriter();
}, 3000);
