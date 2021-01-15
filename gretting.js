const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");



const USER_LS="currentUser",
SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

//submit 클릭 이벤트 함수
function handleSubmit(event){
    event.preventDefault(); //form에 Enter입력시 사라지는 기본동작 prevent
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

//이름 묻는 함수
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

//greeting 함수
function paintGreeting(text){
    form.classList.remove(SHOWING_CN); //폼은 숨기고 (What is your name 폼 지워버림)
    greeting.classList.add(SHOWING_CN); // js-greeting h4 하위에 class showing추가
    greeting.innerText=`Hello ${text}`;
}

function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if (currentUser===null){//이름을 안한 경우(local에 저장 안되어있음)
        askForName();
    }else{//입력을 했던 경우(local에 저장 되어 있음)
        paintGreeting(currentUser);

    }
}

function init(){
    loadName();
}

init();