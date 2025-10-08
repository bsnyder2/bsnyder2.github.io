// Main content
const NUM_IMAGES = 23;
const PER_ROW = 4;

// Drawing addresses
let currentDrawingAddress = 0;
const drawingAddresses = [];

function fillDrawings() {
    const tbody = document.getElementById("drawings-table").children[0];
    let imgId = NUM_IMAGES;
    while (true) {
        const row = document.createElement("tr");
        tbody.appendChild(row);
        for (let i = 0; i < PER_ROW; i++) {
            if (imgId <= 0) return;
            const td = document.createElement("td");
            row.appendChild(td);
            const img = document.createElement("img");
            img.setAttribute("src", `/assets/img/drawings/${imgId}.jpg`)
            img.setAttribute("class", "drawing");
            td.appendChild(img);
            imgId--;
        }
    }
}

console.log(window);
console.log(window.screen.width);

fillDrawings();
loadDrawingAddresses();

const placeholderWrapper = document.getElementById("placeholder-wrapper");
const arrowsWrapper = document.getElementById("arrows-wrapper");
const placeholder = document.getElementById("placeholder");
const overlay = document.getElementById("overlay");
const backButton = document.getElementById("back-button");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

const logoImgs = document.querySelectorAll(".logo-img");
const ticks = document.querySelectorAll(".tick");


function loadDrawingAddresses() {
    const drawings = document.querySelectorAll(".drawing");
    drawings.forEach(function(drawing) {
        const drawingAddress = drawing.getAttribute("src");
        drawingAddresses.push(drawingAddress);
        drawing.addEventListener("click", (event) => {
            placeholder.setAttribute("src", drawingAddress);
            currentDrawingAddress = drawingAddresses.indexOf(drawingAddress);
            console.log(currentDrawingAddress);
            placeholderWrapper.style.display = "flex";
            placeholder.style.display = "inline";
            overlay.style.display = "inline";
            backButton.style.display = "inline";
        });
        drawing.addEventListener("mouseover", (event) => {
            playTick();
        })
    });
}

// Navbar
const logoAddresses = ["assets/img/logos/instagram-logo-white.png", "assets/img/logos/instagram-logo.png",
                         "assets/img/logos/github-logo-white.png",  "assets/img/logos/github-logo.png",
                         "assets/img/logos/youtube-logo-white.png", "assets/img/logos/youtube-logo.png"]

for (let i = 0; i < logoAddresses.length / 2; i++) {
    logoImgs[i].addEventListener("mouseover", (event) => {
        logoImgs[i].setAttribute("src", logoAddresses[i * 2 + 1]);
    })
    logoImgs[i].addEventListener("mouseout", (event) => {
        logoImgs[i].setAttribute("src", logoAddresses[i * 2]);
    })
}

// Overlay buttons
backButton.addEventListener("click", (event) => {
    placeholder.style.display = "none";
    placeholderWrapper.style.display = "none";
    overlay.style.display = "none";
    backButton.style.display = "none";
})

arrowLeft.addEventListener("click", (event) => {
    currentDrawingAddress--;
    if (currentDrawingAddress < 0) {
        currentDrawingAddress = drawingAddresses.length - 1;
    }
    placeholder.setAttribute("src", drawingAddresses[currentDrawingAddress]);
    playTick();
})

arrowRight.addEventListener("click", (event) => {
    currentDrawingAddress++;
    if (currentDrawingAddress > drawingAddresses.length - 1) {
        currentDrawingAddress = 0;
    }
    placeholder.setAttribute("src", drawingAddresses[currentDrawingAddress]);
    playTick();
})

// Allow overlapping tick sounds for selection
let currentTick = 0;
function playTick() {
    currentTick = 0;
    // If tick x already playing, play tick x+1
    while (!ticks[currentTick].paused) {
        currentTick++;
    }
    ticks[currentTick].play();
}
