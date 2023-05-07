let fontSize = document.querySelectorAll('.font-size');

const changeFont = (event) => {
    event.preventDefault();
    fontSize.forEach(item => {
        item.classList.remove('font-size_active');
    });
    event.target.classList.add('font-size_active');
    if (event.target.classList.contains('font-size_small')){
        event.target.closest('.book').classList.add('book_fs-small');
        event.target.closest('.book').classList.remove('book_fs-big');
    } else if (event.target.classList.contains('font-size_big')) {
        event.target.closest('.book').classList.remove('book_fs-small');
        event.target.closest('.book').classList.add('book_fs-big');
    } else {
        event.target.closest('.book').classList.remove('book_fs-small');
        event.target.closest('.book').classList.remove('book_fs-big');
    }
};

fontSize.forEach(item => {
    item.addEventListener('click', changeFont)
})

let textColor = Array.from(document.querySelector('.book__control_color').children);

const changeTextColor = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('color')) {
        textColor.forEach(item => {
            item.classList.remove('color_active')
        })
        event.target.classList.add('color_active');
        if (event.target.classList.contains('text_color_black')) {
            event.target.closest('.book').classList.remove('book_color-gray');
            event.target.closest('.book').classList.remove('book_color-whitesmoke');
        }
        else if (event.target.classList.contains('text_color_gray')) {
            event.target.closest('.book').classList.add('book_color-gray');
            event.target.closest('.book').classList.remove('book_color-whitesmoke');
        }
        else if (event.target.classList.contains('text_color_whitesmoke')) {
            event.target.closest('.book').classList.remove('book_color-gray');
            event.target.closest('.book').classList.add('book_color-whitesmoke');
        }
    }  
}

textColor.forEach(item => {
    item.addEventListener('click', changeTextColor)
})

let bgColor = Array.from(document.querySelector('.book__control_background').children);

const changeBgColor = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('color')) {
        bgColor.forEach(item => {
            item.classList.remove('color_active')
        })
        event.target.classList.add('color_active');
        if (event.target.classList.contains('bg_color_black')) {
            event.target.closest('.book').classList.remove('book_bg-gray');
            event.target.closest('.book').classList.add('book_bg-black');
        }
        else if (event.target.classList.contains('bg_color_gray')) {
            event.target.closest('.book').classList.add('book_bg-gray');
            event.target.closest('.book').classList.remove('book_bg-black');
        }
        else if (event.target.classList.contains('bg_color_white')) {
            event.target.closest('.book').classList.remove('book_bg-gray');
            event.target.closest('.book').classList.remove('book_bg-black');
        }
    }  
}

bgColor.forEach(item => {
    item.addEventListener('click', changeBgColor)
})