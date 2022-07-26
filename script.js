var container = document.querySelector(".pxl__container");
let pxl = document.querySelectorAll(".pxl");
let buttonsAll = document.querySelectorAll("button");
let resizeBtn = document.querySelector("#resizeBtn");
let coloriseBtn = document.getElementById("clrBtn");
let eraseBtn = document.getElementById("eraseBtn");
let resetBtn = document.getElementById("resetBtn");
let clrPicker = document.getElementById("clrPicker");
let clrPickerBtn = document.getElementById("clrPickerBtn");

// Changes default mouse behavior so user can drag and fill
let mouseDown = false;
let mouseLeave = false;
container.onmousedown = () => (mouseDown = true);
container.onmouseup = () => (mouseDown = false);

// Creates grid of pixels
function populate(size) {
    size = prompt("Enter square root of area size.");
    if (size < 101 && size > 0 && size !== isNaN) {
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            div.classList.add("pxl");
            div.remove();
            container.appendChild(div);
        }
        // Updating the --size CSS variable
        container.style.setProperty("--size", size);
    } else {
        populateInvalid();
    }
}
// If user enters invalid input
function populateInvalid(size) {
    size = prompt("INVALID INPUT\nMust be a number between 1 - 100!");
    if (size < 101 && size > 0 && size !== isNaN) {
        for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            div.classList.add("pxl");
            div.remove();
            container.appendChild(div);
        }
        // Updating the --size CSS variable
        container.style.setProperty("--size", size);
    }
}

populate();

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
    if (mouseLeave) {
        return;
    }
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

// ==== BUTTON FUNCTIONS ==================================================
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

clrPickerBtn.addEventListener("click", (e) => {
    for (i = 0; i < container.childElementCount; i++) {
        clrFill(clrPicker.value);
    }
});

// ==== BUTTON STYLING EVENTS ===================================================

buttonsAll.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
        e.target.classList.remove("active");
        e.target.classList.toggle("neutral");
    });
    button.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("active");
        e.target.classList.toggle("neutral");
        e.stopPropagation();
    });
    button.addEventListener("mousedown", (e) => {
        e.target.classList.toggle("active");
    });
});
