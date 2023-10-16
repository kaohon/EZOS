var countdown = function(){
    alert("終了しました");
}
x = 0;
function hour1() {
    y = x + 600000;
}

function minute1() {
    y = x + 60000;
}

function second1() {
    y = x + 1000;
}

setTimeout(countdown, y);

var time;

function showTime(){

// 現在日時を取得
let today = new Date();

// 時分秒を取得
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let millisecond = today.getMilliseconds();

//時分秒が10以下の時0を付け足す
month = month<10? "0"+month:month;
day = day<10? "0"+day:day;
minute = minute<10? "0"+minute:minute;
second = second<10? "0"+second:second;

// 時刻を整形
let mytime = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
let ymd = year + "/" + month + "/" + day;
let hms = hour + ":" + minute + ":" + second + ":" + millisecond;

// 現在時刻を表示する
hmstime.innerHTML = hms;
ymdtime.innerHTML = ymd;
time.innerHTML = mytime;

// 再帰呼び出し
setTimeout(showTime, 1);
    }

window.addEventListener("load", function(){
time = document.getElementById("time");
showTime();
});

window.addEventListener("load", function(){
hms = document.getElementById("hms");
showTime();
});

window.addEventListener("load", function(){
ymd = document.getElementById("ymd");
showTime();
});
