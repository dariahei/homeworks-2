const editor = document.getElementById('editor');


editor.addEventListener('keypress', (event) => {
    console.log(event);
    localStorage.setItem('textArea', editor.value);
})

editor.textContent = localStorage.getItem('textArea');

editor.insertAdjacentHTML('afterend', `
    <button>Очистить поле</button>
`)

const clearBtn = document.querySelector('button');

clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('textArea');
})