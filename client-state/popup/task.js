const subscrWind = document.getElementById('subscribe-modal');

if (window.sessionStorage.length == 0) {
    setTimeout(function () {
        subscrWind.classList.add('modal_active');
    }, 3000);
    
    const subscrClose = document.querySelector('.modal__close');
    
    subscrClose.addEventListener('click', () => {
        subscrWind.classList.remove('modal_active');
        window.sessionStorage.setItem('sbscr', true);
        // document.cookie = 'sbscr=true';
        // console.log(`cookie ${document.cookie}`);
    })
}



