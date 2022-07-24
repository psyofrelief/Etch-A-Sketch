let pxl = document.querySelectorAll(".pixel");
var container = document.querySelector(".container");
let coloriseBtn = document.getElementById("clrBtn");
let eraseBtn = document.getElementById("eraseBtn");
let resetBtn = document.getElementById("resetBtn");
let size = 20;
let mouseDown = false;
container.onmousedown = () => (mouseDown = true);
container.onmouseup = () => (mouseDown = false);

// Creates grid of pixels
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

// ==== PIXEL FUNCTIONS =======================================================
// Generates random color
function randomColor() {
    var makeColorCode = "0123456789ABCDEF";
    var code = "#";
    for (var count = 0; count < 6; count++) {
        // Generates random '#' color
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

function clrFill(clrChoice) {
    container.children[i].addEventListener("mouseover", (e) => {
        if (e.type === "mouseover" && !mouseDown) {
            return;
        }
        e.target.style.cssText = `background-color: ${clrChoice}`;
    });
    container.children[i].addEventListener("mousedown", (e) => {
        e.target.style.cssText = `background-color: ${clrChoice}`;
    });
}

// ==== BUTTONS ==================================================
coloriseBtn.addEventListener("click", () => {
    for (i = 0; i < container.childElementCount; i++) {
        clrFill(randomColor());
    }
});

eraseBtn.addEventListener("click", () => {
    for (i = 0; i < container.childElementCount; i++) {
        clrFill("whitesmoke");
    }
});

resetBtn.addEventListener("click", () => {
    for (i = 0; i < container.childElementCount; i++) {
        container.children[i].style.cssText =
            "background-color: whitesmoke;";
    }
});
