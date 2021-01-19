const body = document.querySelector("body");

const IMG_NUMBER=2;

//1~IMG_NUMBER 숫자 반환 함수
function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number+1;
}

function paintImage(imgNumber){
    const image = new Image();
    image.src=`images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();