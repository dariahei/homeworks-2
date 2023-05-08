const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

const inputWindow = document.getElementById('chat-widget__input');
const message = document.getElementById('chat-widget__messages');

let currentTime = new Date();

const chatAnswers = [
    'Добрый день!',
    'Хорошего настроения!',
    'Мы скоро решим ваш вопрос',
    'Да что вы говорите, а он что?',
    'Чем ещё могу помочь?',
    'Никакого покоя',
    'Хватит уже нам писать',
    'Так надо',
    'Этот процесс сложился исторически',
]

let randomIndex = () => {
   let i = (Math.random()*10).toFixed();
   if (i >= chatAnswers.length) {
    i = i % chatAnswers.length;
   }
   return i;
} 

const chatWindow = document.querySelector('.chat-widget__messages-container');

let sendMessage = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13){
        if (inputWindow.value.length > 1) {
            message.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${currentTime.toString().substr(16,5)}</div>
                <div class="message__text">${inputWindow.value}</div>
            </div>
            `
            inputWindow.value = '';
            message.innerHTML += `
            <div class="message">
                <div class="message__time">${currentTime.toString().substr(16,5)}</div>
                <div class="message__text">${chatAnswers[randomIndex()]}</div>
            </div>
            `
            message.scrollIntoView(false);
        }
    }
}

inputWindow.addEventListener('keydown', sendMessage)