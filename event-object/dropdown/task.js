// let dropdownList = document.getElementsByClassName('dropdown__list');
let dropdown = document.querySelectorAll('.dropdown');
let dropdownList = document.querySelectorAll('.dropdown__list');
let dropdownValue = document.querySelectorAll('.dropdown__value');
let dropdownItem = document.querySelectorAll('.dropdown__item');

const activeList = (event) => {
    console.log(event);
    console.log(event.currentTurget);

    event.target.nextElementSibling.classList.toggle('dropdown__list_active');
    
}

dropdown.forEach (item =>  {
    item.addEventListener('click', activeList);
})

// for (let i = 0; i < dropdown.length; i++) {
//     dropdown[i].onclick = () => {
//         dropdownList[i].classList.toggle('dropdown__list_active');
//     }
// }

const newValue = (event) => {
    console.log(event.target.textContent);
    console.log(event.target.parentNode.parentNode);
    event.target.parentNode.parentNode.previousElementSibling.textContent = event.target.textContent;
    event.target.parentNode.parentNode.classList.toggle('dropdown__list_active');
    event.preventDefault();
}

dropdownItem.forEach (item => {
    item.addEventListener('click', newValue);
})


