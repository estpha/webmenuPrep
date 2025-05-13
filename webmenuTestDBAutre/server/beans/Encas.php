<?php
class Encas
{
  private $pk;
  private $nom;
  private $description;
  private $poids;
  private $quantite;
  private $prix;
  private $vegetarien;
  

  /**
   * constructeur du beans encas
   * @param {type} Integer
   * @param {type} String
   * @param {type} String
   * @param {type} Double
   * @param {type} Integer
   * @param {type} Double
   * @param {type} Boolean
   */
  public function __construct($pk, $nom, $description, $poids, $quantite, $prix, $vegetarien)
  {
    $this->pk = $pk;
    $this->nom = $nom;
    $this->description = $description;
    $this->poids = $poids;
    $this->quantite = $quantite;
    $this->prix = $prix;
    $this->vegetarien =$vegetarien;
  }

  /**
   * getter de la pk de l'encas
   */
  public function getPK()
  {
    return $this->pk;
  }

  /**
   * getter du nom de l'encas
   */
  public function getNom()
  {
    return $this->nom;
  }

  /**
   * getter de la description de l'encas
   */
  public function getDescription()
  {
    return $this->description;
  }

  /**
   * getter du poids de l'encas
   */
  public function getPoids()
  {
    return $this->poids;
  }

  /**
   * getter de la quantite de l'encas
   */
  public function getQuantite()
  {
    return $this->quantite;
  }

  /**
   * getter du prix de l'encas
   */
  public function getPrix()
  {
    return $this->prix;
  }

  /**
   * getter de la valeur vegetarien de l'encas
   */
  public function isVegetarien()
  {
    return $this->vegetarien;
  }

  /**
   * setter du nom de l'encas
   * @param {type} String
   */
  public function setNom($nom)
  {
    $this->nom = $nom;
  }

  /**
   * setter de la description de l'encas
   * @param {type} String
   */
  public function setDescription($description)
  {
    $this->description = $description;
  }

  /**
   * setter du poids de l'encas
   * @param {type} Double
   */
  public function setPoids($poids)
  {
    $this->poids = $poids;
  }

  /**
   * setter de la quantite de l'encas
   * @param {type} Integer
   */
  public function setQuantite($quantite)
  {
    $this->quantite = $quantite;
  }

  /**
   * setter du prix de l'encas
   * @param {type} Double
   */
  public function setPrix($prix)
  {
    $this->prix = $prix;
  }

  /**
   * setter de la valeur vegetarien de l'encas
   */
  public function setVegetarien($vegetarien)
  {
    $this->vegetarien = $vegetarien;
  }

  /**
   * mise en forme en xml des données de l'encas
   */
  public function toXML()
  {
    $result = '<collation>';
    $result = $result . '<pk>' . $this->getPK() . '</pk>';
    $result = $result . '<nom>' . $this->getNom() . '</nom>';
    $result = $result . '<description>' . $this->getDescription() . '</description>';
    $result = $result . '<poids>' . $this->getPoids() . ' g</poids>';
    $result = $result . '<quantite>' . $this->getQuantite() . '</quantite>';
    $result = $result . '<prix>' . $this->getPrix() . ' CHF</prix>';
    $result = $result . '<vegetarien>' . $this->isVegetarien() . '</vegetarien>';
    $result = $result . '</collation>';
    return $result;
  }
}
?>