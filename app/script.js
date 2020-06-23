const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#min");
const SECONDHAND = document.querySelector("#sec");

function setClock() {
    var date = new Date();
    let calTime = {
        secPos: date.getSeconds() * 6,
        minPos: (date.getMinutes() * 6) + (date.getSeconds() * .1),
        hrPos: (date.getHours() / 12) + (date.getMinutes() * 0.5)
    }
    return calTime;
}

function syncClock() {

    result.secPos += 6;
    result.minPos += 0.1;
    result.hrPos += (1 / 120);

    SECONDHAND.style.transform = `rotate(${result.secPos}deg)`;
    MINUTEHAND.style.transform = `rotate(${result.minPos}deg)`;
    HOURHAND.style.transform = `rotate(${result.hrPos}deg)`;
}

result = setClock();
setInterval(syncClock, 1000);