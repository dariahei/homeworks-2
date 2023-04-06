let menuItem = document.getElementsByClassName('menu__item');
console.log(menuItem);

let menuLink = document.getElementsByClassName("menu__link");
console.log(menuLink);


for (let i = 0; i < menuItem.length; i++) {
    menuLink[i].onclick = function () {
        if (menuItem[i].querySelectorAll(".menu .menu_sub")) {
            menuItem[i].querySelectorAll(".menu .menu_sub")[0].classList.toggle('menu_active');
            return false;
        } 
         return true;
    }
}

