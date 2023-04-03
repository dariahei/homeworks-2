// задача без уровня сложности

// let timer = document.getElementById('timer');
// let hhMM = timer.before('00:00:');

// let countdown = setInterval(() => {
//     timer.textContent -= 1; 
//    if (timer.textContent.length == 1) {
//     timer.textContent = `0${timer.textContent }`;
//    }
//     if (timer.textContent == 0) {
//         alert('Вы победили в конкурсе!');
//         clearInterval(countdown);
//     }
// }, 1000);

// Сложность #1

let timer = document.getElementById('timer');
console.log(timer);

let hours = document.createElement('span');
hours.innerHTML = '04';
timer.before(hours); 

hours.after(':')

let min = document.createElement('span');
min.innerHTML = '11';
timer.before(min); 

min.after(':');

let  countdownHours= setInterval(() => {
    hours.textContent -= 1;
   if (hours.textContent.length == 1) {
    hours.textContent = `0${hours.textContent }`;
   }
    if ( hours.textContent == 0) {
        clearInterval(countdownHours);
    }
}, 4000);


let  countdownMunites= setInterval(() => {
    min.textContent -= 1;
   if (min.textContent.length == 1) {
    min.textContent = `0${min.textContent }`;
   }
   if (min.textContent == 0 && hours.textContent != 0) {
    min.textContent = 59;
   }
    if (min.textContent == 0 && hours.textContent == 0) {
        clearInterval(countdownMunites);
    }
}, 2000);


let countdownSeconds = setInterval(() => {
    timer.textContent -= 1;
   if (timer.textContent.length == 1) {
    timer.textContent = `0${timer.textContent }`;
   }
   if (timer.textContent == 0 && min.textContent != 0) {
    timer.textContent = 59;
   }
    if (timer.textContent == 0 && min.textContent == 0 && hours.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(countdownSeconds);
    }
}, 1000);





    

