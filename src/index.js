document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementsByTagName('input')[1]
  const div = document.getElementById('tasks')
  const input = document.getElementById('new-task-description')
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const newItem = document.createElement('li'); 
    newItem.innerHTML = `${input.value}`;
    div.appendChild(newItem);
    input.value = '';
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'x';
    newItem.appendChild(deleteBtn);
    const deleteBtns = document.querySelectorAll('button');
    deleteBtns.forEach(function(button) {
      button.addEventListener("click", function(event) {
      const parentLi = event.target.parentNode;
      parentLi.remove();
      })
    })
  })

});
