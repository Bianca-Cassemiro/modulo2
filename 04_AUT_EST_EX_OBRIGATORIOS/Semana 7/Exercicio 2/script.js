const textInputs = document.querySelectorAll("input[type='text']");

function change() {
    let aux = textInputs[0].value;

    textInputs[0].value = textInputs[1].value;

    textInputs[1].value = aux; 
}