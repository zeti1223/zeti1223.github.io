const input = document.querySelector('input');
const btn = document.querySelector('button');
const taskList = document.querySelector('#task-list');

btn.addEventListener('click', () => {
  const newTask = document.createElement('li');
  const taskName = document.createTextNode(input.value);
  newTask.appendChild(taskName);
  
  const deleteBtn = document.createElement('span');
  const deleteText = document.createTextNode('Done');
  deleteBtn.className = 'delete';
  deleteBtn.appendChild(deleteText);
  newTask.appendChild(deleteBtn);

  taskList.appendChild(newTask);

  input.value = '';
});

taskList.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    const parentTask = e.target.parentElement;
    taskList.removeChild(parentTask);
  }
});
