// B1
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

let c = 0;

let value = document.getElementById('value');
value.textContent = c;

plus.addEventListener('click', () => {
    c += 1;
    value.textContent = c;
});

minus.addEventListener('click', () => {
    c -= 1;
    value.textContent = c;
});

// B2
let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop1 = document.getElementById('stop');
let time = document.getElementById('time');
let stopped = document.getElementById('stopped');
let up = document.getElementById('up');

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