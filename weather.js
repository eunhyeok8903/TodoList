const COORDS="coords";

//위도,경도 로컬저장소에 저장
function saveCoords(coordsObj){
    //key,value값으로 로컬에 저장
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

//Success 핸들 함수
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude:latitude,
        longitude:longitude
    }
    console.log(coordsObj);
    saveCoords(coordsObj);
}

//Error핸들 함수
function handleError(){
    console.log("Cannot access geo location");
}

//위도,경도 묻는 함수
function askForCoords(){
    //위치 허가 팝업 (성공시 함수, 에러시 함수)
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleError);
}

//위도,경도 로드 함수
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords==null){//로컬에 없는 경우
        askForCoords();
    }else{//로컬에 있는 경우
        //todo
    }
}

function init(){
    loadCoords();
}

init();