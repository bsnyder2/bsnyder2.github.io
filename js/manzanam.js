const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");

vid2.style = "display: none";
vid3.style = "display: none";

function foo(val) {
    switch(val) {
        case 1:
            vid1.style = "display: inline";
            vid2.style = "display: none";
            vid3.style = "display: none";
            vid2.pause();
            vid3.pause();
            break;

        case 2:
            vid2.style = "display: inline";
            vid1.style = "display: none";
            vid3.style = "display: none";
            vid1.pause();
            vid3.pause();
            break;

        case 3:
            vid3.style = "display: inline";
            vid1.style = "display: none";
            vid2.style = "display: none";
            vid1.pause();
            vid2.pause();
            break;
    }
    videoSource.src = `/mediaart-assets/${val}`;
    videoSource.parentElement.load();
}
