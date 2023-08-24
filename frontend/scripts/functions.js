selectedTask = ""

function myFunction() {
    document.getElementById("addButton").disabled = !document.getElementById("addButton").disabled
}
function newTask() {
    let tasks = document.getElementsByClassName("taskCard")
    if(tasks.length < 6){
        let taskElement = document.createElement('div')
        taskElement.className = "taskCard"
        taskElement.id = "taskCard" + tasks.length
        taskElement.setAttribute('onclick', `setSelectedTask(this.id)`)
        document.getElementById('taskListDiv1').appendChild(taskElement)
    }
    else{
        alert("6 tasks is the limit! Delete tasks or move them elsewhere.")
    }
}

function deleteAllTasks() {
    let tasks = document.querySelectorAll(".taskCard")
    tasks.forEach(task => task.remove())
}

function setSelectedTask(idTask) {
    let selectedTask = document.getElementById(idTask)
    if(selectedTask.className.search("selectedTask") != -1) {
        selectedTask.className="taskCard"
    }
    else {
        selectedTask.className+=" selectedTask"
    }
}
function deleteSelectedTask() {
    
    let selectedTasks = document.querySelectorAll(".selectedTask")
    selectedTasks.forEach(task => task.remove())
    task.remove()
}