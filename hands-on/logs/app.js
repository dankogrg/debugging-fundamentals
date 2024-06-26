function CalculateMultiplicationTable(number) {
    let table = '<table border="1">';

    for (let i = 1; i <= number; i++) {
        table += createTableRow(i);
    }

    table += "</table>";
    return table;
}

function createTableRow(rowNumber) {
    let row = "<tr>";
    for (let j = 1; j <= 10; j++) {
        row += `<td ${rowNumber} x ${j} = ${rowNumber * j}</td>`;
    }
    row += "</tr>";
    return row;
}

function viewTable() {
    const number = parseInt(document.getElementById("number").value);
    console.log(number);
    const multiplicationTable = document.getElementById("multiplicationTable");
    if (isNaN(number)) {
        multiplicationTable.innerHTML = "Please enter a valid number.";
    } else {
        multiplicationTable.innerHTML = CalculateMultiplicationTable(number);
    }
}
document.querySelector("#generateTable").addEventListener("click", viewTable);
