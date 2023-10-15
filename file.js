var obj = document.getElementById("myfile");
          
          obj.addEventListener("change", function(evt){
            var file = evt.target.files;
            var reader = new FileReader();
            
            //dataURL形式でファイルを読み込む
            reader.readAsDataURL(file[0]);
            
            //ファイルの読込が終了した時の処理
            reader.onload = function(){
              var dataUrl = reader.result;
            
            if (dataUrl.indexOf('mp3') != -1 || dataUrl.indexOf('wav') != -1 || dataUrl.indexOf('ogg') != -1 || dataUrl.indexOf('m4a') != -1 || dataUrl.indexOf('aac') != -1) {
                document.getElementById("music_p").innerHTML = "<audio id='music' src='" + dataUrl + "' name='output'></audio>";
            }
            if (dataUrl.indexOf('mp4') != -1 || dataUrl.indexOf('ogv') != -1 || dataUrl.indexOf('webm') != -1) {
                document.getElementById("video_p").innerHTML = "<video id='video' src='" + dataUrl + "' name='output' width='800px' height='500px'></video>";
            }
           }
          },false);

var obj2 = document.getElementById("m");
          
          obj2.addEventListener("change", function(evt){
            var file2 = evt.target.files;
            var reader2 = new FileReader();
            
            //dataURL形式でファイルを読み込む
            reader2.readAsDataURL(file2[0]);
            
            //ファイルの読込が終了した時の処理
            reader2.onload = function(){
              var dataUrl = reader2.result;
          
              //読み込んだ画像とdataURLを書き出す
              document.getElementById("bgs").innerHTML = "<video id='vid' src='" + dataUrl + "' name='output' controls width='700px' height='500px'></video>";
            }
          },false);
