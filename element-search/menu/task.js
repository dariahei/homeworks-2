let menuItem = document.getElementsByClassName('menu__item');
console.log(menuItem);

let menuLink = document.getElementsByClassName("menu__link");

let menuSub = Array.from(document.getElementsByClassName('menu_sub'));
console.log(menuSub);

for (let i = 0; i < menuItem.length; i++) {
    menuLink[i].onclick = function () {
        if (menuItem[i].querySelectorAll(".menu .menu_sub")) {
            menuItem[i].querySelectorAll(".menu .menu_sub")[0].classList.toggle('menu_active');
            // for (let item = 0; item < menuItem.length && item != i; item++){
            //     menuItem[item].querySelectorAll(".menu_active")[0].classList.remove('menu_active');
            // }
            // for (let item = menuItem.length - 1; item != i && item >= 0; item--){
            //     menuLink[item].querySelectorAll(".menu .menu_sub")[0].classList.remove('menu_active');
            // }

            return false;
        } 
       
         return true;
    }
}

for (let i = 0; i < menuSub.length; i++) {
    menuSub[i].onclick = function () {
        menuSub.forEach((item) => {
            while (item != menuSub[i]) {
                item.classList.remove('menu_active');
            }
        });
    }
}