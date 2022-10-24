
let title=document.querySelector('#title');
let type=document.getElementById('bug');
let typef=document.getElementById('feature');
let priority=document.getElementById('selPriority');
let statuse=document.getElementById('selStatus');
let date=document.getElementById('date');
let description=document.getElementById('description');
let title1=document.querySelector('#title1');
let type1=document.getElementById('bug1');
let typef1=document.getElementById('feature1');
let priority1=document.getElementById('selPriority1');
let statuse1=document.getElementById('selStatus1');
let date1=document.getElementById('date1');
let description1=document.getElementById('description1');
let todo = document.getElementById('to-do-tasks');
let inpro = document.getElementById('in-progress-tasks');
let doneses = document.getElementById('done-tasks');
let mfooter = document.getElementById("modal-footer");
document.querySelector('.submit').addEventListener('click',(e)=>{
    e.preventDefault()
    add();
    display();
})     


function add(){
    var checkede;
    if(type.checked){
        checkede = "Bug";
    }
    else{
        checkede = "Feature";
    }
    let task = {
        title: title.value,
        type : checkede,
        priority : priority.value,
        status : statuse.value,
        date : date.value,
        description : description.value,
    }
    tasks.push(task)
    document.getElementById("myForm").reset();
}

function display(){
    todo.innerHTML =' ';
    inpro.innerHTML =' ';
    doneses.innerHTML ="";
    let todocount=0;
    let inprocount=0;
    let donecount=0;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].status=="To Do"){
            todo.innerHTML+=`
            <button class="bg-transparent w-100 border-0 border-bottom d-flex text-start pb-3" onclick="moddisp(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <div class="col-1 fs-3 text-red me-10px">
                <i class="fa-regular fa-circle-question"></i> 
            </div>
            <div class="col-11">
                <div class="fs-4">${tasks[i].title}</div>
                <div class="">
                    <div class="text-gray"># ${i+1} created in ${tasks[i].date}</div>
                    <div class="fs-5 mb-10px" title="${tasks[i].description}">${tasks[i].description.slice(0,150)}...</div>
                </div>
                <div class="d-flex justify-content-between ">
                    <div><span class="bg-blue-600 text-white  fs-5 rounded-2 px-15px py-5px ">${tasks[i].priority}</span>
                    <span class="bg-gray-300 text-black m-2 fs-5 rounded-2 px-15px py-5px">${tasks[i].type}</span></div>
                </div>
            </div>
        </button>
        `
        todocount+=1;
        }
        if(tasks[i].status=="In Progress"){
            inpro.innerHTML+=`
            <button class="bg-transparent w-100 border-0 border-bottom d-flex text-start pb-3" onclick="moddisp(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <div class="col-1 fs-3 text-warning me-10px">
                <i class="fas fa-circle-notch fa-spin"></i> 
            </div>
            <div class="col-11">
                <div class="fs-4">${tasks[i].title}</div>
                <div class="">
                    <div class="text-gray"># ${i+1} created in ${tasks[i].date}</div>
                    <div class="fs-5 mb-10px" title="${tasks[i].description}">${tasks[i].description.slice(0,150)}...</div>
                </div>
                <div class="d-flex">
                    <div><span class="bg-blue-600 text-white  fs-5 rounded-2 px-15px py-5px ">${tasks[i].priority}</span>
                    <span class="bg-gray-300 text-black m-2 fs-5 rounded-2 px-15px py-5px">${tasks[i].type}</span></div>
                </div>
            </div>
            </button>
        `
        inprocount+=1;
        }
        if(tasks[i].status=="Done") {
            doneses.innerHTML+=`
            <button class="bg-transparent w-100 border-0 border-bottom d-flex text-start pb-3" data-bs-toggle="modal" data-bs-target="#exampleModal1" onclick="moddisp(${i})">
            <div class="col-1 fs-3 text-green-200 me-10px">
                <i class="fas fa-check"></i> 
            </div>
            <div class="col-11">
                <div class="fs-4">${tasks[i].title}</div>
                    <div class="text-gray"># ${i+1} created in ${tasks[i].date}</div>
                    <div class="d-flex">
                        <div class="fs-5 mb-10px z-3" title="${tasks[i].description}">${tasks[i].description.slice(0,150)}</div>
                    </div>
                <div class="d-flex justify-content-between">
                    <div><span class="bg-blue-600 text-white  fs-5 rounded-2 px-15px py-5px ">${tasks[i].priority}</span>
                    <span class="bg-gray-300 text-black m-2 fs-5 rounded-2 px-15px py-5px">${tasks[i].type}</span></div>
                </div>
            </div>
            </button>
        `
        donecount+=1
        }
        }
    document.getElementById("to-do-tasks-count").innerText = todocount;
    document.getElementById("in-progress-tasks-count").innerText = inprocount;
    document.getElementById("done-tasks-count").innerText = donecount;
    }

document.getElementById("body").onload =function(){
    display();
}
function moddisp(in1){
    if(tasks[in1].type== "Bug"){
        type1.checked = true;
    }
    else{
        typef1.checked = true;

    }
    title1.value=tasks[in1].title
    priority1.value=tasks[in1].priority
    statuse1.value=tasks[in1].status
    date1.value=tasks[in1].date
    description1.value=tasks[in1].description
    document.getElementById("modal-footer1").innerHTML=`<button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="del(${in1})">Delete</button>
    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="edit(${in1})">Edit</button>`
    
}
function del(index){
    tasks.splice(index, 1);
    display();
    document.getElementById("myForm").reset();
}
function edit(in1){
    var checkede;
    if(type1.checked){
        checkede = "Bug";
    }
    else{
        checkede = "Feature";
    }
    tasks[in1].title=title1.value
    tasks[in1].type=checkede
    tasks[in1].priority=priority1.value
    tasks[in1].status=statuse1.value
    tasks[in1].date=date1.value
    tasks[in1].description=description1.value
    document.getElementById("myForm").reset();
    display();


} 



