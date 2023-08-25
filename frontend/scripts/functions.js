class Task {
    #title;
    #color;
    #resolved;
    constructor() {
        this.#title = "Default Title";
        this.#color = "rgb(255, 255, 130)";
        this.#resolved = false;
    }
    switchStatus() {
        this.#resolved = !this.#resolved;
    }
    setTitle(newTitle){
        console.log("title changed");
        this.#title = newTitle;
    }
    setColor(newColor){
        console.log("color changed");

        this.#color = newColor;
    }
}
tasksObjects = []
function myFunction() {
    document.getElementById("addButton").disabled = !document.getElementById("addButton").disabled
}
function newTask() {
    let taskName = document.getElementById("taskTitleInput").value;
    let tasks = document.getElementsByClassName("taskCard")

    if( 
    document.getElementById("taskTitleInput").value == ""
    ){
        alert("Title is mandatory")
    }
    if(tasks.length == 5){
        document.getElementById("addButton").disabled = true
    }
    if(tasks.length < 6){
        console.log("construction de l'objet");
        let newdTask = new Task()
        console.log("après construction de l'objet");
        //création d'un div pour contenir tout le contenu d'une carte "tâche"
        let taskElement = document.createElement('div')

        //création d'un élément affichant le titre de notre tâche
        let titleField = document.createElement("h3")
        titleField.setAttribute("class", "titleField")
        titleField.textContent = taskName

        //création d'un élément input pour modifier la couleur.
        let colorField = document.createElement('input')
        colorField.setAttribute('type', "text")
        colorField.setAttribute('class', "colorField")
        colorField.setAttribute('placeholder', "type a color to change")
        colorField.setAttribute('onchange', colorField.setAttribute("background-color", "orange"))

        //création d'un élément pour switcher le status de la tâche.
        let resolveButton = document.createElement("button")
        resolveButton.setAttribute("type", "button")
        // resolveButton.setAttribute("class", switchStatus())

        taskElement.appendChild(titleField)
        taskElement.appendChild(colorField)
        
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
    document.getElementById("addButton").disabled=false;

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
    if(selectedTasks.length!==0){
    document.getElementById("addButton").disabled=false;
    selectedTasks.forEach(task => task.remove())

    }
}