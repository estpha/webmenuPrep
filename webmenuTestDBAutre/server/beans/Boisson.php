<?php
class Boisson
{
  private $pk;
  private $nom;
  private $description;
  private $volume;
  private $quantite;
  private $prix;
  private $alcool;

  /**
   * constructeur du beans boisson
   * @param {type} Integer
   * @param {type} String
   * @param {type} String
   * @param {type} Double
   * @param {type} Integer
   * @param {type} Double
   * @param {type} Boolean
   */
  public function __construct($pk, $nom, $description, $volume, $quantite, $prix, $alcool)
  {
    $this->pk = $pk;
    $this->nom = $nom;
    $this->description = $description;
    $this->volume = $volume;
    $this->quantite = $quantite;
    $this->prix = $prix;
    $this->alcool=$alcool;
  }

  /**
   * getter de la pk de la boisson
   */
  public function getPK()
  {
    return $this->pk;
  }

  /**
   * getter du nom de la boisson
   */
  public function getNom()
  {
    return $this->nom;
  }

  /**
   * getter de la description de la boisson
   */
  public function getDescription()
  {
    return $this->description;
  }

  /**
   * getter du volume de la boisson
   */
  public function getVolume()
  {
    return $this->volume;
  }

  /**
   * getter de la quantite de la boisson
   */
  public function getQuantite()
  {
    return $this->quantite;
  }

  /**
   * getter du prix de la boisson
   */
  public function getPrix()
  {
    return $this->prix;
  }

  /**
   * getter de la valeur u
   */
  public function isAlcool()
  {
    return $this->alcool;
  }

  /**
   * setter du nom de la boisson
   * @param {type} String
   */
  public function setNom($nom)
  {
    $this->nom = $nom;
  }

  /**
   * setter de la description de la boisson
   * @param {type} String
   */
  public function setDescription($description)
  {
    $this->description = $description;
  }

  /**
   * setter du volume de la boisson
   * @param {type} Double
   */
  public function setVolume($volume)
  {
    $this->volume = $volume;
  }

  /**
   * setter de la quantite de la boisson
   * @param {type} Integer
   */
  public function setQuantite($quantite)
  {
    $this->quantite = $quantite;
  }

  /**
   * setter du prix de la boisson
   * @param {type} Double
   */
  public function setPrix($prix)
  {
    $this->prix = $prix;
  }

  /**
   * setter de la valeur alcoolde la boisson
   */
  public function setAlcool($alcool)
  {
    $this->alcool = $alcool;
  }

  /**
   * mise en forme en xml des données de la boisson
   */
  public function toXML()
  {
    $result = '<boisson>';
    $result = $result . '<pk>' . $this->getPK() . '</pk>';
    $result = $result . '<nom>' . $this->getNom() . '</nom>';
    $result = $result . '<description>' . $this->getDescription() . '</description>';
    $result = $result . '<volume>' . $this->getVolume() . ' ml</volume>';
    $result = $result . '<quantite>' . $this->getQuantite() . '</quantite>';
    $result = $result . '<prix>' . $this->getPrix() . ' CHF</prix>';
    $result = $result . '<alcool>' . $this->isAlcool() . '</alcool>';
    $result = $result . '</boisson>';
    return $result;
  }
}
?>