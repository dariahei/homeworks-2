let cookie = document.getElementById("cookie");
let clicker = document.getElementById("clicker__counter");
console.log(clicker);

let clickPerSec = document.getElementById("clicker__counter-per-sec");

// let seconds = new Date().performance.now();


cookie.onclick = function () {
 
     if (cookie.width == 200) {
        cookie.width = 250;
        clicker.innerText ++;
     } else  {
        cookie.width = 200;
        clicker.innerText ++;
     }
     
};
