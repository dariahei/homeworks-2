const input = document.getElementById('task__input');
const addTaskBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');


const newToDo = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13 || event.type == "click") {
        event.preventDefault();
        if (input.value.length > 1) {

           let newTask = document.createElement('div');
           newTask.classList.add("task");
           let taskTitle = document.createElement('div');
           taskTitle.classList.add("task__title");
           taskTitle.textContent = input.value;
           
           let taskX = document.createElement('a');
           taskX.href = '#';
           taskX.classList.add("task__remove");
           taskX.innerHTML = '&times;';
            
           const taskRemover =  (event) => {
            event.preventDefault();
            let container = event.target.closest('div');
            container.remove();
        };

            taskX.addEventListener('click', taskRemover);

           newTask.prepend(taskTitle, taskX);

           taskList.prepend(newTask);

            input.value = '';
        }
    }
};

input.addEventListener('keydown', newToDo);
addTaskBtn.addEventListener('click', newToDo);
