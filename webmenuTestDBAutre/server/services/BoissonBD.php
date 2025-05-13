<?php
include_once('Connexion.php');
include_once('../beans/Boisson.php');
class BoissonBD
{
  /**
   * méthode appelé pour récupérer toutes les categories
   * par rapport à la BD
   */
  public function getAllClient()
  {
    $sql = "SELECT * FROM t_boisson WHERE quantite > 0";
    $params = array();
    $count = 0;
    $listeBoissons = array();
    $connect = Connexion::getInstance();
    $boissons = $connect->selectQuery($sql, $params);
    foreach ($boissons as $data) {
      $boisson = new Boisson($data['pk_boisson'], $data['nom'], $data['description'], $data['volume'], $data['quantite'], $data['prix'], $data['alcool']);
      $listeBoissons[$count++] = $boisson;
    }
    return $listeBoissons;
  }

  /**
   * méthode pour mettre en forme en xml les boissons
   */
  public function getInXMLAllClient()
  {
    $listeBoissons = $this->getAllClient();
    $result = '<boissons>';
    for ($i = 0; $i < sizeof($listeBoissons); $i++) {
      $result = $result . $listeBoissons[$i]->toXML();
    }
    $result = $result . '</boissons>';
    return $result;
  }

  public function getAll()
  {
    $sql = "SELECT * FROM t_boisson";
    $params = array();
    $count = 0;
    $listeBoissons = array();
    $connect = Connexion::getInstance();
    $boissons = $connect->selectQuery($sql, $params);
    foreach ($boissons as $data) {
      $boisson = new Boisson($data['pk_boisson'], $data['nom'], $data['description'], $data['volume'], $data['quantite'], $data['prix'], $data['alcool']);
      $listeBoissons[$count++] = $boisson;
    }
    return $listeBoissons;
  }

  public function getInXMLAll()
  {
    $listeBoissons = $this->getAll();
    $result = '<boissons>';
    for ($i = 0; $i < sizeof($listeBoissons); $i++) {
      $result = $result . $listeBoissons[$i]->toXML();
    }
    $result = $result . '</boissons>';
    return $result;
  }

  public function modifBoisson($pk, $nom, $description, $volume, $quantite, $prix, $alcool)
  {
    //on vérifie si la variable contient des caractères spéciaux
    $escapedNom = htmlspecialchars($nom, ENT_QUOTES, 'UTF-8');
    $escapedDescription = htmlspecialchars($description, ENT_QUOTES, 'UTF-8');

    // variable connection pour les méthodes de select et execute
    $connection = Connexion::getInstance();

    // modification de la boissons ds la DB
    if ($alcool === "true") {
      $sql = "UPDATE t_boisson SET nom=:nom, description=:description, volume=:volume, quantite=:quantite, prix=:prix, alcool=:alcool WHERE pk_boisson=:pk";
      $params = ['pk' => $pk, 'nom' => $escapedNom, 'description' => $escapedDescription, 'volume' => $volume, 'quantite' => $quantite, 'prix' => $prix, 'alcool' => 1];
      $resultat = $connection->executeQuery($sql, $params);
    } else {
      $sql = "UPDATE t_boisson SET nom=:nom, description=:description, volume=:volume, quantite=:quantite, prix=:prix, alcool=:alcool WHERE pk_boisson=:pk";
      $params = ['pk' => $pk, 'nom' => $escapedNom, 'description' => $escapedDescription, 'volume' => $volume, 'quantite' => $quantite, 'prix' => $prix, 'alcool' => 0];
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