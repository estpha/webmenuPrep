<?php
include_once('Connexion.php');
include_once('../beans/Encas.php');
class EncasBD
{
  /**
   * méthode appelé pour récupérer toutes les categories
   * par rapport à la BD
   */
  public function getAllClient()
  {
    $sql = "SELECT * FROM t_encas WHERE quantite > 0";
    $params = array();
    $count = 0;
    $listeEncas = array();
    $connect = Connexion::getInstance();
    $collation = $connect->selectQuery($sql, $params);
    foreach ($collation as $data) {
      $encas = new Encas($data['pk_encas'], $data['nom'], $data['description'], $data['poids'], $data['quantite'], $data['prix'], $data['vegetarien']);
      $listeEncas[$count++] = $encas;
    }
    return $listeEncas;
  }

  /**
   * méthode pour mettre en forme en xml les encas qui ont plus que 0 dans la quantité
   */
  public function getInXMLClient()
  {
    $listeEncas = $this->getAllClient();
    $result = '<collations>';
    for ($i = 0; $i < sizeof($listeEncas); $i++) {
      $result = $result . $listeEncas[$i]->toXML();
    }
    $result = $result . '</collations>';
    return $result;
  }

  public function getAll()
  {
    $sql = "SELECT * FROM t_encas";
    $params = array();
    $count = 0;
    $listeEncas = array();
    $connect = Connexion::getInstance();
    $collation = $connect->selectQuery($sql, $params);
    foreach ($collation as $data) {
      $encas = new Encas($data['pk_encas'], $data['nom'], $data['description'], $data['poids'], $data['quantite'], $data['prix'], $data['vegetarien']);
      $listeEncas[$count++] = $encas;
    }
    return $listeEncas;
  }

  /**
   * méthode pour mettre en forme en xml les encas
   */
  public function getInXML()
  {
    $listeEncas = $this->getAll();
    $result = '<collations>';
    for ($i = 0; $i < sizeof($listeEncas); $i++) {
      $result = $result . $listeEncas[$i]->toXML();
    }
    $result = $result . '</collations>';
    return $result;
  }

  public function modifEncas($pk, $nom, $description, $poids, $quantite, $prix, $vegetarien)
  {
    //on vérifie si la variable contient des caractères spéciaux
    $escapedNom = htmlspecialchars($nom, ENT_QUOTES, 'UTF-8');
    $escapedDescription = htmlspecialchars($description, ENT_QUOTES, 'UTF-8');

    // variable connection pour les méthodes de select et execute
    $connection = Connexion::getInstance();

    // modification de la boissons ds la DB
    if ($vegetarien === "true") {
      $sql = "UPDATE t_encas SET nom=:nom, description=:description, poids=:poids, quantite=:quantite, prix=:prix, vegetarien=:vegetarien WHERE pk_encas=:pk";
      $params = ['pk' => $pk, 'nom' => $escapedNom, 'description' => $escapedDescription, 'poids' => $poids, 'quantite' => $quantite, 'prix' => $prix, 'vegetarien' => 1];
      $resultat = $connection->executeQuery($sql, $params);
    } else {
      $sql = "UPDATE t_encas SET nom=:nom, description=:description, poids=:poids, quantite=:quantite, prix=:prix, vegetarien=:vegetarien WHERE pk_encas=:pk";
      $params = ['pk' => $pk, 'nom' => $escapedNom, 'description' => $escapedDescription, 'poids' => $poids, 'quantite' => $quantite, 'prix' => $prix, 'vegetarien' => 0];
      $resultat = $connection->executeQuery($sql, $params);
    }
    if ($resultat === false) {
      return '<result>modification KO</result>';
    } else {
      return '<result>true</result>';
    }
  }
}
?>