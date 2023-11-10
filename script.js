function theme_change() {
  document.getElementById("ue").classList.add("white");
  document.getElementById("sita").classList.add("white");
  document.getElementById("hidari").classList.add("white");
  document.getElementById("time").classList.add("white");
  $(".app_icon").addClass("black");
  document.getElementById("control_center").classList.add("white");
  document.getElementById("all_app").classList.add("white");
  $("#sita_icon_internet").html('<img src="images/internet_01.png">');
  $("#sita_icon_music_player").html('<img src="images/musicplayer_01.png">');
  $("#sita_icon_setting").html('<img src="images/setting_01.png">');
  $("#sita_icon_feedback").html('<img src="images/feedback_01.png">');
  $("#sita_icon_addon_store").html('<img src="images/store_01.png">');
  $("#sita_icon_clock").html('<img src="images/clock_01.png">');
  $("#sita_icon_cal").html('<img src="images/cal_01.png">');
  $("#sita_icon_memo").html('<img src="images/memo_01.png">');
  $("#sita_icon_filer").html('<img src="images/file_01.png">');
  $("#sita_icon_camera").html('<img src="images/camera_01.png">');
  $("#sita_icon_bscode").html('<img src="images/bscode_01.png">');
  $("#sita_icon_mytube").html('<img src="images/mytube_01.png">');
  $("#all_icon_internet").html('<img src="images/internet_01.png">');
  $("#all_icon_music_player").html('<img src="images/musicplayer_01.png">');
  $("#all_icon_setting").html('<img src="images/setting_01.png">');
  $("#all_icon_feedback").html('<img src="images/feedback_01.png">');
  $("#all_icon_addon_store").html('<img src="images/store_01.png">');
  $("#all_icon_clock").html('<img src="images/clock_01.png">');
  $("#all_icon_cal").html('<img src="images/cal_01.png">');
  $("#all_icon_memo").html('<img src="images/memo_01.png">');
  $("#all_icon_filer").html('<img src="images/file_01.png">');
  $("#all_icon_camera").html('<img src="images/camera_01.png">');
  $("#all_icon_bscode").html('<img src="images/bscode_01.png">');
  $("#all_icon_mytube").html('<img src="images/mytube_01.png">');
}

// bar

// bar_time
schedule = document.getElementById("schedule");

function schedule_open() {
  schedule.style.display = "block";
  schedule.classList.remove("schedule_anime");
  document.getElementById('schedule_open').onclick = "schedule_none";
}

function schedule_none() {
  schedule.classList.add("schedule_anime");
  document.getElementById('schedule_open').onclick = "schedule_open";
}

// //bar_time

// bar_control_center
control_center = document.getElementById("control_center");

function control_center_show() {
    control_center.style.display = "block";
    control_center.classList.remove("control_center_close_anime");
    document.getElementById("control_changer").innerHTML = '<span id="control_center_button" onclick="control_center_none()"><img src="images/close.png" height="24px" width="24px"></span>';
}

function control_center_none() {
    control_center.classList.add("control_center_close_anime");
    document.getElementById("control_changer").innerHTML = '<span id="control_center_button" onclick="control_center_show()"><img src="images/open.png" height="24px" width="24px"></span>';
}

function reload() {
    location.reload()
}

fullscreen_ = document.getElementById("fullscreen");

function fullscreen() {
  fullscreen_.innerHTML = '<span class="app_icon" onclick="exit_fullscreen()"><img src="images/exit_fullscreen.png"></span></span>';
  document.documentElement.requestFullscreen();
}

function exit_fullscreen() {
  fullscreen_.innerHTML = '<span class="app_icon" onclick="fullscreen()"><img src="images/fullscreen.png"></span></span>';
  document.exitFullscreen();
}
// //bar_control_center

// bar_all_app
all_app = document.getElementById("all_app");

function all_app_open() {
    all_app.classList.remove("all_app_anime");
    all_app.style.display = "block";
    document.getElementById("all_app_changer").innerHTML = '<span id="all_app_button" onclick="all_app_none()">＋</span>';
}

function all_app_none() {
  all_app.classList.add("all_app_anime");
  document.getElementById("all_app_changer").innerHTML = '<span id="all_app_button" onclick="all_app_open()">＋</span>';
}
// //bar_all_app

// bar_search
search = document.getElementById("search");

function search_open() {
  search.classList.remove("all_app_anime");
  search.style.display = "block";
  document.getElementById("search_changer").innerHTML = '<span id="search_button" onclick="search_none()">🔍</span>';
}

function search_none() {
search.classList.add("all_app_anime");
document.getElementById("search_changer").innerHTML = '<span id="search_button" onclick="search_open()">🔍</span>';
}
// //bar_search

// bar_virtual_window
virtual_window = document.getElementById("virtual_window");

function virtual_window_open() {
  virtual_window.classList.remove("all_app_anime");
  virtual_window.style.display = "block";
  document.getElementById("virtual_window_changer").innerHTML = '<span id="virtual_window_button" onclick="virtual_window_none()">❑</span>';
}

function virtual_window_none() {
  virtual_window.classList.add("all_app_anime");
  document.getElementById("virtual_window_changer").innerHTML = '<span id="virtual_window_button" onclick="virtual_window_open()">❑</span>';
  }
// //bar_virtual_window
// //bar

// app
setting = document.getElementById("setting");
feedback = document.getElementById("feedback");
music_player = document.getElementById("music_player");
addon_store = document.getElementById("addon_store");
memo = document.getElementById("memo");
internet = document.getElementById("internet");
clock = document.getElementById("clock");
cal = document.getElementById("cal");
camera = document.getElementById("camera");
filer = document.getElementById("filer");
bscode = document.getElementById("bscode");
mytube = document.getElementById("mytube");
// app_setting
function setting_open() {
    setting.classList.remove("app_close_anime");
    setting.style.display = "block";
}

function setting_close() {
    setting.classList.add("app_close_anime");
}

function setting_size() {
    setting.classList.add("app_size");
    document.getElementById("setting_size").innerHTML = '<span class="app_size_change" onclick="setting_size_return()"><img src="images/syukusyou.png"></span>';
}

function setting_size_return() {
    setting.classList.remove("app_size");
    document.getElementById("setting_size").innerHTML = '<span class="app_size_change" onclick="setting_size()"><img src="images/kakudai.png"></span>';
}
// //app_setting

// app_feedback
function feedback_open() {
    feedback.classList.remove("app_close_anime");
    feedback.style.display = "block";
}

function feedback_close() {
    feedback.classList.add("app_close_anime");
}

function feedback_size() {
  feedback.classList.add("app_size");
  document.getElementById("feedback_size").innerHTML = '<span class="app_size_change" onclick="feedback_size_return()"><img src="images/syukusyou.png"></span>';
}

function feedback_size_return() {
  feedback.classList.remove("app_size");
  document.getElementById("feedback_size").innerHTML = '<span class="app_size_change" onclick="feedback_size()"><img src="images/kakudai.png"></span>';
}
// //app_feedback

// app_music_player
function music_player_open() {
    music_player.classList.remove("app_close_anime");
    music_player.style.display = "block";
}

function music_player_close() {
    music_player.classList.add("app_close_anime");
}

function music_player_size() {
  music_player.classList.add("app_size");
  document.getElementById("music_player_size").innerHTML = '<span class="app_size_change" onclick="music_player_size_return()"><img src="images/syukusyou.png"></span>';
}

function music_player_size_return() {
  music_player.classList.remove("app_size");
  document.getElementById("music_player_size").innerHTML = '<span class="app_size_change" onclick="music_player_size()"><img src="images/kakudai.png"></span>';
}
// //app_music_player

// app_addon_store
function addon_store_open() {
    addon_store.classList.remove("app_close_anime");
    addon_store.style.display = "block";
}

function addon_store_close() {
    addon_store.classList.add("app_close_anime");
}

function addon_store_size() {
  addon_store.classList.add("app_size");
  document.getElementById("addon_store_size").innerHTML = '<span class="app_size_change" onclick="addon_store_size_return()"><img src="images/syukusyou.png"></span>';
}

function addon_store_size_return() {
  addon_store.classList.remove("app_size");
  document.getElementById("addon_store_size").innerHTML = '<span class="app_size_change" onclick="addon_store_size()"><img src="images/kakudai.png"></span>';
}
// //app_addon_store

// app_memo
function memo_open() {
  memo.classList.remove("app_close_anime");
  memo.style.display = "block";
}

function memo_close() {
  memo.classList.add("app_close_anime");
}

function memo_size() {
memo.classList.add("app_size");
document.getElementById("memo_size").innerHTML = '<span class="app_size_change" onclick="memo_size_return()"><img src="images/syukusyou.png"></span>';
}

function memo_size_return() {
memo.classList.remove("app_size");
document.getElementById("memo_size").innerHTML = '<span class="app_size_change" onclick="memo_size()"><img src="images/kakudai.png"></span>';
}
// //app_memo

// app_internet
function internet_open() {
    internet.classList.remove("app_close_anime");
    internet.style.display = "block";
}

function internet_close() {
  internet.classList.add("app_close_anime");
}

function internet_size() {
  internet.classList.add("app_size");
  document.getElementById("internet_size").innerHTML = '<span class="app_size_change" onclick="internet_size_return()"><img src="images/syukusyou.png"></span>';
}

function internet_size_return() {
  internet.classList.remove("app_size");
  document.getElementById("internet_size").innerHTML = '<span class="app_size_change" onclick="internet_size()"><img src="images/kakudai.png"></span>';
}
// //app_internet

// app_clock
function clock_open() {
    clock.classList.remove("app_close_anime");
    clock.style.display = "block";
}

function clock_close() {
    clock.classList.add("app_close_anime");
}

function clock_size() {
  clock.classList.add("app_size");
  document.getElementById("clock_size").innerHTML = '<span class="app_size_change" onclick="clock_size_return()"><img src="images/syukusyou.png"></span>';
}

function clock_size_return() {
  clock.classList.remove("app_size");
  document.getElementById("clock_size").innerHTML = '<span class="app_size_change" onclick="clock_size()"><img src="images/kakudai.png"></span>';
}
// //app_clock

// app_cal
function cal_open() {
    cal.classList.remove("app_close_anime");
    cal.style.display = "block";
}

function cal_close() {
    cal.classList.add("app_close_anime");
}

function cal_size() {
  cal.classList.add("app_size");
  document.getElementById("cal_size").innerHTML = '<span class="app_size_change" onclick="cal_size_return()"><img src="images/syukusyou.png"></span>';
}

function cal_size_return() {
  cal.classList.remove("app_size");
  document.getElementById("cal_size").innerHTML = '<span class="app_size_change" onclick="cal_size()"><img src="images/kakudai.png"></span>';
}
// //app_cal

// app_camera
function camera_open() {
  camera.classList.remove("app_close_anime");
  camera.style.display = "block";
}

function camera_close() {
  camera.classList.add("app_close_anime");
}

function camera_size() {
camera.classList.add("app_size");
document.getElementById("camera_size").innerHTML = '<span class="app_size_change" onclick="camera_size_return()"><img src="images/syukusyou.png"></span>';
}

function camera_size_return() {
camera.classList.remove("app_size");
document.getElementById("camera_size").innerHTML = '<span class="app_size_change" onclick="camera_size()"><img src="images/kakudai.png"></span>';
}
// //app_camera

// app_filer
function filer_open() {
  filer.classList.remove("app_close_anime");
  filer.style.display = "block";
}

function filer_close() {
  filer.classList.add("app_close_anime");
}

function filer_size() {
filer.classList.add("app_size");
document.getElementById("filer_size").innerHTML = '<span class="app_size_change" onclick="filer_size_return()"><img src="images/syukusyou.png"></span>';
}

function filer_size_return() {
filer.classList.remove("app_size");
document.getElementById("filer_size").innerHTML = '<span class="app_size_change" onclick="filer_size()"><img src="images/kakudai.png"></span>';
}
// //app_filer

// app_bscode
function bscode_open() {
  bscode.classList.remove("app_close_anime");
  bscode.style.display = "block";
}

function bscode_close() {
  bscode.classList.add("app_close_anime");
}

function bscode_size() {
bscode.classList.add("app_size");
document.getElementById("bscode_size").innerHTML = '<span class="app_size_change" onclick="bscode_size_return()"><img src="images/syukusyou.png"></span>';
}

function bscode_size_return() {
bscode.classList.remove("app_size");
document.getElementById("bscode_size").innerHTML = '<span class="app_size_change" onclick="bscode_size()"><img src="images/kakudai.png"></span>';
}
// //app_bscode

// app_mytube
function mytube_open() {
  mytube.classList.remove("app_close_anime");
  mytube.style.display = "block";
}

function mytube_close() {
  mytube.classList.add("app_close_anime");
}

function mytube_size() {
mytube.classList.add("app_size");
document.getElementById("mytube_size").innerHTML = '<span class="app_size_change" onclick="mytube_size_return()"><img src="images/syukusyou.png"></span>';
}

function mytube_size_return() {
mytube.classList.remove("app_size");
document.getElementById("mytube_size").innerHTML = '<span class="app_size_change" onclick="mytube_size()"><img src="images/kakudai.png"></span>';
}
// //app_mytube

// cal_script
screen = document.getElementById('screen');

function del() {
  screen.value = screen.value.slice(0,-1);
}
  
function mul() {
  screen.value = screen.value + "*";
}
  
function nin() {
  screen.value = screen.value + 9;
}
  
function eig() {
  screen.value = screen.value + 8;
}
  
function sev() {
  screen.value = screen.value + 7;
}
  
function fou() {
  screen.value = screen.value + 4;
}
  
function fiv() {
  screen.value = screen.value + 5;
}
  
function six() {
  screen.value = screen.value + 6;
}
  
function thr() {
  screen.value = screen.value + 3;
}
  
function two() {
  screen.value = screen.value + 2;
}
  
function one() {
  screen.value = screen.value + 1;
}
  
function zer() {
  screen.value = screen.value + 0;
}
  
function zer2() {
  screen.value = screen.value + "00";
}
  
function com() {
  screen.value = screen.value + ".";
}
// //cal_script

// musicplayer_script
durations.innerHTML = document.getElementById('music_p').duration;
music = document.getElementById('music');
video = document.getElementById('video');

function play() {
  music.play();
  video.play();
  document.getElementById("pause_play_changer").innerHTML = '<span id="music_start" onclick="pause()">⏸️</span>'
}

function pause() {
  music.pause();
  video.pause();
  document.getElementById("pause_play_changer").innerHTML = '<span id="music_start" onclick="play()">▶️</span>'
}

function onloop() {
  music.loop = true;
  video.loop = true;
  document.getElementById("loop_changer").innerHTML = '<span id="music_loop" onclick="offloop()">🔁</span>'
}

function offloop() {
  music.loop = false;
  video.loop = false;
  document.getElementById("loop_changer").innerHTML = '<span id="music_loop" onclick="onloop()">×🔁×</span>'
}
// //musicplayer_script

// clock_script
function currenttime() {
  document.getElementById("nowtime").style.display = "block";
  document.getElementById("nowtimer").style.display = "none";
}

function timer() {
  document.getElementById("nowtimer").style.display = "block";
  document.getElementById("nowtime").style.display = "none";
}
// //clock_script

pre_internet = document.getElementById("pre_internet");
pre_music_player = document.getElementById("pre_music_player");
pre_setting = document.getElementById("pre_setting");
pre_feedback = document.getElementById("pre_feedback");
pre_store = document.getElementById("pre_store");
pre_clock = document.getElementById("pre_clock");
pre_cal = document.getElementById("pre_cal");
pre_memo = document.getElementById("pre_memo");
pre_filer = document.getElementById("pre_filer");
pre_camera = document.getElementById("pre_camera");
pre_bscode = document.getElementById("pre_bscode");
pre_mytube = document.getElementById("pre_mytube");

$('#sita_icon_internet').hover(
  function() {
    pre_internet.style.display = "block";
    pre_internet.classList.remove("preanime_close");
  }, function() {
    pre_internet.classList.add("preanime_close");
  }
);

$('#sita_icon_music_player').hover(
  function() {
    pre_music_player.style.display = "block";
    pre_music_player.classList.remove("preanime_close");
  }, function() {
    pre_music_player.classList.add("preanime_close");
  }
);

$('#sita_icon_setting').hover(
  function() {
    pre_setting.style.display = "block";
    pre_setting.classList.remove("preanime_close");
  }, function() {
    pre_setting.classList.add("preanime_close");
  }
);

$('#sita_icon_feedback').hover(
  function() {
    pre_feedback.style.display = "block";
    pre_feedback.classList.remove("preanime_close");
  }, function() {
    pre_feedback.classList.add("preanime_close");
  }
);

$('#sita_icon_addon_store').hover(
  function() {
    pre_store.style.display = "block";
    pre_store.classList.remove("preanime_close");
  }, function() {
    pre_store.classList.add("preanime_close");
  }
);

$('#sita_icon_clock').hover(
  function() {
    pre_clock.style.display = "block";
    pre_clock.classList.remove("preanime_close");
  }, function() {
    pre_clock.classList.add("preanime_close");
  }
);

$('#sita_icon_cal').hover(
  function() {
    pre_cal.style.display = "block";
    pre_cal.classList.remove("preanime_close");
  }, function() {
    pre_cal.classList.add("preanime_close");
  }
);

$('#sita_icon_memo').hover(
  function() {
    pre_memo.style.display = "block";
    pre_memo.classList.remove("preanime_close");
  }, function() {
    pre_memo.classList.add("preanime_close");
  }
);

$('#sita_icon_filer').hover(
  function() {
    pre_filer.style.display = "block";
    pre_filer.classList.remove("preanime_close");
  }, function() {
    pre_filer.classList.add("preanime_close");
  }
);

$('#sita_icon_camera').hover(
  function() {
    pre_camera.style.display = "block";
    pre_camera.classList.remove("preanime_close");
  }, function() {
    pre_camera.classList.add("preanime_close");
  }
);

$('#sita_icon_bscode').hover(
  function() {
    pre_bscode.style.display = "block";
    pre_bscode.classList.remove("preanime_close");
  }, function() {
    pre_bscode.classList.add("preanime_close");
  }
);

$('#sita_icon_mytube').hover(
  function() {
    pre_mytube.style.display = "block";
    pre_mytube.classList.remove("preanime_close");
  }, function() {
    pre_mytube.classList.add("preanime_close");
  }
);

function ac_name_changer() {
  document.getElementById("ac_name_change").style.display = "block";
}

function name_decide() {
  account_name.innerHTML = document.getElementById("ac_name_pre").value + " さん";
}

function husen_show() {
  document.getElementById("husen").style.display = "block";
}