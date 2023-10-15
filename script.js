function theme_change() {
  document.getElementById("ue").classList.add("white");
  document.getElementById("sita").classList.add("white");
  document.getElementById("hidari").classList.add("white");
  document.getElementById("time").classList.add("white");
  $(".app_icon").addClass("black");
  document.getElementById("control_center").classList.add("white");
  document.getElementById("all_app").classList.add("white");
  $("#sita_icon_internet").html('<img src="images/internet_01.png" width="24px" height="24px">');
  $("#sita_icon_music_player").html('<img src="images/musicplayer_01.png" width="24px" height="24px">');
  $("#sita_icon_setting").html('<img src="images/setting_01.png" width="24px" height="24px">');
  $("#sita_icon_feedback").html('<img src="images/feedback_01.png" width="24px" height="24px">');
  $("#sita_icon_addon_store").html('<img src="images/store_01.png" width="24px" height="24px">');
  $("#sita_icon_clock").html('<img src="images/clock_01.png" width="24px" height="24px">');
  $("#sita_icon_cal").html('<img src="images/cal_01.png" width="24px" height="24px">');
}

// bar
// bar_control_center
function control_center_show() {
    document.getElementById("control_center").style.display = "block";
    document.getElementById("control_center").classList.remove("control_center_close_anime");
    document.getElementById("control_changer").innerHTML = '<span id="control_center_button" onclick="control_center_none()"><img src="images/close.png" height="24px" width="24px"></span>';
}

function control_center_none() {
    document.getElementById("control_center").classList.add("control_center_close_anime");
    document.getElementById("control_changer").innerHTML = '<span id="control_center_button" onclick="control_center_show()"><img src="images/open.png" height="24px" width="24px"></span>';
}

function reload() {
    location.reload()
}

function fullscreen() {
  document.getElementById("control_center_fullscreen_change").innerHTML = '<span class="app_icon" onclick="exit_fullscreen()">⬜</span>';
  document.documentElement.requestFullscreen();
}

function exit_fullscreen() {
  document.getElementById("control_center_fullscreen_change").innerHTML = '<span class="app_icon" onclick="fullscreen()">⬜</span>';
  document.exitFullscreen();
}
// //bar_control_center

// bar_all_app
function all_app_open() {
    document.getElementById("all_app").classList.remove("all_app_anime");
    document.getElementById("all_app").style.display = "block";
    document.getElementById("all_app_changer").innerHTML = '<span id="all_app_button" onclick="all_app_none()">＋</span>';
}

function all_app_none() {
  document.getElementById("all_app").classList.add("all_app_anime");
  document.getElementById("all_app_changer").innerHTML = '<span id="all_app_button" onclick="all_app_open()">＋</span>';
}
// //bar_all_app

// bar_search
function search_open() {
  document.getElementById("search").classList.remove("all_app_anime");
  document.getElementById("search").style.display = "block";
  document.getElementById("search_changer").innerHTML = '<span id="search_button" onclick="search_none()">🔍</span>';
}

function search_none() {
document.getElementById("search").classList.add("all_app_anime");
document.getElementById("search_changer").innerHTML = '<span id="search_button" onclick="search_open()">🔍</span>';
}
// //bar_search
// //bar

// app
// app_setting
function setting_open() {
    document.getElementById("setting").classList.remove("app_close_anime");
    document.getElementById("setting").style.display = "block";
}

function setting_close() {
    document.getElementById("setting").classList.add("app_close_anime");
}

function setting_size_change() {
    document.getElementById("setting").classList.add("app_size");
    document.getElementById("setting_size_changer").innerHTML = '<span class="app_size_change" onclick="setting_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function setting_size_return() {
    document.getElementById("setting").classList.remove("app_size");
    document.getElementById("setting_size_changer").innerHTML = '<span class="app_size_change" onclick="setting_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_setting

// app_feedback
function feedback_open() {
    document.getElementById("feedback").classList.remove("app_close_anime");
    document.getElementById("feedback").style.display = "block";
}

function feedback_close() {
    document.getElementById("feedback").classList.add("app_close_anime");
}

function feedback_size_change() {
  document.getElementById("feedback").classList.add("app_size");
  document.getElementById("feedback_size_changer").innerHTML = '<span class="app_size_change" onclick="feedback_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function feedback_size_return() {
  document.getElementById("feedback").classList.remove("app_size");
  document.getElementById("feedback_size_changer").innerHTML = '<span class="app_size_change" onclick="feedback_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_feedback

// app_music_player
function music_player_open() {
    document.getElementById("music_player").classList.remove("app_close_anime");
    document.getElementById("music_player").style.display = "block";
}

function music_player_close() {
    document.getElementById("music_player").classList.add("app_close_anime");
}

function music_player_size_change() {
  document.getElementById("music_player").classList.add("app_size");
  document.getElementById("music_player_size_changer").innerHTML = '<span class="app_size_change" onclick="music_player_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function music_player_size_return() {
  document.getElementById("music_player").classList.remove("app_size");
  document.getElementById("music_player_size_changer").innerHTML = '<span class="app_size_change" onclick="music_player_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_music_player

// app_addon_store
function addon_store_open() {
    document.getElementById("addon_store").classList.remove("app_close_anime");
    document.getElementById("addon_store").style.display = "block";
}

function addon_store_close() {
    document.getElementById("addon_store").classList.add("app_close_anime");
}

function addon_store_size_change() {
  document.getElementById("addon_store").classList.add("app_size");
  document.getElementById("addon_store_size_changer").innerHTML = '<span class="app_size_change" onclick="addon_store_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function addon_store_size_return() {
  document.getElementById("addon_store").classList.remove("app_size");
  document.getElementById("addon_store_size_changer").innerHTML = '<span class="app_size_change" onclick="addon_store_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_addon_store

// app_memo
function memo_open() {
  document.getElementById("memo").classList.remove("app_close_anime");
  document.getElementById("memo").style.display = "block";
}

function memo_close() {
  document.getElementById("memo").classList.add("app_close_anime");
}

function memo_size_change() {
document.getElementById("memo").classList.add("app_size");
document.getElementById("memo_size_changer").innerHTML = '<span class="app_size_change" onclick="memo_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function memo_size_return() {
document.getElementById("memo").classList.remove("app_size");
document.getElementById("memo_size_changer").innerHTML = '<span class="app_size_change" onclick="memo_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_memo

// app_internet
function internet_open() {
    document.getElementById("internet").classList.remove("app_close_anime");
    document.getElementById("internet").style.display = "block";
}

function internet_close() {
  document.getElementById("internet").classList.add("app_close_anime");
}

function internet_size_change() {
  document.getElementById("internet").classList.add("app_size");
  document.getElementById("internet_size_changer").innerHTML = '<span class="app_size_change" onclick="internet_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function internet_size_return() {
  document.getElementById("internet").classList.remove("app_size");
  document.getElementById("internet_size_changer").innerHTML = '<span class="app_size_change" onclick="internet_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_internet

// app_clock
function clock_open() {
    document.getElementById("clock").classList.remove("app_close_anime");
    document.getElementById("clock").style.display = "block";
}

function clock_close() {
    document.getElementById("clock").classList.add("app_close_anime");
}

function clock_size_change() {
  document.getElementById("clock").classList.add("app_size");
  document.getElementById("clock_size_changer").innerHTML = '<span class="app_size_change" onclick="clock_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function clock_size_return() {
  document.getElementById("clock").classList.remove("app_size");
  document.getElementById("clock_size_changer").innerHTML = '<span class="app_size_change" onclick="clock_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_clock

// app_cal
function cal_open() {
    document.getElementById("cal").classList.remove("app_close_anime");
    document.getElementById("cal").style.display = "block";
}

function cal_close() {
    document.getElementById("cal").classList.add("app_close_anime");
}

function cal_size_change() {
  document.getElementById("cal").classList.add("app_size");
  document.getElementById("cal_size_changer").innerHTML = '<span class="app_size_change" onclick="cal_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function cal_size_return() {
  document.getElementById("cal").classList.remove("app_size");
  document.getElementById("cal_size_changer").innerHTML = '<span class="app_size_change" onclick="cal_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_cal

// app_camera
function camera_open() {
  document.getElementById("camera").classList.remove("app_close_anime");
  document.getElementById("camera").style.display = "block";
}

function camera_close() {
  document.getElementById("camera").classList.add("app_close_anime");
}

function camera_size_change() {
document.getElementById("camera").classList.add("app_size");
document.getElementById("camera_size_changer").innerHTML = '<span class="app_size_change" onclick="camera_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function camera_size_return() {
document.getElementById("camera").classList.remove("app_size");
document.getElementById("camera_size_changer").innerHTML = '<span class="app_size_change" onclick="camera_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_camera

// app_map
function map_open() {
  document.getElementById("map").classList.remove("app_close_anime");
  document.getElementById("map").style.display = "block";
}

function map_close() {
  document.getElementById("map").classList.add("app_close_anime");
}

function map_size_change() {
document.getElementById("map").classList.add("app_size");
document.getElementById("map_size_changer").innerHTML = '<span class="app_size_change" onclick="map_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function map_size_return() {
document.getElementById("map").classList.remove("app_size");
document.getElementById("map_size_changer").innerHTML = '<span class="app_size_change" onclick="map_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_map

// app_filer
function filer_open() {
  document.getElementById("filer").classList.remove("app_close_anime");
  document.getElementById("filer").style.display = "block";
}

function filer_close() {
  document.getElementById("filer").classList.add("app_close_anime");
}

function filer_size_change() {
document.getElementById("filer").classList.add("app_size");
document.getElementById("filer_size_changer").innerHTML = '<span class="app_size_change" onclick="filer_size_return()"><img src="images/syukusyou.png" height="24px" width="24px"></span>';
}

function filer_size_return() {
document.getElementById("filer").classList.remove("app_size");
document.getElementById("filer_size_changer").innerHTML = '<span class="app_size_change" onclick="filer_size_change()"><img src="images/kakudai.png" height="24px" width="24px"></span>';
}
// //app_filer

// cal_script
function del() {
  document.getElementById('screen').value = document.getElementById('screen').value.slice(0,-1);
}
  
function mul() {
  document.getElementById('screen').value = document.getElementById('screen').value + "*";
}
  
function nin() {
  document.getElementById('screen').value = document.getElementById('screen').value + 9;
}
  
function eig() {
  document.getElementById('screen').value = document.getElementById('screen').value + 8;
}
  
function sev() {
  document.getElementById('screen').value = document.getElementById('screen').value + 7;
}
  
function fou() {
  document.getElementById('screen').value = document.getElementById('screen').value + 4;
}
  
function fiv() {
  document.getElementById('screen').value = document.getElementById('screen').value + 5;
}
  
function six() {
  document.getElementById('screen').value = document.getElementById('screen').value + 6;
}
  
function thr() {
  document.getElementById('screen').value = document.getElementById('screen').value + 3;
}
  
function two() {
  document.getElementById('screen').value = document.getElementById('screen').value + 2;
}
  
function one() {
  document.getElementById('screen').value = document.getElementById('screen').value + 1;
}
  
function zer() {
  document.getElementById('screen').value = document.getElementById('screen').value + 0;
}
  
function zer2() {
  document.getElementById('screen').value = document.getElementById('screen').value + "00";
}
  
function com() {
  document.getElementById('screen').value = document.getElementById('screen').value + ".";
}
// //cal_script

// musicplayer_script
function play() {
  document.getElementById('music').play();
  document.getElementById('video').play();
  document.getElementById("pause_play_changer").innerHTML = '<span id="music_start" onclick="pause()">⏸️</span>'
}

function pause() {
  document.getElementById('music').pause();
  document.getElementById('video').pause();
  document.getElementById("pause_play_changer").innerHTML = '<span id="music_start" onclick="play()">▶️</span>'
}

function onloop() {
  document.getElementById('music').loop = true;
  document.getElementById('video').loop = true;
  document.getElementById("loop_changer").innerHTML = '<span id="music_loop" onclick="offloop()">🔁</span>'
}

function offloop() {
  document.getElementById('music').loop = false;
  document.getElementById('video').loop = false;
  document.getElementById("loop_changer").innerHTML = '<span id="music_loop" onclick="onloop()">×🔁×</span>'
}
// //musicplayer_script
