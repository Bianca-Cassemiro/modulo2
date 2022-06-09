$(document).ready(() => {
  $(".button").click(() => {
    const button = document.querySelector(".button");
    button.style.background = "black";

    const frase = document.querySelector(".frase");
    frase.innerHTML = "Mudei de cor uai";
  });
});

function oi(){
  const TestGETDB = async () => {
      
      const response = await fetch(
        "http://127.0.0.1:3071/teste",
        
      );
      const data = await response.json();
      return data;
    };
  
  TestGETDB().then((res)=>{
  console.log("te amo")
  $("#titlebox").append(
    `
    <h3 class="font">
      ${res.title}
    </h3>
    `  
  
  )
  
  })
}

