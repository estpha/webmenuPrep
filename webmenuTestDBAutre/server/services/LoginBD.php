<?php
include_once('Connexion.php');
include_once('../beans/Login.php');
class LoginBD{
    /**
     * Méthode appelé pour vérifié si le mdp du login est correct ou non
     * @param {type} String
     * @param {type} String
     */
    public function checkLogin($user, $pwd){
        $sql = "SELECT mdp FROM t_login WHERE login = :login";
        $params = array(":login" => $user);                
        $connect = Connexion::getInstance();
        $hashedMdp = $connect->executeQuery($sql, $params);
        if($hashedMdp !== false && $hashedMdp->rowCount() == 1){
          $result = $hashedMdp->fetch(PDO::FETCH_ASSOC);
          if (password_verify($pwd, $result['mdp'])) {
              return true;
          }else{
              return false;
          }   
        }else{
            return false;
        }  
    }

    /**
     * méthode appelé pour récupérer tous les logins
     */
    public function getAll(){
        $sql = "SELECT * FROM t_login";
        $params = array();
        $count = 0;
        $listelogins = array();
        $connect = Connexion::getInstance();
        $logins = $connect->selectQuery($sql, $params);
        foreach ($logins as $data) {
            $login = new Login($data['pk_login'], $data['login']);
            $listelogins[$count++] = $login;
        }
        return $listelogins;
    }

    /**
     * méthode pour mettre en forme en xml les logins
     */
    public function getInXML(){
        $listelogins = $this->getAll();
        $result = '<logins>';
        for($i=0;$i<sizeof($listelogins);$i++) 
        {
            $result = $result .$listelogins[$i]->toXML();
        }
        $result = $result . '</logins>';
        return $result;
    }
}
?>