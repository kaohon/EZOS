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
}

// bar

// bar_time
function schedule() {
  document.getElementById("schedule").classList.remove("app_close_anime");
  document.getElementById("schedule").style.display = "block";
}

function schedule_close() {
  document.getElementById("schedule").classList.add("app_close_anime");
}
// //bar_time

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
  document.getElementById("fullscreen").innerHTML = '<span class="app_icon" onclick="exit_fullscreen()"><img src="images/exit_fullscreen.png"></span></span>';
  document.documentElement.requestFullscreen();
}

function exit_fullscreen() {
  document.getElementById("fullscreen").innerHTML = '<span class="app_icon" onclick="fullscreen()"><img src="images/fullscreen.png"></span></span>';
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

// bar_virtual_window
function virtual_window_open() {
  document.getElementById("virtual_window").classList.remove("all_app_anime");
  document.getElementById("virtual_window").style.display = "block";
  document.getElementById("virtual_window_changer").innerHTML = '<span id="virtual_window_button" onclick="virtual_window_none()">❑</span>';
}

function virtual_window_none() {
  document.getElementById("virtual_window").classList.add("all_app_anime");
  document.getElementById("virtual_window_changer").innerHTML = '<span id="virtual_window_button" onclick="virtual_window_open()">❑</span>';
  }
// //bar_virtual_window
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

function setting_size() {
    document.getElementById("setting").classList.add("app_size");
    document.getElementById("setting_size").innerHTML = '<span class="app_size_change" onclick="setting_size_return()"><img src="images/syukusyou.png"></span>';
}

function setting_size_return() {
    document.getElementById("setting").classList.remove("app_size");
    document.getElementById("setting_size").innerHTML = '<span class="app_size_change" onclick="setting_size()"><img src="images/kakudai.png"></span>';
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

function feedback_size() {
  document.getElementById("feedback").classList.add("app_size");
  document.getElementById("feedback_size").innerHTML = '<span class="app_size_change" onclick="feedback_size_return()"><img src="images/syukusyou.png"></span>';
}

function feedback_size_return() {
  document.getElementById("feedback").classList.remove("app_size");
  document.getElementById("feedback_size").innerHTML = '<span class="app_size_change" onclick="feedback_size()"><img src="images/kakudai.png"></span>';
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

function music_player_size() {
  document.getElementById("music_player").classList.add("app_size");
  document.getElementById("music_player_size").innerHTML = '<span class="app_size_change" onclick="music_player_size_return()"><img src="images/syukusyou.png"></span>';
}

function music_player_size_return() {
  document.getElementById("music_player").classList.remove("app_size");
  document.getElementById("music_player_size").innerHTML = '<span class="app_size_change" onclick="music_player_size()"><img src="images/kakudai.png"></span>';
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

function addon_store_size() {
  document.getElementById("addon_store").classList.add("app_size");
  document.getElementById("addon_store_size").innerHTML = '<span class="app_size_change" onclick="addon_store_size_return()"><img src="images/syukusyou.png"></span>';
}

function addon_store_size_return() {
  document.getElementById("addon_store").classList.remove("app_size");
  document.getElementById("addon_store_size").innerHTML = '<span class="app_size_change" onclick="addon_store_size()"><img src="images/kakudai.png"></span>';
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

function memo_size() {
document.getElementById("memo").classList.add("app_size");
document.getElementById("memo_size").innerHTML = '<span class="app_size_change" onclick="memo_size_return()"><img src="images/syukusyou.png"></span>';
}

function memo_size_return() {
document.getElementById("memo").classList.remove("app_size");
document.getElementById("memo_size").innerHTML = '<span class="app_size_change" onclick="memo_size()"><img src="images/kakudai.png"></span>';
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

function internet_size() {
  document.getElementById("internet").classList.add("app_size");
  document.getElementById("internet_size").innerHTML = '<span class="app_size_change" onclick="internet_size_return()"><img src="images/syukusyou.png"></span>';
}

function internet_size_return() {
  document.getElementById("internet").classList.remove("app_size");
  document.getElementById("internet_size").innerHTML = '<span class="app_size_change" onclick="internet_size()"><img src="images/kakudai.png"></span>';
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

function clock_size() {
  document.getElementById("clock").classList.add("app_size");
  document.getElementById("clock_size").innerHTML = '<span class="app_size_change" onclick="clock_size_return()"><img src="images/syukusyou.png"></span>';
}

function clock_size_return() {
  document.getElementById("clock").classList.remove("app_size");
  document.getElementById("clock_size").innerHTML = '<span class="app_size_change" onclick="clock_size()"><img src="images/kakudai.png"></span>';
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

function cal_size() {
  document.getElementById("cal").classList.add("app_size");
  document.getElementById("cal_size").innerHTML = '<span class="app_size_change" onclick="cal_size_return()"><img src="images/syukusyou.png"></span>';
}

function cal_size_return() {
  document.getElementById("cal").classList.remove("app_size");
  document.getElementById("cal_size").innerHTML = '<span class="app_size_change" onclick="cal_size()"><img src="images/kakudai.png"></span>';
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

function camera_size() {
document.getElementById("camera").classList.add("app_size");
document.getElementById("camera_size").innerHTML = '<span class="app_size_change" onclick="camera_size_return()"><img src="images/syukusyou.png"></span>';
}

function camera_size_return() {
document.getElementById("camera").classList.remove("app_size");
document.getElementById("camera_size").innerHTML = '<span class="app_size_change" onclick="camera_size()"><img src="images/kakudai.png"></span>';
}
// //app_camera

// app_filer
function filer_open() {
  document.getElementById("filer").classList.remove("app_close_anime");
  document.getElementById("filer").style.display = "block";
}

function filer_close() {
  document.getElementById("filer").classList.add("app_close_anime");
}

function filer_size() {
document.getElementById("filer").classList.add("app_size");
document.getElementById("filer_size").innerHTML = '<span class="app_size_change" onclick="filer_size_return()"><img src="images/syukusyou.png"></span>';
}

function filer_size_return() {
document.getElementById("filer").classList.remove("app_size");
document.getElementById("filer_size").innerHTML = '<span class="app_size_change" onclick="filer_size()"><img src="images/kakudai.png"></span>';
}
// //app_filer

// app_bscode
function bscode_open() {
  document.getElementById("bscode").classList.remove("app_close_anime");
  document.getElementById("bscode").style.display = "block";
}

function bscode_close() {
  document.getElementById("bscode").classList.add("app_close_anime");
}

function bscode_size() {
document.getElementById("bscode").classList.add("app_size");
document.getElementById("bscode_size").innerHTML = '<span class="app_size_change" onclick="bscode_size_return()"><img src="images/syukusyou.png"></span>';
}

function bscode_size_return() {
document.getElementById("bscode").classList.remove("app_size");
document.getElementById("bscode_size").innerHTML = '<span class="app_size_change" onclick="bscode_size()"><img src="images/kakudai.png"></span>';
}
// //app_bscode

// app_mytube
function mytube_open() {
  document.getElementById("mytube").classList.remove("app_close_anime");
  document.getElementById("mytube").style.display = "block";
}

function mytube_close() {
  document.getElementById("mytube").classList.add("app_close_anime");
}

function mytube_size() {
document.getElementById("mytube").classList.add("app_size");
document.getElementById("mytube_size").innerHTML = '<span class="app_size_change" onclick="mytube_size_return()"><img src="images/syukusyou.png"></span>';
}

function mytube_size_return() {
document.getElementById("mytube").classList.remove("app_size");
document.getElementById("mytube_size").innerHTML = '<span class="app_size_change" onclick="mytube_size()"><img src="images/kakudai.png"></span>';
}
// //app_mytube

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
durations.innerHTML = document.getElementById('music_p').duration;

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

$('#sita_icon_internet').hover(
  function() {
    document.getElementById("pre_internet").style.display = "block";
    document.getElementById("pre_internet").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_internet").classList.add("preanime_close");
  }
);

$('#sita_icon_music_player').hover(
  function() {
    document.getElementById("pre_music_player").style.display = "block";
    document.getElementById("pre_music_player").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_music_player").classList.add("preanime_close");
  }
);

$('#sita_icon_setting').hover(
  function() {
    document.getElementById("pre_setting").style.display = "block";
    document.getElementById("pre_setting").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_setting").classList.add("preanime_close");
  }
);

$('#sita_icon_feedback').hover(
  function() {
    document.getElementById("pre_feedback").style.display = "block";
    document.getElementById("pre_feedback").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_feedback").classList.add("preanime_close");
  }
);

$('#sita_icon_addon_store').hover(
  function() {
    document.getElementById("pre_store").style.display = "block";
    document.getElementById("pre_store").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_store").classList.add("preanime_close");
  }
);

$('#sita_icon_clock').hover(
  function() {
    document.getElementById("pre_clock").style.display = "block";
    document.getElementById("pre_clock").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_clock").classList.add("preanime_close");
  }
);

$('#sita_icon_cal').hover(
  function() {
    document.getElementById("pre_cal").style.display = "block";
    document.getElementById("pre_cal").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_cal").classList.add("preanime_close");
  }
);

$('#sita_icon_memo').hover(
  function() {
    document.getElementById("pre_memo").style.display = "block";
    document.getElementById("pre_memo").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_memo").classList.add("preanime_close");
  }
);

$('#sita_icon_filer').hover(
  function() {
    document.getElementById("pre_filer").style.display = "block";
    document.getElementById("pre_filer").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_filer").classList.add("preanime_close");
  }
);

$('#sita_icon_camera').hover(
  function() {
    document.getElementById("pre_camera").style.display = "block";
    document.getElementById("pre_camera").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_camera").classList.add("preanime_close");
  }
);

$('#sita_icon_bscode').hover(
  function() {
    document.getElementById("pre_bscode").style.display = "block";
    document.getElementById("pre_bscode").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_bscode").classList.add("preanime_close");
  }
);

$('#sita_icon_mytube').hover(
  function() {
    document.getElementById("pre_mytube").style.display = "block";
    document.getElementById("pre_mytube").classList.remove("preanime_close");
  }, function() {
    document.getElementById("pre_mytube").classList.add("preanime_close");
  }
);

function ac_name_changer() {
  document.getElementById("ac_name_change").style.display = "block";
}

function name_decide() {
  account_name.innerHTML = document.getElementById("ac_name_pre").value + " さん";
  document.getElementById("ac_name_change").style.display = "none";
}