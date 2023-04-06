let popUpWindow = document.getElementById("modal_main");

popUpWindow.classList.add("modal_active");

let showSuccess = document.getElementsByClassName('show-success');

popUpWindow.onclick = function () {
    document.getElementById('modal_success').classList.add("modal_active");
}

showSuccess.onclick = function () {
    document.getElementById('modal_success').classList.add("modal_active");
    popUpWindow.classList.toggle("modal_active");
};

// let closeWindow = Array.from(document.getElementsByClassName('modal__close')) ;
let closeWindow = document.getElementsByClassName('modal__close');

for (let i = 0; i < 3; i++) {
    closeWindow[i].onclick = function () {
        popUpWindow.classList.remove("modal_active");
        document.getElementById('modal_success').classList.remove("modal_active");
    } 
} 





