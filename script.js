'use strict'

const daysTxt = document.querySelector('#days');
const hoursTxt = document.querySelector('#hours');
const minutesTxt = document.querySelector('#minutes');
const secondsTxt = document.querySelector('#seconds');


const time = setInterval(function () {

    const now = new Date().getTime();
    const retireDate = new Date('October 19, 2024').getTime();
    const timeLeft = retireDate - now;

    if (!timeLeft) return;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysTxt.textContent = `${days} Days`;
    hoursTxt.textContent = `${hours} Hours`;
    minutesTxt.textContent = `${minutes} Minutes`;
    secondsTxt.textContent = `${seconds} Seconds`;

    // hoursTxt.textContent = `${hours}:${minutes}:${seconds}`;

}, 1000)