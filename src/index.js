document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('create-task-form')
    form.addEventListener('submit', function(event) {
      event.preventDefault()
      const taskInput = document.getElementById("new-task-description").value
      const list = document.getElementById('tasks')
      let listItem = document.createElement('li')
      listItem.innerText = taskInput
      list.append(listItem.innerText)
    });
  });

