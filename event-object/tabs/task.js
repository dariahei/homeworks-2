let tab = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

const tabActive = (event) => {
    console.log(event.target);
    tab.forEach(item => {
        item.classList.remove('tab_active');
    })
    tabContent.forEach(item => {
        item.classList.remove('tab__content_active');
    })
    event.target.classList.add('tab_active');
    tab.forEach((item, index) => {
       if (item.classList.contains('tab_active'))
       tabContent[index].classList.add('tab__content_active');
    })  
};

tab.forEach(item => {
    item.addEventListener('click', tabActive);
})

// for (let i = 0; i < tab.length; i++) {
//     tab[i].onclick = function () {
//         tab[i].classList.add('tab_active');
//         tabContent[i].classList.add('tab__content_active');
//     }
// }