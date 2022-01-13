var dataFinal = new Date("dec 19, 2022 00:00:00").getTime();

var x = setInterval(function () {
  var dataAtual = new Date().getTime();
  var tempoRegressivo = dataFinal - dataAtual;

  var dias = Math.floor(tempoRegressivo / (1000 * 60 * 60 * 24));
  var horas = Math.floor((tempoRegressivo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((tempoRegressivo % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tempoRegressivo % (1000 * 60)) / 1000);
  document.getElementById("dia").innerHTML = dias;
  document.getElementById("hora").innerHTML = horas;
  document.getElementById("minuto").innerHTML = minutos;
  document.getElementById("segundo").innerHTML = segundos;

  if (tempoRegressivo < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Data Expirado!";
    document.getElementById("dia").innerHTML = "0";
    document.getElementById("hora").innerHTML = "0";
    document.getElementById("minuto").innerHTML = "0";
    document.getElementById("segundo").innerHTML = "0";
  }
}, 1000);
