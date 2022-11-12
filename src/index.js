import _ from 'lodash';
import './style.css';

const tasksList = document.querySelector('.tasks-list');
const tasks = [
  {
    description: 'Learn Javascript',
    completed: false,
    index: 1,
  },
  {
    description: 'Go Play',
    completed: false,
    index: 2,
  },
  {
    description: 'Run Marathon',
    completed: false,
    index: 3,
  },
];

function populateTasksSection(tasks) {
  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.classList.add('list-item');
    item.innerHTML = `<button><i class="fa-regular fa-square"></i></button>
        <span>${task.description}</span>
        <i class="fa-solid fa-ellipsis-vertical"></i>`;
    tasksList.append(item);
  });
}

populateTasksSection(tasks);