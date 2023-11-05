const sessionKey = "accesed";
const sessionValue = true;

//sessionStorageにsessionKeyというデータの有無を判別
if (!sessionStorage.getItem(sessionKey)) {
  //初回アクセス時の処理
  
    //sessionStorageにデータを追加
    sessionStorage.setItem(sessionKey, sessionValue);
} else {

}