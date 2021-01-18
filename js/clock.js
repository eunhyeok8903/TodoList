//html에서 태그와 class이름을 이용하여 변수 저장
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1"); //clockContainer에서 h1 태그 변수 저장(시간 나타낼 부분)

function changeDay(n){
    dic={
        1:"월",
        2:"화",
        3:"수",
        4:"목",
        5:"금",
        6:"토",
        7:"일",
    }
    return dic[n]
}

//Date함수 이용하여 clockTitle에 시간 text입력
function getTime() {
    const date = new Date();
    const month=date.getMonth()
    const day=changeDay(date.getDay());
    const d=date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = ` ${month+1}월 ${d} ${day}요일,  ${hours<10 ? `0${hours}` : `${hours}`}:${minutes<10 ? `0${minutes}` : `${minutes}`}`;
}

function init() {
    //1000ms마다 getTime실행
    setInterval(getTime,1000); 
}

init();