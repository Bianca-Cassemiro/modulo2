function isPrime(num) {

    if (num === 2) {
      return true;
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return true;
        } else if (num === i * i) {
          return false
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  
  }
function calc_ex5() {
    let n1 = Number((document.querySelector("#exercicio5 input").value).split(" ")[0])
    let n2 = Number((document.querySelector("#exercicio5 input").value).split(" ")[1])

    let result = ''
    for(let i = n1; i <= n2; i++) {
        if(isPrime(i) === true) {
            result = result + String(i) + ', '
        }
    }
    document.querySelector("#exercicio5 p").innerHTML = result
}