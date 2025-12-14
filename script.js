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