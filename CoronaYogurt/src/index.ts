function togglePlay() {
    const audio: HTMLAudioElement = document.getElementById("shrek-audio") as HTMLAudioElement;
    if (!audio) {
        console.error("Shrek Audio can't be found");
        return;
    };
    if (audio.paused) {
        audio.play(); // Play the audio
    } else {
        audio.pause(); // Pause the audio
    }
}
document.getElementById("btn-music")?.addEventListener("click", togglePlay);

function toggleKojima() {
    const gokuSpin: HTMLImageElement | null = document.getElementById("goku-spin") as HTMLImageElement;
    if (!gokuSpin) return
    const gokuImage = "src/assets/images/gokuspin2.gif";
    const match = gokuSpin.src.match(/gokuspin2[.]gif/g)
    if (match) {
        gokuSpin.src = "src/assets/images/hideo.png";
    } else {
        gokuSpin.src = gokuImage;
    }
}
document.getElementById("goku-spin")?.addEventListener("click", toggleKojima);

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
    (inactiveIcon.childNodes[0] as HTMLElement).setAttribute("fill", "green");
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