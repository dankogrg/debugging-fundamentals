function addItem() {
    let newItem = document.getElementById("newItem").value;

    if (newItem !== "") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newItem));

        document.getElementById("list").appendChild(li);

        document.getElementById("newItem").value = "";
    } else {
        alert("Please, enter a valid element.");
    }
}

document.getElementById("btnAddItem").addEventListener("click", addItem);
