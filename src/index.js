document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('input[type="submit"]').addEventListener("click", function(event){
      event.preventDefault();  
     const value = document.getElementById('new-task-description').value;
     const dateValue = document.getElementById('new-task-date').value;
     const priority = document.getElementById('priority').value;
     const tasks = document.getElementById('tasks');
     tasks.append(createListItem(value, dateValue, priority));
    })
});

function createListItem(value, dateValue, priority){
  const li = document.createElement('li');
  const content = document.createElement('span');
  content.setAttribute("class", priority);
  content.innerHTML = `${value} &nbsp; &nbsp; date: ${dateValue}`;
  li.append(content);
  addDeleteButton(li);
  return li;
}

function addDeleteButton(li){
  const button = document.createElement('span');
  button.setAttribute("class", "delete");
  button.innerText = "x";
  button.addEventListener("click", function(event){
    li.remove();
  });
  li.append(button);
}



fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
.then(res => {
  console.log(res);
  return res.json()
})
.then(data => {
  console.log(data);
})