document.addEventListener("DOMContentLoaded", () =>
{
  newTaskForm = document.getElementById("create-task-form")

  newTaskForm.addEventListener("submit", (event) => 
  {
    event.preventDefault()

    const newTaskDescription = document.getElementById("new-task-description")
    const newTask = newTaskDescription.value
    
    const ListedTasks = document.getElementById("tasks")
    const newListNode = document.createElement("li")
    newListNode.textContent = newTask + " "
    ListedTasks.appendChild(newListNode)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.setAttribute("data-description", newTask)
    newListNode.appendChild(deleteButton)

    newTaskForm.reset()

    deleteButton.addEventListener("click", (event) => 
    {
      const deleteItem = event.target.parentNode
      deleteItem.remove()
    })
  })
});
