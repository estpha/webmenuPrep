<?php
class Login{
    private $pk;
    private $login;
    private $mdp;

    /**
     * constructeur du bean login
     * @param {int} pk
     * @param {text} nom
     */
    public function __construct($pk, $login){
        $this->pk = $pk;
        $this->login = $login;
    }

    /**
     * getter de la pk du login
     */
    public function getPk(){
        return $this->pk;
    }

    /**
     * getter du login
     */
    public function getLogin(){
        return $this->login;
    }

    /**
     * getter du mot de passe
     */
    public function getMdp(){
        return $this->mdp;
    }

    public function toXML()
    {
      $result = '<login>';
      $result = $result . '<pk_login>'.$this->getPk().'</pk_login>';
      $result = $result . '<nom>'.$this->getLogin().'</nom>';
      $result = $result . '</login>';
      return $result;
    }
}
?>