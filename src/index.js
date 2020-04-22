document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  // function submitValue(){
  
  // console.log(input)
  
  const submit = document.getElementById('create-task-form')
  
  submit.addEventListener('submit',function(event){
  //  console.log(submitBtn);
  event.preventDefault();
    
    const input = document.getElementById('new-task-description')
    
    const ul = document.getElementById('tasks');
    
    const li = document.createElement('li')
    
    li.innerText = input.value;
    
    // console.log(input.value)
    
    ul.append(li);

    submit.reset();
    
  })
  

  // console.log(submit.children[1].value)

})