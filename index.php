<?php
session_start();
if(!$_SESSION['login']){
    header('Location: index.html');
}
?>
<html>
<body>
    ログイン成功！    
</body>
</html>
