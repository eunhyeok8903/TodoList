//html에서 태그와 class이름을 이용하여 변수 저장
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1"); //clockContainer에서 h1 태그 변수 저장(시간 나타낼 부분)

//Date함수 이용하여 clockTitle에 시간 text입력
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `0${hours}` : `${hours}`}:${minutes<10 ? `0${minutes}` : `${minutes}`}:${seconds <10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
    //1000ms마다 getTime실행
    setInterval(getTime,1000); 
}

init();