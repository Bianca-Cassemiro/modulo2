function calc_ex3() {
    let nomes = (document.querySelector('#exercicio3 input').value).split(" ")
    nomes.sort()
    document.querySelector("#exercicio3 p").innerHTML = `Em ordem alfabética: ${nomes[0]}, ${nomes[1]}, ${nomes[2]}`
}