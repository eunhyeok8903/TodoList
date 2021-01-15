toDoForm = document.querySelector(".js-toDoForm"),
toDoInput= toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODO_LS="toDos";

function paintTodo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span = document.createElement("span");

    delBtn.innerText="❌";
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const toDos= localStorage.getItem(TODO_LS);
    if(toDos!==null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();