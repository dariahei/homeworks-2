let deadMoles = document.getElementById("dead");
let lostShots = document.getElementById("lost");


for (let i = 1; i < 10 ; i++) {
    let getHole = (i) => document.getElementById(`hole${i}`);
    getHole(i).onclick = function () {
        if (getHole(i).classList.contains('hole_has-mole')) {
            deadMoles.textContent ++ ;
        } else {
            lostShots.textContent ++;
        }
        if (deadMoles.textContent == 7) {
            alert ('Вы выиграли!');
            deadMoles.textContent = 0;
            lostShots.textContent = 0;
        }
        if (lostShots.textContent == 5) {
            alert ('Вы проиграли :(');
            deadMoles.textContent = 0;
            lostShots.textContent = 0;
        }
    };
}
