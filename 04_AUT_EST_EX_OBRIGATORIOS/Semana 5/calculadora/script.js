function conta(n1,n2,op){
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var op =document.getElementById("op").value;


var num = eval(n1+op+n2);

                   
document.getElementById("num").innerHTML = num;
console.log(num)
}