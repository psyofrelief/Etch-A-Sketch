let pxl = document.querySelectorAll(".pxl");
var container = document.querySelector(".pxl__container");
let coloriseBtn = document.getElementById("clrBtn");
let eraseBtn = document.getElementById("eraseBtn");
let resetBtn = document.getElementById("resetBtn");
var clrPicker = document.getElementById("clrPicker");
let clrPickerBtn = document.getElementById("clrPickerBtn");
let buttons = document.querySelector(".btn__container");
let size = 20;
let mouseDown = false;
let mouseLeave = false;
let inputCtnr = document.querySelector("input__container");
container.onmousedown = () => (mouseDown = true);
container.onmouseup = () => (mouseDown = false);

// Creates grid of pixels
function populate(size) {
    // Updating the --size CSS variable
    container.style.setProperty("--size", size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("pxl");
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

// ==== BUTTON CLICK EVENTS ===================================================

for (i = 0; i < buttons.childElementCount; i++) {
    buttons.children[i].addEventListener("mousedown", (e) => {
        e.target.classList.toggle("active");
    });
    buttons.children[i].addEventListener("transitionend", (e) => {
        e.target.classList.remove("active");
    });
}
