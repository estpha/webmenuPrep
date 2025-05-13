<?php
include_once('../services/LoginBD.php');
include_once('../controllers/SessionCheck.php');
session_start();

//créer SessionCheck
$session = new SessionCheck;
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
  if(isset($_POST['action']) == "connect"){       
    //créer loginBD
    $login = new LoginBD();
    //test retour boolean
    if(isset($_POST['login'])&& isset($_POST['password']) ){
      if ($login->checklogin($_POST['login'], $_POST['password'])) {
        $session->openSession();              
        echo '<result>true</result>';
      }else{
        $session->destroySession();
        echo '<result>le login est faux</result>';
      }
    }else{
      $session->destroySession();
      echo '<result>false</result>';
    }                 
  }else if($_POST['action'] == "disconnect") {
      $session->destroySession();
      echo '<result>true</result>';
  }
}
if ($_SERVER['REQUEST_METHOD'] == 'GET'){
  if($session->isConnected()){ 
      $listeLogin = new LoginBD();
      echo '<result>true</result>';
  }else {
    http_response_code(401);
  }
}
?>