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
