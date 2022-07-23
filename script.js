const button = document.querySelectorAll(".button");
var row = document.querySelector("tr");
var container = document.querySelector(".container");
let size = 10;

function populate(size) {
    // Updating the --size CSS variable
    container.style.setProperty("--size", size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        container.appendChild(div);
    }
}

populate(size);
