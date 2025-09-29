// Load images into gallery from folder


// Get all children

const body = document.body;
const drawings = document.querySelectorAll(".drawing");
const placeholderWrapper = document.getElementById("placeholder-wrapper");
const placeholder = document.getElementById("placeholder");
const overlay = document.getElementById("overlay");
const backButton = document.getElementById("back-button");
const logoImgs = document.querySelectorAll(".logo-img")
const tick = document.getElementById("tick");
console.log("tick");


backButton.addEventListener("click", (event) => {
    placeholder.style.display = "none";
    placeholderWrapper.style.display = "none";
    overlay.style.display = "none";
    backButton.style.display = "none";
})

// Get address for each image
drawings.forEach(function(drawing) {
    const drawingAddress = drawing.getAttribute("src");
    drawing.addEventListener("click", (event) => {
        placeholder.setAttribute("src", drawingAddress);
        placeholderWrapper.style.display = "flex";
        placeholder.style.display = "inline";
        overlay.style.display = "inline";
        backButton.style.display = "inline";
    });
    drawing.addEventListener("mouseover", (event) => {
        tick.play();
    })
    // const drawingClone = drawing.cloneNode(true);
    // console.log(drawingClone);
    // document.body.appendChild(drawingClone);
});

const logoAddresses = ["assets/img/logos/instagram-logo.png", "assets/img/logos/instagram-logo-white.png",
                         "assets/img/logos/github-logo.png",  "assets/img/logos/github-logo-white.png",
                         "assets/img/logos/youtube-logo.png", "assets/img/logos/youtube-logo-white.png"]

for (let i = 0; i < logoAddresses.length / 2; i++) {
    console.log(i);
    logoImgs[i].addEventListener("mouseover", (event) => {
        console.log("hover");
        logoImgs[i].setAttribute("src", logoAddresses[i * 2 + 1]);
    })
    logoImgs[i].addEventListener("mouseout", (event) => {
        console.log("hover");
        logoImgs[i].setAttribute("src", logoAddresses[i * 2]);
    })
}

logoImgs.forEach(function(logoImg) {

})

