let seconds = 0;
let intervalId = null;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const minsStr = String(mins).padStart(2, "0");
    const secsStr = String(secs).padStart(2, "0");

    display.textContent = `${minsStr}:${secsStr}`;
}

function startTimer() {
    if (isRunning) return; // don't start twice

    isRunning = true;
    intervalId = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(intervalId);
    intervalId = null;
}

function resetTimer() {
    isRunning = false;
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// initialize display
updateDisplay();
