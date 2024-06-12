let sec = 0;
let min = 0;
let hour = 0;
let intervalId;

const buttonStart = document.getElementById('button-start');
buttonStart.addEventListener('click', start);
const buttonEnd = document.getElementById('button-end');
buttonEnd.addEventListener('click', stop);

function start(){
    intervalId = setInterval(func, 20);
    document.getElementById('button-start').style.display = "none";
    buttonEnd.style.display = "inline-block";
}

function stop() {
    clearInterval(intervalId);
    buttonStart.style.display = "inline-block"; 
    buttonEnd.style.display = "none";
}

function func(){
    sec++;

    const secunds = document.getElementById('secunds');
    const minute = document.getElementById('minuts');
    const hours = document.getElementById('hours');

    secunds.textContent = sec;

    if(sec <= 9){
        secunds.textContent = "0" + sec;
    }

    if(sec == 60){
        sec = 0;
        min++;
        minute.textContent = min;
    }

    if(min <= 9){
        minute.textContent = "0" + min;
    }

    if(min == 60){
        min = 0;
        hour++;
        hours.textContent = hour;
    }

    if(hour <= 9){
        hours.textContent = "0" + hour;
    }

    if(hour == 60){
        hour = 0;
    }
}