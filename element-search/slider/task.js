let sliderArrows = document.getElementsByClassName("slider__arrow");
console.log(sliderArrows);
let sliderItems = Array.from(document.getElementsByClassName("slider__item"));
console.log(sliderItems);
let sliderDots = Array.from(document.getElementsByClassName("slider__dot"));
console.log(sliderDots);
sliderDots[0].classList.add('slider__dot_active');

sliderArrows[0].onclick = function () {
    
    if (sliderItems[0].classList.contains('slider__item_active')) {
        sliderItems[0].classList.toggle('slider__item_active');
        sliderDots[0].classList.toggle('slider__dot_active');
        sliderItems[sliderItems.length-1].classList.toggle('slider__item_active');
        sliderDots[sliderDots.length-1].classList.toggle('slider__dot_active');
    } else {
        for (let i = 1; i < sliderItems.length && i > 0; i++) {
            if (sliderItems[i].classList.contains('slider__item_active')) {
                sliderItems[i].classList.toggle('slider__item_active');
                sliderDots[i].classList.toggle('slider__dot_active');
                sliderItems[i - 1].classList.toggle('slider__item_active');
                sliderDots[i - 1].classList.toggle('slider__dot_active');
            }  
        }
    }
};

sliderArrows[1].onclick = function () {

    if (sliderItems[sliderItems.length-1].classList.contains('slider__item_active')) {
        sliderItems[sliderItems.length-1].classList.toggle('slider__item_active');
        sliderDots[sliderDots.length-1].classList.toggle('slider__dot_active');
        sliderItems[0].classList.toggle('slider__item_active');
        sliderDots[0].classList.toggle('slider__dot_active');
      } else {
        for (let i = 0; i < sliderItems.length - 1; i++) {
            if (sliderItems[i].classList.contains('slider__item_active')) {
                sliderItems[i].classList.toggle('slider__item_active');
                sliderDots[i].classList.toggle('slider__dot_active');
                sliderItems[i += 1].classList.toggle('slider__item_active');
                sliderDots[i].classList.toggle('slider__dot_active');
          } 
        }
      }
};

for (let i = 0; i < sliderDots.length; i++)  {
    sliderDots[i].onclick = function () {
        sliderItems[i].classList.add('slider__item_active');
        sliderDots[i].classList.add('slider__dot_active');
        for (let item = 0; item < sliderDots.length && item !== i; item++){
            console.log(item);
            sliderItems[item].classList.remove('slider__item_active');
            sliderDots[item].classList.remove('slider__dot_active');
        }
        for (let item = sliderDots.length - 1; item !== i && item >= 0; item--){
            sliderItems[item].classList.remove('slider__item_active');
            sliderDots[item].classList.remove('slider__dot_active');
        }
    }
}

// работает, номашет головой
// sliderArrows[1].onclick = function () {
//     for (let i = 0; i < sliderItems.length; i++) {
//         if (sliderItems[i].classList.contains('slider__item_active')) {
//             sliderItems[i].classList.toggle('slider__item_active');
//             sliderItems[i += 1].classList.toggle('slider__item_active');
//         } else if (sliderItems[sliderItems.length-1].classList.contains('slider__item_active') ) {
//           sliderItems[i].classList.remove('slider__item_active');
//           sliderItems[0].classList.add('slider__item_active');
//         }
//     }
// };