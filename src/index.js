

let ul = list.getElementsByTagName("ul")[0]
console.log(ul)
let field = document.getElementsByTagName('input')[0]
let form = document.getElementById('create-task-form')
console.log('letting and setting')

document.addEventListener("DOMContentLoaded", () => {
  // console.log("dom running")
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let input = field.value
    let li = document.createElement('li')
    let span = document.createElement('span')
    ul.append(li);
    li.append(span)
    span.innerText = input;
    field.value = ""

    deleteButton(li)
    editButton(li, span)

  });

})


  function editButton (li, span) {
    const editButton = document.createElement('button')
    editButton.innerText = "edit"
    li.append(editButton)

    editButton.addEventListener("click", function(event){
      event.preventDefault();
      // let thisTask = event.target
      // console.log(thisTask)
      let userInput = prompt("What do you want to change this to?")
      span.innerText = userInput
    });
  }

  function deleteButton (li) {
    const erase = document.createElement('button')
    erase.innerText = "X"
    li.append(erase)
    erase.addEventListener('click', function (event) {
      event.preventDefault();
      li.remove();
    })
  }



// form with user input
// As a user, I should be able to type a task into the input field.
// on click function for submit
// should appear on dom after button activated

// Event.preventDefault 
// stops the normal submit function from html 