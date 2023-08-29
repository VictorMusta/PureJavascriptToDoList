
class Task {
    #creationDate;
    #title;
    #color;
    #resolved;
    constructor(title, Date) {
        this.#title = title;
        this.#creationDate = Date;
        this.#color = "yellow";
        this.#resolved = false;
    }
    switchStatus() {
        console.log("status switched");

        this.#resolved = !this.#resolved;
    }
    setTitle(newTitle) {
        console.log("title changed");

        this.#title = newTitle;
    }
    setColor(newColor) {
        console.log("color changed");

        this.#color = newColor;
    }
    getCreationDate() {
        return this.#creationDate
    }
}
//déclaration des variables qui serviront plus tard à stocker nos tâches.
tasksObjects1 = []
console.log(tasksObjects1);

tasksObjects2 = []

function myFunction() {
    document.getElementById("addButton").disabled = !document.getElementById("addButton").disabled
}
function newTask() {
    if (tasksObjects1.length == 6) {
        alert("6 tasks is the limit!")
    }
    let taskTitle = document.getElementById("taskTitleInput").value
    if (
        taskTitle == ""
    ) {
        alert("Please enter a valid title in the text field.")
    }

    if (tasksObjects1.length < 6) {
        if (tasksObjects1.length == 5) {
            document.getElementById("addButton").disabled = true
        }
        let newTask = new Task(taskTitle, Date.now())
        tasksObjects1.push(newTask)
        //création d'un div pour contenir tout le contenu d'une carte "tâche"
        let taskElement = document.createElement('div')

        //création d'un élément affichant le titre de notre tâche
        let titleField = document.createElement("h3")
        titleField.setAttribute("class", "titleField")
        titleField.textContent = taskTitle

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
        taskElement.id = newTask.getCreationDate()
        taskElement.setAttribute('onclick', `setSelectedTask(newTask.getCreationDate())`)
        document.getElementById('taskListDiv1').appendChild(taskElement)
    }
    else {
        alert("6 tasks is the limit! Delete tasks or move them elsewhere.")
    }
}

function deleteAllTasks() {

    let tasks = document.querySelectorAll(".taskCard")
    document.getElementById("addButton").disabled = false;

    tasks.forEach(task => task.remove())
}

function setSelectedTask(idTask) {
    let selectedTask = document.getElementById(idTask)
    console.log(selectedTask.id)
    if (selectedTask.className.search("selectedTask") != -1) {
        selectedTask.className = "taskCard"
    }
    else {
        selectedTask.className += " selectedTask"
    }
}
function deleteSelectedTask() {
    let selectedTasks = document.querySelectorAll(".selectedTask")
    if (selectedTasks.length !== 0) {
        document.getElementById("addButton").disabled = false;
        selectedTasks.forEach(task => task.remove())

    }
}