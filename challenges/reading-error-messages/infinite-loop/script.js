function calculateAverage() {
    const notesStr = document.getElementById("notes").value;
    console.log(notesStr);
    if (!notesStr) {
        alert("Warning: Enter the notes!");
        return;
    }

    const notes = notesStr.split(",").map(Number);
    console.log(notes);

    if (notes.some(isNaN)) {
        alert("Error: Notes should be numbers!");
        return;
    }

    let sum = 0;
    for (const note of notes) {
        {
            console.log(note);
            sum += note;
        }
    }

    const average = sum / notes.length;
    console.log(average);
    document.getElementById("result").innerHTML = `Average: ${average}`;
}

document
    .querySelector("#calculateAverage")
    .addEventListener("click", calculateAverage);
