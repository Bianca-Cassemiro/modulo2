function oi(){
    const TestGETDB = async () => {
        infos = { id: userId };
        console.log(JSON.stringify(infos));
        const parameters = {
          method: "POST",
          body: JSON.stringify(infos),
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          "http://127.0.0.1:3071/teste",
          parameters
        );
        const data = await response.json();
        return data;
      };
    
    TestGETDB().then((res)=>{
    
    $("#titlebox").append(
        res.title
    )
    
    })
}


   
   
    


//$.get(`http://127.0.0.1:3071/users?login="${login}"&senha=${senha}`,function(resultado)
    // { var senha = parseInt($("#senha").val());

    //     var texto="";
    //     if(Array.isArray(resultado))
    //     {resultado.forEach(linha =>
    //         {
    //            texto += '<div class="title">'+linha.title+'</div>';
    //         })
    //     }
    //     else 
    //     {
    //         texto=resultado;
    //     }
    //     $("#main").html(texto);
    // }); //? = em seguida vem os campos, chama a variável, para o usuário