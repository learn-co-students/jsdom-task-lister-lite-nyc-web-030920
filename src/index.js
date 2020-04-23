document.addEventListener("DOMContentLoaded", () => {
  // add new task from text field on button press

  const submitBtn = document.getElementsByTagName('input')[1]
  const div = document.getElementById('tasks')
  const input = document.getElementById('new-task-description')
  
  
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault()

    // create new list item to put task into
    const newItem = document.createElement('li')  
    newItem.innerHTML = input.value
    div.appendChild(newItem)
    // reset text input field to blank
    input.value = '' 

    // create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = 'x'
    newItem.appendChild(deleteBtn)

    // get newly created delete button and add listener's to it/them
    deleteBtns = document.querySelectorAll('button')

      deleteBtns.forEach(function(eachButton) {
        eachButton.addEventListener("click", function(buttonClick) {
          const parentLi = buttonClick.target.parentNode
          parentLi.remove()
      
        })
    
      })
  } )

  
});

  
