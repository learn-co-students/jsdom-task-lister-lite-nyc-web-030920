
  let ul = list.getElementsByTagName("ul")[0]
  console.log(ul)
  let field = document.getElementsByTagName('input')[0]
  console.log(field)

  let form = document.getElementById('create-task-form')
  console.log(form)


  document.addEventListener("DOMContentLoaded", () => {
    
    // console.log("dom running")
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      let input = field.value
      const li = document.createElement('li')
      li.innerText = input;
      ul.append(li);
      
      const erase = document.createElement('button')
      erase.innerText = "X"
      li.append(erase)
      erase.addEventListener('click', function (event) {
        event.preventDefault();
        li.remove();
      })
      field.value = ""
    })
  });
  
  


// form with user input
// As a user, I should be able to type a task into the input field.
// on click function for submit
// should appear on dom after button activated

// Event.preventDefault 
// stops the normal submit function from html 