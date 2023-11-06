const sessionKey = "accesed";
const sessionValue = true;

//sessionStorageにsessionKeyというデータの有無を判別
if (!sessionStorage.getItem(sessionKey)) {
  //初回アクセス時の処理
  document.getElementById("firstsession").style.display = "block";
    //sessionStorageにデータを追加
    sessionStorage.setItem(sessionKey, sessionValue);
} else {

}