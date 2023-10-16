var countdown = function(){
    alert("終了しました");
}

y = 0;
function hour1() {
    y = y + 600000;
    gentime.innerHTML = y;
}

function minute1() {
    y = y + 60000;
    gentime.innerHTML = y;
}

function second1() {
    y = y + 1000;
    gentime.innerHTML = y;
}

function down() {
setTimeout(countdown, y);
for (let i = y; i <= 1000; i++) {
    gentime.innerHTML = i - 1;
}
}