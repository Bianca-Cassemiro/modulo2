function calcular(quantPeople){
    var period = document.querySelector("#period").value
    var tot = ""

    if (period == "diurno"){
        if (quantPeople < 0){
            alert("Insira uma quantidade válida de pessoas")
        } else if(quantPeople >= 0 && quantPeople <= 50){
            tot = quantPeople*200
            showText(tot);
        }else{
            tot = quantPeople*200*0.4
            showText(tot);
        }
    }
    
    if (period == "noturno"){
        if (quantPeople < 0){
            alert("Insira uma quantidade válida de pessoas")
        } else if(quantPeople >= 0 && quantPeople <= 50){
            tot = quantPeople*100
            showText(tot);
        }else{
            tot = quantPeople*100*0.2
            showText(tot);
        }
    }
}

function showText(tot){
    document.querySelector("#tot").innerHTML = `O total foi de R$${tot},00`
}