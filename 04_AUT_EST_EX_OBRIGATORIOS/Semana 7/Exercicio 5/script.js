const quantStudents = document.querySelector("#quantStudents");
const freeFillButton = document.querySelector("#free-fill");
const studentTable = document.querySelector("#studentTable");
const result = document.querySelector("#result");

quantStudents.addEventListener("input", function () {
    if (quantStudents.value.length > 0) {
        freeFillButton.disabled = false;
    } else {
        freeFillButton.disabled = true;
    }
})

let numberStudents;

function fill() {

    numberStudents = quantStudents.value;

    let table = `
    
        <table>
            <tr>
                <th>#</th>
                <th>Aluno</th>
                <th>Nota da prova</th>
                <th>Nota do trabalho</th>
                <th>Média calculada</th>
            </tr>
    `

    for(let i = 1; i <= numberStudents; i++) {
        table += `
    
            <tr>
                <td>${i}</td>
                <td>Estudante ${i}</td>
                <td><input type="number" name="test-grade" id="test-grade-${i}" min="0" max="10"></td>
                <td><input type="number" name="work-grade" id="work-grade-${i}" min="0" max="10"></td>
                <td id="weighted-average-${i}">-</td>
            </tr>
        
        `
    }

    table += `
    
        </table>
        <input type="button" name="calc" id="calc" value="Calcular" onclick="calc()">
    `

    studentTable.innerHTML = table;
}

function calc() {

    let testTotalGrade = 0;
    let workTotalGrade = 0;
    let classTotalGrade = 0;
    let testLowestGrade = 0;
    let testHighestGrade = 0;
    let workLowestGrade = 0;
    let workHighestGrade = 0;

    for(let i = 1; i <= numberStudents; i++) {
        
        let currentStudent = {
            testGrade: parseFloat(document.querySelector(`#test-grade-${i}`).value),
            workGrade: parseFloat(document.querySelector(`#work-grade-${i}`).value),
            weightedAverageLabel: document.querySelector(`#weighted-average-${i}`),
        }

        currentStudent.weightedAverage = ((currentStudent.testGrade * 2) + (currentStudent.workGrade * 3)) / 5;
        
        currentStudent.weightedAverageLabel.innerHTML = currentStudent.weightedAverage;
        
        testTotalGrade += currentStudent.testGrade;
        workTotalGrade += currentStudent.workGrade;
        classTotalGrade += currentStudent.weightedAverage;

        if(i == 1) {
            testLowestGrade = currentStudent.testGrade;
            testHighestGrade = currentStudent.testGrade;
            workLowestGrade = currentStudent.workGrade;
            workHighestGrade = currentStudent.workGrade;
        } else {
            currentStudent.testGrade < testLowestGrade ? testLowestGrade = currentStudent.testGrade : false;
            currentStudent.testGrade > testHighestGrade ? testHighestGrade = currentStudent.testGrade : false;
            currentStudent.workGrade < workLowestGrade ? workLowestGrade = currentStudent.workGrade : false;
            currentStudent.workGrade > workHighestGrade ? workHighestGrade = currentStudent.workGrade : false;
        }

    }

    const totalGradeAverage = (classTotalGrade/numberStudents).toFixed(2);
    const testGradeAverage = (testTotalGrade/numberStudents).toFixed(2);
    const workGradeAverage = (workTotalGrade/numberStudents).toFixed(2);


    result.innerHTML = `
    
    <table>
        <tr>
            <th>Modalidade</th>
            <th>Resultado</th>
        </tr>
        <tr>
            <td>Média geral (considerando todos os alunos)</td>
            <td>${totalGradeAverage}</td>
        </tr>
        <tr>
            <td>Média artimética das notas de prova</td>
            <td>${testGradeAverage}</td>
        </tr>
        <tr>
            <td>Média artiméticas das notas do trabalho</td>
            <td>${workGradeAverage}</td>
        </tr>
        <tr>
            <td>Menor nota de prova</td>
            <td>${testLowestGrade}</td>
        </tr>
        <tr>
            <td>Maior nota de prova</td>
            <td>${testHighestGrade}</td>
        </tr>
        <tr>
            <td>Menor nota de trabalho</td>
            <td>${workLowestGrade}</td>
        </tr>
        <tr>
            <td>Maior nota de trabalho</td>
            <td>${workHighestGrade}</td>
        </tr>
    </table>
    `

}