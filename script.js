


document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.className = 'task-item';
  
    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
      li.remove();
    });
  
    li.appendChild(span);
    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
  
    input.value = '';
  });