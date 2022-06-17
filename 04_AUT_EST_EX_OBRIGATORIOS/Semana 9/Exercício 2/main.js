function calc_ex2() {
    let value = document.querySelector("#exercicio2 input").value
    let soma = 0
    for(let i = 0; i < value.length; i++) {
        soma += Number(value[i])
    }
    document.querySelector("#exercicio2 p").innerHTML = `Soma dos dígitos ${soma}`
}
