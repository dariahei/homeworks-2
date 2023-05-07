const rotatorCase = document.querySelectorAll('.rotator__case');
console.log(rotatorCase);

let activePhrase = document.querySelector('.rotator__case_active');


function changeVisible () {
    let activePhrase = document.querySelector('.rotator__case_active');
    console.log(activePhrase);
    console.log(activePhrase.nextElementSibling);
    if (!activePhrase.nextElementSibling) {
        activePhrase.classList.remove('rotator__case_active');
        rotatorCase[0].classList.add('rotator__case_active');
        rotatorCase[0].style.color = rotatorCase[0].dataset.color
    } else {
        activePhrase.style.color = activePhrase.dataset.color
        activePhrase.classList.remove('rotator__case_active');
        activePhrase.nextElementSibling.classList.add('rotator__case_active');
        activePhrase.nextElementSibling.style.color = activePhrase.nextElementSibling.dataset.color
    }
}

setInterval(changeVisible, 1000);