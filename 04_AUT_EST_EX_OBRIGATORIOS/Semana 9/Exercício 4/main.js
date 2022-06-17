function calc_ex4() {
    let n = Number(document.querySelector('#exercicio4 input').value)
    let first = 1
    let second = 1
    let result = `${first}, ${second}`
    for(let i = 0; i < n; i++) {
        let third = first + second
        result = result + `, ${third}`
        first = second
        second = third
    }
    document.querySelector("#exercicio4 p").innerHTML = result
}