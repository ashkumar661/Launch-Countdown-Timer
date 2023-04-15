const TIME_IN_MILI_SEC = 1000 * 60 * 60 * 24;
const timerDate = Date.now() + 14 * TIME_IN_MILI_SEC; // 14 days in miliseconds
let previousTime;

let counter = () => {
    let difference = Math.floor((timerDate - Date.now()) / 1000);
    if (previousTime !== difference) {
        let days = Math.floor(difference / (60 * 60 * 24));
        let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((difference % (60 * 60)) / 60);
        let seconds = Math.floor(difference % 60);

        document.querySelector('.days').textContent = days;
        document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        console.log(seconds, minutes, hours);
    }
    previousTime = difference;
};

setInterval(counter, 250);