
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
let taskListOfObject1 = new Array()
console.log(taskListOfObject1);

let taskListOfObject2 = new Array()

function myFunction() {
    document.getElementById("addButton").disabled = !document.getElementById("addButton").disabled
}
function newTask() {
    if (taskListOfObject1.length == 6) {
        alert("6 tasks is the limit!")
        return
    }
    let taskTitle = document.getElementById("taskTitleInput").value
    if (
        taskTitle === ""
    ) {
        alert("Please enter a valid title in the text field.")
        return
    }
    document.getElementById("taskTitleInput").value = ""

    if (taskListOfObject1.length < 6) {
        if (taskListOfObject1.length == 5) {
            document.getElementById("addButton").disabled = true
        }
        let myTask = new Task(taskTitle, Date.now())
        taskListOfObject1.push(myTask)
        //création d'un div pour contenir tout le contenu d'une carte "tâche"
        let taskElement = document.createElement('div')
        taskElement.className = "taskCard"
        taskElement.id = myTask.getCreationDate()
        taskElement.setAttribute('onclick', `setSelectedTask(${myTask.getCreationDate()})`)

        //création d'un élément affichant le titre de notre tâche
        let titleField = document.createElement("h3")
        titleField.setAttribute("class", "titleField")
        titleField.textContent = taskTitle

        //création d'un élément input pour modifier la couleur.
        let colorField = document.createElement('input')
        colorField.setAttribute('type', "text")
        colorField.setAttribute('class', "colorField")
        colorField.setAttribute('placeholder', "type a color to change")
        colorField.setAttribute('oninput',"this.parentElement.setAttribute('style', `background-color: ${this.value}`)"
        // console.log(this.parentElement.id)"
        // // "taskElement.setAttribute('style', `background-color: ${colorField.textContent}`)"

        )

        //création d'un élément pour switcher le status de la tâche.
        let resolveButton = document.createElement("button")
        resolveButton.setAttribute("type", "button")
        // resolveButton.setAttribute("class", switchStatus())

        taskElement.appendChild(titleField)
        taskElement.appendChild(colorField)

       
        document.getElementById('taskListDiv1').appendChild(taskElement)
        document.getElementById('taskListDiv1').appendChild(taskElement)

    }
    else {
        alert("6 tasks is the limit! Delete tasks or move them elsewhere.")
    }
}

function deleteAllTasks() {

    let tasks = document.querySelectorAll(".taskCard")
    document.getElementById("addButton").disabled = false;
    taskListOfObject1 = []
    taskListOfObject2 = []
    tasks.forEach(task => task.remove())
}

function setSelectedTask(idTask) {
    let selectedTask = document.getElementById(idTask)
    if (selectedTask.className.search("selectedTask") != -1) {
        selectedTask.className = "taskCard"
    }
    else {
        selectedTask.className += " selectedTask"
    }
}

function deleteSelectedTask() {
    let selectedTasksElements = document.querySelectorAll(".selectedTask")
    if (selectedTasksElements.length !== 0) {
        document.getElementById("addButton").disabled = false;
        selectedTasksElements.forEach(selectedTask => {
            let objectToDelete = taskListOfObject1.find((myObject) => myObject.getCreationDate() == selectedTask.id)
            taskListOfObject1 = taskListOfObject1.filter( (i) => {return i !== objectToDelete}
            )
            selectedTask.remove()
        })
    }
}

function moveSelectedTask(shouldErase){
    let selectedTasksElements = document.querySelectorAll(".selectedTask")
    if (selectedTasksElements.length !== 0) {
        document.getElementById("addButton").disabled = false;
        selectedTasksElements.forEach(selectedTaskElement => {
            if(selectedTaskElement.parentElement.id === "taskListDiv2"){
                let taskObjectToMove = taskListOfObject2.find((myObject) => myObject.getCreationDate() == selectedTaskElement.id)
                taskListOfObject1.push(taskObjectToMove)
                document.getElementById('taskListDiv1').appendChild(selectedTaskElement)
                if(shouldErase === true){
                    taskListOfObject2 = taskListOfObject2.filter( (i) => {return i !== taskObjectToMove})
                }
            }
            else{
                let taskObjectToMove = taskListOfObject1.find((myObject) => myObject.getCreationDate() == selectedTaskElement.id)
                taskListOfObject2.push(taskObjectToMove)
                document.getElementById('taskListDiv2').appendChild(selectedTaskElement)
                if(shouldErase === true){
                    taskListOfObject1 = taskListOfObject1.filter( (i) => {return i !== taskObjectToMove})
                }
            }
        })
    }
}
