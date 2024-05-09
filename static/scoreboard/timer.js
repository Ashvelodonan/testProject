var displayTime = document.getElementById("timer_actual");
var testButton = document.getElementById("test_button");
var minutesInput = document.getElementById("minutes_input");
var secondsInput = document.getElementById("seconds_input");

testButton.addEventListener("click", () => {
    displayTime.innerHTML = minutesInput.value + ":" + secondsInput.value;
});

// script.js

// Function to update the countdown timer
function updateTimer(minutes, seconds) {
    document.getElementById('timer').innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Function to start the countdown
function startCountdown() {
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);

    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds >= 60) {
        alert('Please enter valid minutes and seconds.');
        return;
    }

    let totalSeconds = minutes * 60 + seconds;

    let timer = totalSeconds;
    const countdown = setInterval(function () {
        const mins = Math.floor(timer / 60);
        const secs = timer % 60;
        updateTimer(mins, secs);
        timer--;
        if (timer < 0) {
            clearInterval(countdown);
            // You can add any additional logic here when the timer reaches zero
        }
    }, 1000);
}

document.getElementById('startBtn').addEventListener('click', startCountdown);


// let mins = .1;
// let secs = mins * 60;
// function countdown() {
//     setTimeout('Decrement()', 60);
// }
// function Decrement() {
//     if (document.getElementById) {
//         minutes = document.getElementById("minutes");
//         seconds = document.getElementById("seconds");
//         if (seconds < 59) {
//             seconds.value = secs;
//         }
//         else {
//             minutes.value = getminutes();
//             seconds.value = getseconds();
//         }
//         if (mins < 1) {
//             minutes.style.color = "red";
//             seconds.style.color = "red";
//         }
//         if (mins < 0) {
//             alert('time up');
//             minutes.value = 0;
//             seconds.value = 0;
//         }
//         else {
//             secs--;
//             setTimeout('Decrement()', 1000);
//         }
//     }
// }

// function getminutes() {
//     mins = Math.floor(secs / 60);
//     return mins;
// }

// function getseconds() {
//     return secs - Math.round(mins * 60);
// }
