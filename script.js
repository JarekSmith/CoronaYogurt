document.addEventListener("DOMContentLoaded", function() {
    eventMonth();
})

function eventMonth() {
    let monthP = document.getElementById("events").children[1];
    const d = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = months[d.getMonth()]
    monthP.innerHTML = `No scheduled events for the month of <strong>${currentMonth}</strong>`
}