// let title=document.getElementById('title');
// let radiobug=document.getElementById('bug');
// let radiof=document.getElementById('feature');
// let priority=document.getElementById('selPriority');
// let status=document.getElementById('selStatus');
// let date=document.getElementById('date');
// let description=document.getElementById('description');
// let submit=document.getElementById('submit');

let tasks=[]



function check(){

    let title=document.getElementById('title');
    let type=document.getElementById('feature');
    let priority=document.getElementById('selPriority');
    let status=document.getElementById('selStatus');
    let date=document.getElementById('date');
    let description=document.getElementById('description');
    let submit=document.getElementById('submit');
    var radiov;
    if(radiobug.checked)
    {
        radiov=radiobug.value;
    }
    else 
    {
        radiov=radiof.value;
    }
    
    let task = {
        titl: title.value,
        type : radiov,
        priority : priority.value,
        status : status.value,
        date : date.value,
        description : description.value,
    }
    tasks.push(task)
    document.getElementById("myForm").reset();
    console.log(tasks);     
}

 function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}