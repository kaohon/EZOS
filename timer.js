var countdown = function(){
    alert("終了しました");
}

y = 0;
x = 0;
n = 0;
z = 0;
function hour1() {
    x = x + 1;
    y = y + 600000;
    hourtime.innerHTML = x + "時";
}

function minute1() {
    n = n + 1;
    y = y + 60000;
    mintime.innerHTML = n + "分";
}

function second1() {
    z = z + 1;
    y = y + 1000;
    sectime.innerHTML = z + "秒";
}

function minus_hour1() {
    x = x - 1;
    y = y - 600000;
    hourtime.innerHTML = x + "時";
}

function minus_minute1() {
    n = n - 1;
    y = y - 60000;
    mintime.innerHTML = n + "分";
}

function minus_second1() {
    z = z - 1;
    y = y - 1000;
    sectime.innerHTML = z + "秒";
}

function down() {
setTimeout(countdown, y);
    hourtime.innerHTML = i;
    mintime.innerHTML = i;
    sectime.innerHTML = i;
}