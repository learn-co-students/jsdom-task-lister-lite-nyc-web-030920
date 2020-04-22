document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form')
  const list = document.querySelector('#tasks')

  //listens for submit of form
  taskForm.addEventListener('submit', function(event){
    event.preventDefault()
    addTasks()
  });

  //adds a new task to the DOM
  const addTasks = () => {
    const li = document.createElement('li')
    const newTask = document.querySelector('#new-task-description').value
    li.textContent = newTask

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete'
    deleteButton.textContent = 'Not Today!'

    const taskPriority = taskForm.querySelector('select').value
      if (taskPriority === 'low') {
         li.style.color = '#59b18c'
      }
      if (taskPriority === 'high') {
         li.style.color = '#ce2727'
      }
    
    list.append(li)
    li.append(deleteButton)
    taskForm.reset()
  };

  //adds delete task functionality
  list.addEventListener('click', function(event){
    const button = event.target
    if (button.className === 'delete'){
      button.parentElement.remove()
    }
  })

// end of DOMContentLoaded
});
