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
let year_minus = year - 1;
let year_plus = year + 1;
let month_minus = month - 1;
let month_plus = month + 1;
let mytime = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
let ymd = year + "/" + month + "/" + day;
let hms = hour + ":" + minute + ":" + second + ":" + millisecond;

if (month == "2") {
    document.getElementById("day_line5").style.display = "none";
} else if (month == "3" || month == "4" || month == "6" || month == "9" || month == "11") {
    document.getElementById("day_none31").style.display = "none";
}

// 現在時刻を表示する
calender_month.innerHTML = month;
calender_year.innerHTML = year;
calender_year_minus.innerHTML = year_minus;
calender_year_plus.innerHTML = year_plus;
calender_month_minus.innerHTML = month_minus;
calender_month_plus.innerHTML = month_plus;
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

window.addEventListener("load", function(){
    day = document.getElementById("day");
    showTime();
    });
    
    window.addEventListener("load", function(){
    month = document.getElementById("month");
    showTime();
    });
    
    window.addEventListener("load", function(){
    year = document.getElementById("year");
    showTime();
    });