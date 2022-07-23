let pxl = document.querySelectorAll(".pixel");
var container = document.querySelector(".container");
let coloriseBtn = document.getElementById("clrBtn");
let greyBtn = document.getElementById("bwBtn");
let resetBtn = document.getElementById("resetBtn");
let size = 20;

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

// Changes colour of pixels to colorful
function rainbow() {
    container.children[i].addEventListener(
        "mouseover",
        (e) =>
            (e.target.style.cssText = `background-color: ${randomColor()}`)
    );
}

// Changes colour of pixels to grey
function greyScale() {
    container.children[i].addEventListener("mouseover", (e) => {
        e.target.style.cssText = `background-color: grey;`;
    });
}

// ==== BUTTONS ==================================================
coloriseBtn.addEventListener("click", () => {
    for (i = 0; i < container.childElementCount; i++) {
        rainbow();
    }
});

greyBtn.addEventListener("click", () => {
    for (i = 0; i < container.childElementCount; i++) {
        greyScale();
    }
});

resetBtn.addEventListener("click", () => {
    for (i = 0; i < container.childElementCount; i++) {
        container.children[i].style.cssText =
            "background-color: whitesmoke;";
    }
});
