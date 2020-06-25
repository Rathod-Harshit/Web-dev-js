const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#min");
const SECONDHAND = document.querySelector("#sec");
const CURRT = document.querySelector("#num-clock");
var findDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function setClock() {
    var date = new Date();
    console.log(date);
    let calTime = {
        secPos: date.getSeconds() * 6,
        minPos: (date.getMinutes() * 6) + (date.getSeconds() * .1),
        hrPos: (date.getHours() * 30) + (date.getMinutes() * 0.5),
        clkDay: findDay[date.getDay()],
        clkDate: date.getDate(),
        clkMonth: date.getMonth() + 1
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
    CURRT.innerHTML = result.clkDay + ", " + result.clkMonth + "/" + result.clkDate;
}

result = setClock();
setInterval(syncClock, 1000);
