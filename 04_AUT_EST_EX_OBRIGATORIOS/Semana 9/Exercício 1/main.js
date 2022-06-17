function calc_ex1() {
    let value = document.querySelector("#exercicio1 input").value
    let digitoCentena = Number(value[0])
    if(digitoCentena%2 === 0) {
        document.querySelector("#exercicio1 p").innerHTML = `${digitoCentena} é Par`
    } else {
        document.querySelector("#exercicio1 p").innerHTML = `${digitoCentena} é Ímpar`
    }
}
