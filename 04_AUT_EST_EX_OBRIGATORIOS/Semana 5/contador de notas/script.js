function notas(){
let    valor = parseInt(document.getElementById("valor").value);
let    notasde100 = 0
let    notasde50 = 0
let    notasde20 = 0
let    notasde10 = 0
let    notasde5 = 0
let    notasde2 = 0
let    notasde1 = 0

notasde100 = Math.floor(valor/100)
notasde50 = Math.floor((valor-(notasde100*100)) /50)
notasde20 = Math.floor((valor-((notasde100*100) + (notasde50*50)))/20)
notasde10 = Math.floor((valor-((notasde100*100) + (notasde50*50)+(notasde20*20)))/10)
notasde5 = Math.floor((valor-((notasde100*100) + (notasde50*50)+(notasde20*20)+(notasde10*10)))/5)
notasde2 = Math.floor((valor-((notasde100*100) + (notasde50*50)+(notasde20*20)+(notasde10*10)+(notasde5*5)))/2)
notasde1 = Math.floor(valor-((notasde100*100) + (notasde50*50)+(notasde20*20)+(notasde10*10)+(notasde5*5)+(notasde2*2)))


document.getElementById("notasde100").innerHTML = notasde100
document.getElementById("notasde50").innerHTML = notasde50
document.getElementById("notasde20").innerHTML = notasde20
document.getElementById("notasde10").innerHTML = notasde10
document.getElementById("notasde5").innerHTML = notasde5
document.getElementById("notasde2").innerHTML = notasde2
document.getElementById("notasde1").innerHTML = notasde1

}