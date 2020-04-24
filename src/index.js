document.addEventListener('DOMContentLoaded',function(){
  const input = document.getElementById('new-task-description')

  const submitBtn = document.getElementById('create-task-form')

  submitBtn.addEventListener('submit',function(e){
    e.preventDefault()
    
    const textEntered = input.value

    const ul = document.getElementById('tasks')

    let li = document.createElement('li');
    
    li.innerText = textEntered

    ul.appendChild(li);



  })
  
})