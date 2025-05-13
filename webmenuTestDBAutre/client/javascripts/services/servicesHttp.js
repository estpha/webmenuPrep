/*
 * Couche de services HTTP
 * 
 * Auteur : Esther Pham
 * Date de création : 26.02.2024
 * 
 */

var LOGIN_URL = ".././server/controllers/login.php";
var BOISSON_URL = ".././server/controllers/boisson.php";
var ENCAS_URL = ".././server/controllers/encas.php";

/**
 * Méthode appelé pour se login à la BD et démarrer une session
 * @param {type} String 
 * @param {type} String
 * @param {type} Function appelé si le POST est réussi 
 * @param {type} Function appelé si le POST n'a pas réussi
 */
function connect(user, passwd, successCallback, errorCallback) {
  $.ajax({
    type: "POST",
    dataType: "xml",
    url: LOGIN_URL,
    data: {
      action: 'connect',
      password: passwd,
      login: user
    },
    success: successCallback,
    error: errorCallback
  });
}
/**
 * Méthode appelé pour se logout à la BD et détruire la session en cours
 * @param {type} Function appelé si le POST est réussi 
 * @param {type} Function appelé si le POST n'a pas réussi
 */
function disconnect(successCallback, errorCallback) {
  $.ajax({
    type: "POST",
    dataType: "xml",
    url: LOGIN_URL,
    data: 'action=disconnect',
    success: successCallback,
    error: errorCallback
  });
}

/**
 * Méthode appelé pour récupérer toutes les boissons qui se trouvent dans la BD
 * @param {type} successCallback
 * @param {type} errorCallback
 */
function chargerBoissonsClient(successCallback, errorCallback) {
  $.ajax({
    type: "GET",
    dataType: "xml",
    url: BOISSON_URL,
    data: 'action=getBoissonsClient',
    success: successCallback,
    error: errorCallback
  });
}

function chargerBoissons(successCallback, errorCallback) {
  $.ajax({
    type: "GET",
    dataType: "xml",
    url: BOISSON_URL,
    data: 'action=getBoissons',
    success: successCallback,
    error: errorCallback
  });
}

/**
 * Méthode appelé pour récupérer tous les encas qui se trouvent dans la BD
 * @param {type} successCallback 
 * @param {type} errorCallback 
 */
function chargerEncasClient(successCallback, errorCallback) {
  $.ajax({
    type: "GET",
    dataType: "xml",
    url: ENCAS_URL,
    data: 'action=getEncasClient',
    success: successCallback,
    error: errorCallback
  });
}

function chargerEncas(successCallback, errorCallback) {
  $.ajax({
    type: "GET",
    dataType: "xml",
    url: ENCAS_URL,
    data: 'action=getEncas',
    success: successCallback,
    error: errorCallback
  });
}

/**
 * Méthode appelé pour vérifier la connexion en tant qu'admin
 * @param {type} Function appelé si le GET est réussi 
 * @param {type} Function appelé si le GET n'a pas réussi
 */
function checkConnect(successCallback, errorCallback) {
  $.ajax({
    type: "GET",
    dataType: "xml",
    url: LOGIN_URL,
    success: successCallback,
    error: errorCallback
  });
}


/**
 * Méthode appelé pour modifier une boisson
 * @param {Integer} pk 
 * @param {String} nom 
 * @param {String} description 
 * @param {Float} volume 
 * @param {Integer} quantite 
 * @param {Float} prix 
 * @param {Boolean} alcool 
 * @param {Function} successCallback 
 * @param {Function} errorCallback 
 */
function modifierBoisson(pk, nom, description, volume, quantite, prix, alcool, successCallback, errorCallback) {
  $.ajax({
    type: "POST",
    dataType: "xml",
    url: BOISSON_URL,
    data: {
      action: 'modifierBoisson',
      pk: pk,
      nom: nom,
      description: description,
      volume: volume,
      quantite: quantite,
      prix: prix,
      alcool: alcool
    },
    success: successCallback,
    error: errorCallback
  });
}

/**
 * Méthode appelé pour modifier un encas
 * @param {Integer} pk 
 * @param {String} nom 
 * @param {String} description 
 * @param {Float} poids 
 * @param {Integer} quantite 
 * @param {Float} prix 
 * @param {Boolean} alcool 
 * @param {Function} successCallback 
 * @param {Function} errorCallback 
 */
function modifierEncas(pk, nom, description, poids, quantite, prix, vegetarien, successCallback, errorCallback) {
  $.ajax({
    type: "POST",
    dataType: "xml",
    url: ENCAS_URL,
    data: {
      action: 'modifierEncas',
      pk: pk,
      nom: nom,
      description: description,
      poids: poids,
      quantite: quantite,
      prix: prix,
      vegetarien: vegetarien
    },
    success: successCallback,
    error: errorCallback
  });
}