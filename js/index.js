crtbox = document.getElementById("crtbox");
projectLinks = document.getElementsByClassName("projectlink");

colors = ["blue", "red", "green"];
Array.from(projectLinks).forEach((projectLink, i) => {
  projectLink.addEventListener("mouseover", () => {
    crtbox.style.backgroundColor = colors[i];
  });
});

// This will eventually not use inline styling because that is bad (change image src attribute)
// Can I do this without IDs? For the whole projectlink class

globe = document.getElementById("globe");
console.log(globe);
globe.addEventListener("click", () => {
  console.log("scroll fades in");
  scroll.style.visibility = "visible";
  scroll.style.animation = "fadeinout 2s linear";
});

// Click daily scroll to enlarge
scroll = document.getElementById("scroll");
scroll.style.visibility = "hidden";

console.log(scroll);

// scroll.style.visibility = "visible";
