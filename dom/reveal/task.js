let reveal = document.querySelectorAll('.reveal');
console.log(reveal);

reveal.forEach(item => {
    item.getBoundingClientRect();
    console.log(item.getBoundingClientRect());
    const viewportHeight = window.innerHeight;
    

    function isVisible (el) {
        const {top, bottom} = el.getBoundingClientRect();

        if (top > 0 && bottom < viewportHeight) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
             }
    }

    setInterval(() => {
        isVisible(item);
    }
    ,1000);
})