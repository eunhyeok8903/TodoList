toDoForm = document.querySelector(".js-toDoForm"),
toDoInput= toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODO_LS="toDos";

let toDos=[];

//todo리스트 원소 삭제 event
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    console.log(li);
     //delete하는 id 리스트 제외하고 나머지 cleanToDos에 저장
     const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoList.removeChild(li);
    toDos=cleanToDos;
    console.log(toDos);
    saveToDos();//localStorage 갱신
}

function saveToDos(){
//localStorage에는 js 데이터를 저장할 수 없다.
//String으로만 저장 가능
localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}

//text인자를 todo리스트에 추가하는 함수
function paintTodo(text){
    //html태그 생성
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;

    //값 입력
    delBtn.innerText=" ❌";
    delBtn.addEventListener("click", deleteToDo);
    delBtn.className="del-btn";
    span.innerText=text;
    console.log(text);
    
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj={
        text: text,
        id: newId
    }
    //toDos추가
    toDos.push(toDoObj); 
    saveToDos();

}

//submit 이벤트 함수
function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value="";
}

//local에 저장된 toDos 로드(paint)하는 함수 
function loadToDos(){
    const loadedToDos= localStorage.getItem(TODO_LS);
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            //forEach로 모든 원소들 text를 todoList에 씀
            paintTodo(toDo.text)
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();