const start = document.getElementById("start");
const stopt = document.getElementById("stop");
const reset = document.getElementById("reset");
const time = document.getElementById("time");

start.addEventListener("click", startClock);
stopt.addEventListener("click", stopClock);
reset.addEventListener("click", resetClock);

let secondsElapsed = 0;
let interval = null;

function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) clearInterval(interval)
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}