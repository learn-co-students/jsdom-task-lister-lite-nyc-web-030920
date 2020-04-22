document.addEventListener("DOMContentLoaded", () => {
  // add new task from text field on button press
  let deleteBtns

  const submitBtn = document.getElementsByTagName('input')[1]
  console.log(submitBtn)
  const div = document.getElementById('tasks')
  console.log(div)
  const input = document.getElementById('new-task-description')
  console.log(input)
  
  
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault()

    const newItem = document.createElement('li')  
    newItem.innerHTML = `<li>${input.value}`
    div.appendChild(newItem)
    input.value = ''

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete')
    newItem.appendChild(deleteBtn)

    deleteBtns = document.querySelectorAll('button')
    console.log(deleteBtns)

  } )

  // let deleteBtns = document.querySelectorAll('button')
  console.log(`this is a delete button ${deleteBtns}`)

  deleteBtns.forEach(function(button) {
    button.addEventListener("click", function(event) {
      // event.preventDefault()
      const parentLi = event.target.parentNode
      parentLi.remove()
  
    })

  })



//   function getInputValue(){
//     // Selecting the input element and get its value 
//     let inputVal = document.getElementById("myInput").value;
    
//     // Displaying the value
//     alert(inputVal);
// }
  
});


// const movieList = document.querySelector("ul")

// const bob = document.createElement("li")
// bob.className = "movie"

// bob.innerHTML = `
//   <h3>What About Bob?</h3>
//   <img alt=""
//       src="https://www.movieartarena.com/imgs/wab.jpg" />
//   <h4>Year: </h4>
//   <p>1991</p>
//   <h4>Score: <span>0</span> </h4>
//   <button class="up-vote">Up Vote</button>
//   <button>Down Vote</button>
//   <button class="delete">&times;</button>
// `

// movieList.append(bob)
