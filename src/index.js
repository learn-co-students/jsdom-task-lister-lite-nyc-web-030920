document.addEventListener("DOMContentLoaded", () => {
//  gete the buttons from the DOM
  const subButton = document.getElementsByTagName("input")[1]
  const content = document.getElementsByTagName("input")[0]
  let list = document.getElementById("tasks")
 
// Add listener to stop from regular function
  subButton.addEventListener("click", function(e){
    e.preventDefault();

    const task = document.createElement("li")
    const delButton = document.createElement("button")

    delButton.innerText = "Delete!!"
    task.className = "task"
    task.innerText = content.value

    list.appendChild(task)
    task.appendChild(delButton)

    const dropDown = document.createElement("select")
    const opt1 = document.createElement("option")
    const opt2 = document.createElement("option")
    const opt3 = document.createElement("option")

    opt1.value = "1"
    opt2.value = "2"
    opt3.value = "3"

    opt1.innerText = "High"
    opt2.innerText = "Medium"
    opt3.innerText = "Low"

    task.appendChild(dropDown)
    dropDown.appendChild(opt1)
    dropDown.appendChild(opt2)
    dropDown.appendChild(opt3)
    

    dropDown.onchange = colorChange;
    
    // function sortList(){
    //   let list = document.getElementsByClassName("task")
    
    //   list.sort((a,b) => (a.children[1].value > b.children[1].value) ?1:-1)
    // }
    function sortList() {
      let list, i, switching, b, shouldSwitch; 
      list = document.getElementById("tasks");
      switching = true;
      while(switching) {
        switching = false;
        b = list.getElementsByTagName("li")
        for (i=0; i < (b.length -1); i++) {
          shouldSwitch = false;
          if (b[i].children[1].value > b[i + 1].children[1].value) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch){
          b[i].parentNode.insertBefore(b[i+1], b[i]);
          switching = true;
        }
      }
    }

    function colorChange(e){
      if (e.target.value === "1"){
        e.target.parentNode.style.color = "red"
      }
      else if (e.target.value === "2"){
        e.target.parentNode.style.color = "yellow"
      }else if (e.target.value === "3"){
        e.target.parentNode.style.color = "green"
      }

      sortList()
    }






    delButton.addEventListener("click", function(e){
      e.target.parentNode.remove()
    })

    


  });

});
