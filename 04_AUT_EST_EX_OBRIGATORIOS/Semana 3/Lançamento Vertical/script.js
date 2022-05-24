function calcular(){
    var velocidade = document.querySelector("#numberInput").value
    var g = 10
    var hmax = (velocidade*velocidade)/(2*g)
    var Ttot = velocidade/g
    
    document.querySelector("#Ttot").innerHTML = Ttot
    document.querySelector("#hmax").innerHTML = hmax
    
    console.log()
} 