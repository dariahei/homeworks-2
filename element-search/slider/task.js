let sliderArrows = document.getElementsByClassName("slider__arrow");
console.log(sliderArrows);
let sliderItems = Array.from(document.getElementsByClassName("slider__item"));
console.log(sliderItems);

// sliderArrows[0].onclick = function () {
//     for (let i = 1; i < sliderItems.length && i > 0; i++) {
//         if (sliderItems[0].classList.contains('slider__item_active')) {
//             sliderItems[0].classList.remove('slider__item_active');
//             sliderItems[sliderItems.length-1].classList.add('slider__item_active');
//           }
//          else if (sliderItems[i].classList.contains('slider__item_active')) {
//             sliderItems[i].classList.toggle('slider__item_active');
//             sliderItems[i - 1].classList.toggle('slider__item_active');
//         }  
//     }
// };

sliderArrows[0].onclick = function () {
    
    if (sliderItems[0].classList.contains('slider__item_active')) {
        sliderItems[0].classList.remove('slider__item_active');
        sliderItems[sliderItems.length-1].classList.add('slider__item_active');
    } else {
        for (let i = 1; i < sliderItems.length && i > 0; i++) {
            if (sliderItems[i].classList.contains('slider__item_active')) {
                sliderItems[i].classList.toggle('slider__item_active');
                sliderItems[i - 1].classList.toggle('slider__item_active');
            }  
        }
    }
};

sliderArrows[1].onclick = function () {
    for (let i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains('slider__item_active')) {
            sliderItems[i].classList.toggle('slider__item_active');
            sliderItems[i += 1].classList.toggle('slider__item_active');
        } else if (sliderItems[sliderItems.length-1].classList.contains('slider__item_active') ) {
          sliderItems[i].classList.remove('slider__item_active');
          sliderItems[0].classList.add('slider__item_active');
        }
    }
};

// sliderArrows[1].onclick = function () {
//     sliderItems.forEach((item, index) => {
//         if (item.classList.contains('slider__item_active'))
//         item.classList.remove('slider__item_active');
//         item[index +1].classList.toggle('slider__item_active');
//         if (i == sliderItems.length - 1) {
//           item.classList.remove('slider__item_active');
//           item[0].classList.add('slider__item_active');
//         }
//     }
//     )
// };