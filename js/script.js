let startTime;
let elapsedTime = 0;
let timerInterval;

    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const millisecondsDisplay = document.getElementById('milliseconds');
    const startButton = document.getElementById('startBtn');
    const pauseButton = document.getElementById('pauseBtn');
    const resumeButton = document.getElementById('resumeBtn');
    const resetButton = document.getElementById('resetBtn');

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
        startButton.disabled = true;
        pauseButton.disabled = false;
        resumeButton.disabled = true;
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        startButton.disabled = false;
        pauseButton.disabled = true;
        resumeButton.disabled = false;
    }

    function resumeTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
        startButton.disabled = true;
        pauseButton.disabled = false;
        resumeButton.disabled = true;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        updateDisplay();
        startButton.disabled = false;
        pauseButton.disabled = true;
        resumeButton.disabled = true;
    }

    function updateTimer() {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }

    function updateDisplay() {
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = elapsedTime % 1000;

        minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');
        millisecondsDisplay.textContent = milliseconds.toString().padStart(3, '0');
    }

    function paraTemp() {
        const rot = document.querySelector("link[href='./css/keyframesec.css']");
        if (rot) {
            rot.disabled = true;
        }
    }
    
    function initTemp() {
        const rot = document.querySelector("link[href='./css/keyframesec.css']");
        if (rot) {
            rot.disabled = false;
        }
    }
    

    startButton.addEventListener('click', () => {
        startTimer();
        initTemp();
    });
    
    pauseButton.addEventListener('click', () => {
        pauseTimer();
        paraTemp();
    });
    
    resumeButton.addEventListener('click', () => {
        initTemp();
        resumeTimer();
    });
    
    resetButton.addEventListener('click', () => {
        paraTemp();
        resetTimer();
    });

    // Start the timer automatically when the page loads
    window.addEventListener('load', paraTemp);
