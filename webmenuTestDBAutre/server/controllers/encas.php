<?php
include_once('../controllers/SessionCheck.php');
include_once('../services/EncasBD.php');
session_start();
//créer SessionCheck
$session = new SessionCheck;
if (isset($_SERVER['REQUEST_METHOD'])) {
  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($_GET['action'] == "getEncasClient") {
      $listeEncas = new EncasBD();
      echo $listeEncas->getInXMLClient();
    }
    if ($_GET['action'] == "getEncas") {
      $listeEncas = new EncasBD();
      echo $listeEncas->getInXML();
    }
  }
  if ($session->isConnected()) {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      if ($_POST['action'] == "modifierEncas") {
        $editEncas = new EncasBD();
        $result = $editEncas->modifEncas($_POST['pk'], $_POST['nom'], $_POST['description'], $_POST['poids'], $_POST['quantite'], $_POST['prix'], $_POST['vegetarien']);
        if ($result === "<result>true</result>") {
          echo $result;
        } else if ($result === "<result>modification KO<</result>") {
          http_response_code(503);
        }
      }
    }
  }
}
?>