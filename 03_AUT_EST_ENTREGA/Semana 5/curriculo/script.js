$(document).ready(() => {
  $(".button").click(() => {
    const button = document.querySelector(".button");
    button.style.background = "black";

    const frase = document.querySelector(".frase");
    frase.innerHTML = "Mudei de cor uai";
  });
});
