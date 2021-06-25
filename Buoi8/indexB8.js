// B1
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

let count = 0;

const value = document.getElementById('value');
value.textContent = count;

plus.addEventListener('click', () => {
    count += 1;
    value.textContent = count;
});

minus.addEventListener('click', () => {
    count -= 1;
    value.textContent = count;
});

// B2
const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop1 = document.getElementById('stop');
const time = document.getElementById('time');
const stopped = document.getElementById('stopped');
const up = document.getElementById('up');

let currentTime;

start.addEventListener('click', () => {
    currentTime = Number(timer.value) + 1;
    let theInterval = setInterval(() => {
        currentTime -= 1;
        up.textContent = '';
        stopped.textContent = '';
        time.textContent = currentTime;
        if (currentTime === -1) {
            time.textContent = '';
            clearInterval(theInterval);
            up.textContent = "Time's up";
        };
        stop1.addEventListener('click', () => {
            time.textContent = '';
            clearInterval(theInterval);
            stopped.textContent = 'Stopped';
        });
    }, 1000);
});