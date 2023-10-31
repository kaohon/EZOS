var obj = document.getElementById("up_music");
          
          obj.addEventListener("change", function(evt){
            var music_file = evt.target.files;
            var music_reader = new FileReader();
            
            //dataURL形式でファイルを読み込む
            music_reader.readAsDataURL(music_file[0]);
            
            //ファイルの読込が終了した時の処理
            music_reader.onload = function(){
              var dataUrl = music_reader.result;
            
            if (dataUrl.indexOf('mp3') != -1 || dataUrl.indexOf('wav') != -1 || dataUrl.indexOf('ogg') != -1 || dataUrl.indexOf('m4a') != -1 || dataUrl.indexOf('aac') != -1) {
                document.getElementById("music_p").innerHTML = "<audio id='music' src='" + dataUrl + "' controls></audio>";
            }
            if (dataUrl.indexOf('mp4') != -1 || dataUrl.indexOf('ogv') != -1 || dataUrl.indexOf('webm') != -1) {
                document.getElementById("video_p").innerHTML = "<video id='video' src='" + dataUrl + "' width='800px' height='500px' controls></video>";
            }
           }
          },false);

var obj2 = document.getElementById("up_file");
          
          obj2.addEventListener("change", function(evt){
            var filer_file = evt.target.files;
            var filer_reader = new FileReader();
            
            //dataURL形式でファイルを読み込む
            filer_reader.readAsDataURL(filer_file[0]);
            
            //ファイルの読込が終了した時の処理
            filer_reader.onload = function(){
              var dataUrl = filer_reader.result;
          
              //読み込んだ画像とdataURLを書き出す
              document.getElementById("files").innerHTML = "<video id='vid' src='" + dataUrl + "' controls width='700px' height='500px'></video>";
            }
          },false);

var obj3 = document.getElementById("up_account");
          
          obj3.addEventListener("change", function(evt){
            var account_file = evt.target.files;
            var account_reader = new FileReader();
            
            //dataURL形式でファイルを読み込む
            account_reader.readAsDataURL(account_file[0]);
            
            //ファイルの読込が終了した時の処理
            account_reader.onload = function(){
              var dataUrl = account_reader.result;
          
              //読み込んだ画像とdataURLを書き出す
              document.getElementById("account_icon_w").innerHTML = "<img src='" + dataUrl + "' id='account_icon' width='100px' height='100px'>";
            }
          },false);
