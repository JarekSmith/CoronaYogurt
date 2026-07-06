function togglePlay() {
    const audio = document.getElementById("shrek-audio");
    if (audio.paused) {
        audio.play(); // Play the audio
    } else {
        audio.pause(); // Pause the audio
    }
}

function toggleKojima() {
    const gokuSpin = document.getElementById("goku-spin");
    const gokuImage = new URL("images2/gokuspin2.gif", document.baseURI).href;
    switch (gokuSpin.src) {
        case gokuImage:
            gokuSpin.src = new URL("images2/hideo.png", document.baseURI).href;
            break;
        default:
            gokuSpin.src = gokuImage;
    }
}

async function addStatusIndicators() {
    const indicators = document.getElementsByClassName("status");
    const svgNS = "http://www.w3.org/2000/svg";
    const activeIcon = document.createElementNS(svgNS, "svg");
    activeIcon.setAttribute("width", "16");
    activeIcon.setAttribute("height", "16");
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "8");
    circle.setAttribute("cy", "8");
    circle.setAttribute("r", "6");
    circle.setAttribute("fill", "red");

    activeIcon.appendChild(circle);
    const inactiveIcon = activeIcon.cloneNode(true);
    inactiveIcon.childNodes[0].setAttribute("fill", "green");
    [...indicators].forEach(indicator => indicator.appendChild(activeIcon.cloneNode(true)));

    let response = await fetch("https://api.mcstatus.io/v2/status/java/mc.fartsound.us");
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    let result = await response.json();
    if (result.online) indicators[0].getElementsByTagNameNS(svgNS, "circle")[0].setAttribute("fill", "green");
    response = await fetch("https://api.mcstatus.io/v2/status/java/play.fartsound.us");
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    result = await response.json();
    if (result.online) indicators[1].getElementsByTagNameNS(svgNS, "circle")[0].setAttribute("fill", "green");
}

document.addEventListener("DOMContentLoaded", async () => {await addStatusIndicators()});