$(document).ready(() => {
  $(".button").click(() => {
    const button = document.querySelector(".button");
    button.style.background = "black";

    const frase = document.querySelector(".frase");
    frase.innerHTML = "Mudei de cor uai";
  });
});

function TestGETDB(){
  var url = "http://127.0.0.1:3071/";
  var resposta;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

  resposta = JSON.parse(xhttp.responseText);
  
  $(rightcontainer).append("<br /><br />" + JSON.stringify(resposta));
  $(rightcontainer).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
  //console.log(xhttp.responseText);
}
