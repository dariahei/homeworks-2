const hasTips = document.querySelectorAll('.has-tooltip');

const showTip = function (event)  {
    event.preventDefault();
    const tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.textContent = this.title;
    tip.dataset.position = 'top';

    const tips = document.querySelectorAll('.tooltip_active');

    if (tips.length) {
        tips.forEach(item => {
            item.classList.remove('tooltip_active');
        });
    }

    if (!this.firstElementChild){
        this.append(tip);
        this.firstElementChild.classList.toggle('tooltip_active');
        tip.style = `left: ${Number(event.x)}px; top: ${Number(event.y)}px`;
    }
    
    else if (this.firstElementChild){
        this.firstElementChild.remove();
        this.append(tip);
        this.firstElementChild.classList.toggle('tooltip_active');
        tip.style = `left: ${Number(event.x)}px; top: ${Number(event.y)}px`;
    }

    // setInterval(() => {
    //     this.firstElementChild.classList.remove('tooltip_active');
    // }, 1500);
};

hasTips.forEach(item => {
    item.addEventListener('click', showTip);
})