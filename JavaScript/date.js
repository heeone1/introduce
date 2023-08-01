// 현재 시간 값을 가진 Date 객체 생성
let current = new Date();

if (current.getSeconds() % 5 == 0)
    document.body.style.backgroundColor = "lightskyblue";
else
    document.body.style.backgroundColor = "ghostwhite";

document.write("페이지 방문 시간 : ");
document.write(current.getHours(), "시 ");
document.write(current.getMinutes(), "분 ");
document.write(current.getSeconds(), "초<br>");