let p;
function init1() { // 문서가 완전히 로드되었을 때 호출
    p = document.getElementById("player");
    p.addEventListener("mouseover", overp); // 이벤트 리스너 등록
    p.addEventListener("mouseout", outp); // 이벤트  리스너 등록 
}
function overp() { // 글자에 마우스 올리면 배경색 빨간색, 글자색 흰색으로
    p.style.backgroundColor = "red";
    p.style.color = "white";
}
function outp() { // 글자에서 마우스 떼면 배경색 ghostwhite로, 글자색 검정으로
    p.style.backgroundColor = "ghostwhite";
    p.style.color = "black";
}


function MBTI(){ //"MBTI: ESFP"를 클릭하면 사진이 뜬다
    let p = document.getElementById("mbti");
    p.innerHTML = "MBTI = <img src='media/MBTI.jpeg' width='250px' height='300px'>";
}


let width = 150; // 폭 크기
let height =217; // 높이 크기
function wheel(e, obj){ // e = event 객체
    if(e.wheelDelta<0){ // 휠을 아래로 굴릴 때
        width-=5; // 폭 5씩 감소
        height-=5; // 높이 5씩 감소 
        if(width<0) width=0; // 폭이 0보다 작아지지 않게
        if(height<0) height=0; // 높이가 0보다 작아지지 않게
    }
    else{ // 휠을 위로 굴릴 때
        width+=5; // 폭 5씩 증가
        height+=5; // 높이 5씩 증가 
        }
    obj.style.width = width+'px';
    obj.style.height = height+'px';
}