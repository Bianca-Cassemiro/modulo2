$(document).ready(() => {
  $(".button").click(() => {
    const button = document.querySelector(".button");
    button.style.background = "black";

    const frase = document.querySelector(".frase");
    frase.innerHTML = "Mudei de cor uai";
  });
});

function createFriend(){
  let friend = document.getElementById("friendInput").value;

  $.post("/createFriend", {name:friend})
  console.log("feijao")
  document.location.reload(true)

}

function editarMigo(){

  let newName = prompt("Coloque seu nome:")
  $.post("/editado", { edicao:newName})
  console.log(newName)
  document.location.reload(true)
}

function deletarMigo(){
  let friend = document.getElementById("migo").value;
  $.post("/delete", {name:friend})
  document.location.reload(true)
}



const getInfo = async () => {
  const response = await fetch(
    "http://127.0.0.1:3030/getFriend"
  );
  const data = await response.json();
  return data;
};

getInfo().then((res)=>{
  $("#myFriends").append(
    `<p id="migo"> ${res.nome} </p>

    <button onclick="editarMigo()">Editar</button>
    <button onclick="deletarMigo()">Deletar</button>
    `
  )
})



