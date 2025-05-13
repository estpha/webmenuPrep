<?php
include_once('../controllers/SessionCheck.php');
include_once('../services/BoissonBD.php');
session_start();
//créer SessionCheck
$session = new SessionCheck;
if (isset($_SERVER['REQUEST_METHOD'])) {
  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if ($_GET['action'] == "getBoissonsClient") {
      $listeBoissons = new BoissonBD();
      echo $listeBoissons->getInXMLAllClient();
    }
    if ($_GET['action'] == "getBoissons") {
      $listeBoissons = new BoissonBD();
      echo $listeBoissons->getInXMLAll();
    }
  }
  if ($session->isConnected()) {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      if ($_POST['action'] == "modifierBoisson") {
        $editBoisson = new BoissonBD();
        $result = $editBoisson->modifBoisson($_POST['pk'], $_POST['nom'], $_POST['description'], $_POST['volume'], $_POST['quantite'], $_POST['prix'], $_POST['alcool']);
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