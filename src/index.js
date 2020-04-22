let ul = list.getElementsByTagName("ul")[0]
let field = document.getElementsByTagName('input')[0]
let form = document.getElementById('create-task-form')

document.addEventListener("DOMContentLoaded", () => {

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
