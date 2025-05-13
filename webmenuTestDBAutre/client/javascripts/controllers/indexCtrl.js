/*
 * Contrôleur de la vue
 *
 * @author Esther Pham
 * @version 1.0 / 20.03.25
 */

// Set a limit for the number of items displayed

/**
 * Méthode appelée pour vérifier si le login est OK
 * @param {type} data
 * @param {type} text
 * @param {type} jqXHR
 */
function connectSuccess(data, text, jqXHR) {
  if ($(data).find("result").text() == 'true') {
    console.log("Login ok");
    location.replace("../client/admin.html");
  }
  else {
    alert("Erreur lors du login");
  }
}
/**
 * Méthode appelée pour vérifier si le logout est OK
 * @param {type} data 
 * @param {type} text 
 * @param {type} jqXHR 
 */
function disconnectSuccess(data, text, jqXHR) {
  alert("Utilisateur déconnecté");
  location.replace("../client/index.html");
}

function checkConnectSuccess(data, text, jqXHR) {
  if ($(data).find("result").text() == 'true') {
    console.log("L'utilisateur est bien connecté");
  } else {
    alert("L'utilisateur n'est pas connecté");
  }
}

/**
 * Méthode appelée pour afficher les boissons
 * @param {type} data 
 * @param {type} text 
 * @param {type} jqXHR 
 */

function chargerBoissonsClientSuccess(data, text, jqXHR) {
  let listeBoissons = $("#listeBoissons");
  let listeBoissonsAlcool = $("#listeBoissonsAlcool");
  // listeBoissons.empty();
  let txt = '';
  let txtTitre = "Voici le menu des boissons 🥛☕🫖🍾🫗";
  let titre = $("#titleBoissons");
  titre.text(txtTitre);
  $(data).find("boisson").each(function () {
    let nom = $(this).find("nom").text();
    let description = $(this).find("description").text();
    let volume = $(this).find("volume").text();
    let quantite = $(this).find("quantite").text();
    let prix = $(this).find("prix").text();
    let alcool = $(this).find("alcool").text();
    txt = "<div class='list-item'>"
      + "<div><label>Nom : " + nom + "</label></div>"
      + "<div><label>Description : " + description + "</label></div>"
      + "<div><label>Volume : " + volume + "</label></div>"
      + "<div><label>Quantité : " + quantite + "</label></div>";
    + "<div><label>Prix : " + prix + "</label></div>";
    if (alcool == 1) {
      txt = txt + "<div class='lblEtchkBx'><label class='alcoolLbl'>Alcoolisé : </label><input type='checkbox' checked='checked' class='alcool' disabled></div></div>";
      $(txt).appendTo(listeBoissonsAlcool);
    } else {
      txt = txt + "<div class='lblEtchkBx'><label class='alcoolLbl'>Alcoolisé : </label><input type='checkbox' class='alcool' disabled></div></div>";
      $(txt).appendTo(listeBoissons);
    }
  });
  startAutomaticTransitions();
  // startAutomaticTransitions(() => {
  //   chargerEncasClient(chargerEncasClientSuccess, callbackError);
  // });
}

function chargerBoissonsSuccess(data, text, jqXHR) {
  let listeBoissons = $("#listeBoissons");
  let txt = '';

  $(data).find("boisson").each(function () {

    let pk = $(this).find("pk").text();
    let nom = $(this).find("nom").text();
    let description = $(this).find("description").text();
    let volume = $(this).find("volume").text();
    let quantite = $(this).find("quantite").text();
    let prix = $(this).find("prix").text();
    let alcool = $(this).find("alcool").text();
    txt = "<div class='list-item'><button class='modifBoisson' data-pk='" + pk + "'>"
      + "<img src='./images/editIcon.png' alt='edit_icon' class='item-image'></button>"
      + "<div><label class='nom'>Nom : " + nom + "</label></div>"
      + "<div><label class='description'>Description : " + description + "</label></div>"
      + "<div><label class='volume'>Volume : " + volume + "</label></div>"
      + "<div><label class='quantite'>Quantité : " + quantite + "</label></div>"
      + "<div><label class='prix'>Prix : " + prix + "</label></div>"
    if (alcool == 1) {
      txt = txt + "<div class='lblEtchkBx'><label class='alcoolLbl'>Alcoolisé : </label><input type='checkbox' checked='checked' class='alcool' disabled></div></div>";
    } else {
      txt = txt + "<div class='lblEtchkBx'><label class='alcoolLbl'>Alcoolisé : </label><input type='checkbox' class='alcool' disabled></div></div>";
    }

    $(txt).appendTo(listeBoissons);
  });
}

function editBoissonSuccess(data, text, jqXHR) {
  if (data) {
    alert("La boisson a bien été modifié");
  }
  else {
    alert("Erreur lors de la modification");
  }
}

function chargerEncasClientSuccess(data, text, jqXHR) {
  // $("#listeBoissons").empty();

  let listeEncas = $("#listeEncas");
  let listeEncasViande = $("#listeEncasViande");
  // listeEncas.empty();
  let txt = '';

  let txtTitre = "Voici le menu des Encas 🍕🍔🍟🌭🍿🥪";
  let titre = $("#titleEncas");
  titre.text(txtTitre);

  $(data).find("collation").each(function () {

    let pk = $(this).find("pk").text();
    let nom = $(this).find("nom").text();
    let description = $(this).find("description").text();
    let poids = $(this).find("poids").text();
    let quantite = $(this).find("quantite").text();
    let prix = $(this).find("prix").text();
    let vegetarien = $(this).find("vegetarien").text();
    txt = "<div class='list-item'>"
      + "<div><label>Nom : " + nom + "</label></div>"
      + "<div><label>Description : " + description + "</label></div>"
      + "<div><label>Poids : " + poids + "</label></div>"
      + "<div><label>Quantité : " + quantite + "</label></div>"
      + "<div><label>Prix : " + prix + "</label></div>";
    if (vegetarien == 1) {
      txt = txt + "<div class='lblEtchkBx'><label class='vegetarienLbl'>Végétarien : </label><input type='checkbox' checked='checked' class='vegetarien' disabled></div></div>";
      $(txt).appendTo(listeEncas);
    } else {
      txt = txt + "<div class='lblEtchkBx'><label class='vegetarienLbl'>Végétarien : </label><input type='checkbox' class='vegetarien' disabled></div></div>";
      $(txt).appendTo(listeEncasViande);
    }
  });
  startAutomaticTransitions();
  // startAutomaticTransitions(() => {
  //   chargerBoissonsClient(chargerBoissonsClientSuccess, callbackError);
  // });
}

function chargerEncasSuccess(data, text, jqXHR) {
  let listeEncas = $("#listeEncas");
  let txt = '';

  $(data).find("collation").each(function () {

    let pk = $(this).find("pk").text();
    let nom = $(this).find("nom").text();
    let description = $(this).find("description").text();
    let poids = $(this).find("poids").text();
    let quantite = $(this).find("quantite").text();
    let prix = $(this).find("prix").text();
    let vegetarien = $(this).find("vegetarien").text();

    txt = "<div class='list-item'><button class='modifEncas' data-pk='" + pk + "'>"
      + "<img src='./images/editIcon.png' alt='edit_icon' class='item-image'></button>"
      + "<div><label class='nom'>Nom : " + nom + "</label></div>"
      + "<div><label class='description'>Descritpion : " + description + "</label></div>"
      + "<div><label class='poids'>Poids : " + poids + "</label></div>"
      + "<div><label class='quantite'>Quantité : " + quantite + "</label></div>"
      + "<div><label class='prix'>Prix : " + prix + "</label></div>"
    if (vegetarien == 1) {
      txt = txt + "<div class='lblEtchkBx'><label class='vegetarienLbl'>Végétarien : </label><input type='checkbox' checked='checked' class='vegetarien' disabled></div></div>";
    } else {
      txt = txt + "<div class='lblEtchkBx'><label class='vegetarienLbl'>Végétarien : </label><input type='checkbox' class='vegetarien' disabled></div></div>";
    }

    $(txt).appendTo(listeEncas);
  });
}

function editEncasSuccess(data, text, jqXHR) {
  if (data) {
    alert("L'encas a bien été modifié");
  }
  else {
    alert("Erreur lors de la modification");
  }
}

function editBoisson(pk) {
  // bloque les autres boutons pr modifier
  $(".modifBoisson").each(function () {
    console.log("Disabling button:", $(this));
    $(this).prop("disabled", true);
  });
  $(".modifEncas").prop("disabled", true);

  // You can use the pk to identify the item to edit
  // If you want to modify the content on the page, you can find the element associated with the PK
  let item = $(".modifBoisson[data-pk='" + pk + "']").closest('.list-item');


  let labels = item.find('label').map(function () {
    return $(this).text().split(":")[1]?.trim(); // Get text after ":" and trim spaces
  }).get();

  let [nom, description, volume, quantite, prix] = labels; // Destructure array
  let alcool = item.find('input').eq(0).prop("checked");
  // Extract only numbers from poids and prix
  volume = volume.replace(/[^\d.]/g, ""); // Remove non-numeric characters except "."
  prix = prix.replace(/[^\d.]/g, "");   // Remove non-numeric characters except "."


  // console.log(nom, description, volume, quantite, prix, alcool);
  // console.log(alcool);


  item.find('.nom').replaceWith("<div class='edit'><label>Nom : </label><input type='text' id='edit-nom' value='" + nom + "' id='nom'></div>");
  item.find('.description').replaceWith("<div class='edit'><label>Description : </label><input type='text' id='edit-description' value='" + description + "' id='description'></div>");
  item.find('.volume').replaceWith("<div class='edit'><label>Volume (en ml) : </label><input type='text' id='edit-volume' value= '" + volume + "' id='volume'></div>");
  item.find('.quantite').replaceWith("<div class='edit'><label>Quantité : </label><input type='number' id='edit-quantite' value='" + quantite + "' id='quantite'></div>");
  item.find('.prix').replaceWith("<div class='edit'><label>Prix : </label><input type='text' id='edit-prix' value= '" + prix + "' id='prix'></div>");
  item.find('.alcool').replaceWith("<input type='checkbox' id='edit-alcool' " + (alcool ? "checked" : "") + ">");
  item.find('.modifBoisson').replaceWith("<button class='sauveBoisson' data-pk='" + pk + "'><img src='./images/saveIcon.png' alt='save_icon' class='item-image'></button>");

}
function editEncas(pk) {
  // bloque les autres boutons pr modifier
  $(".modifEncas").each(function () {
    // console.log("Disabling button:", $(this));
    $(this).prop("disabled", true);
  });
  $(".modifBoisson").prop("disabled", true);


  // You can use the pk to identify the item to edit
  // If you want to modify the content on the page, you can find the element associated with the PK
  let item = $(".modifEncas[data-pk='" + pk + "']").closest('.list-item');

  let labels = item.find('label').map(function () {
    return $(this).text().split(":")[1]?.trim(); // Get text after ":" and trim spaces
  }).get();

  let [nom, description, poids, quantite, prix, vegetarien] = labels; // Destructure array
  vegetarien = item.find('input').eq(0).prop("checked");

  // Extract only numbers from poids and prix
  poids = poids.replace(/[^\d.]/g, ""); // Remove non-numeric characters except "."
  prix = prix.replace(/[^\d.]/g, "");   // Remove non-numeric characters except "."


  // console.log(pk);

  item.find('.nom').replaceWith("<div class='edit'><label>Nom : </label><input type='text' id='edit-nom' value='" + nom + "'></div>");
  item.find('.description').replaceWith("<div class='edit'><label>Description : </label><input type='text' id='edit-description' value='" + description + "'></div>");
  item.find('.poids').replaceWith("<div class='edit'><label>Poids (en gr) : </label><input type='text' id='edit-poids' value='" + poids + "'></div>");
  item.find('.quantite').replaceWith("<div class='edit'><label>Quantité : </label><input type='number' id='edit-quantite' value='" + quantite + "'></div>");
  item.find('.prix').replaceWith("<div class='edit'><label>Prix : </label><input type='text' id='edit-prix' value='" + prix + "'></div>");
  item.find('.vegetarien').replaceWith("<input type='checkbox' id='edit-vegetarien' " + (vegetarien ? "checked" : "") + ">");
  item.find('.modifEncas').replaceWith("<button class='sauveEncas' data-pk='" + pk + "'><img src='./images/saveIcon.png' alt='save_icon' class='item-image'></button>");

}

/**
 * Méthode appelée en cas d'erreur lors de la lecture du webservice
 * @param {type} data
 * @param {type} text
 * @param {type} jqXHR
 */
function callbackError(request, status, error) {
  if (request.status === 401) {
    location.replace("../client/login.html");
    alert("erreur : " + request.status + " vous n'êtes pas connecté");
  } else if (request.status === 503) {
    alert("erreur : " + request.status + " une erreur s'est produite lors de la modification. Veuillez réessayer.");
  }
  else {
    alert("une erreur inconnue est survenue. Erreur :" + error + " Resquest : " + request + " Status : " + status);
  }
}

function startAutomaticTransitions() {
  const items = $(".list-item").toArray(); // Convert jQuery object to array of DOM elements
  const overlay = $(".transition-overlay").toArray();

  // Animate the current page's elements

  anime.timeline({
    loop: false,
  })
    .add({
      targets: overlay,
      translateX: ['-100vw', '0'], // Slide in from the left
      duration: 1000,
      easing: 'easeInOutCubic', // Smooth sliding
    })
    .add({
      targets: overlay,
      delay: 1500, // Wait a moment before sliding out
      translateX: ['0', '100vw'], // Slide out to the right
      duration: 1000,
      easing: 'easeInOutCubic',
      complete: function () {
        // setTimeout(() => {
        // Navigate to the new page after the slide-out animation
        if (location.href.endsWith("index.html")) {
          location.replace("../client/encas.html");
        } else {
          location.replace("../client/index.html");
        }
        // }, 1000);
      },
    });
}
// .add({
//   targets: items,
//   opacity: [1, 0], // Fade out
//   rotateY: [0, -20], // Rotate out to -90 degrees
//   duration: 800, // Duration of disappearance
//   easing: "easeInCubic", // Smooth easing for disappearance
//   delay: anime.stagger(800), // Stagger each item's disappearance
//   complete: function () {
//     location.replace("../client/encas.html");
//   }
// });
// }
// complete: function () {
//   // Animate the transition overlay
//   anime.timeline({
//     loop: false,
//     easing: "easeInOutCubic",
//   })
//     .add({
//       targets: overlay,
//       scale: [1, 0.5], // Scale the overlay for effect
//       opacity: [0, 1], // Fade in
//       duration: 1500, // Duration for visibility
//       complete: function () {
//         // Navigate to the new page
//         if (location.href.endsWith("boissons.html")) {
//           location.replace("../client/encas.html");
//         } else {
//           location.replace("../client/boissons.html");
//         }
//       }
//     });
// }


/**
 * Méthode "start" appelée après le chargement complet de la page
 */
$(document).ready(function () {
  let butConnect = $("#connect");
  let butDisconnect = $("#disconnect");
  let butLogin = $("#login");
  let butMenu = $("#menu");

  $.getScript("javascripts/services/servicesHttp.js", function () {
    console.log("servicesHttp.js chargé !");

    // chargement des boissons et encas    

    // chargerEncasClient(chargerEncasClientSuccess, callbackError);
    if (location.href.endsWith("index.html")) {
      chargerBoissonsClient(chargerBoissonsClientSuccess, callbackError);
    }
    if (location.href.endsWith("encas.html")) {
      chargerEncasClient(chargerEncasClientSuccess, callbackError);
    }

    if (location.href.endsWith("admin.html")) {
      checkConnect(checkConnectSuccess, callbackError);
      chargerBoissons(chargerBoissonsSuccess, callbackError);
      chargerEncas(chargerEncasSuccess, callbackError);
    }
  });

  butConnect.click(function (event) {
    let login = document.getElementById("txtLogin").value;
    let mdp = document.getElementById("txtPwd").value;
    connect(login, mdp, connectSuccess, callbackError);
  });
  butDisconnect.click(function (event) {
    disconnect(disconnectSuccess, callbackError);
  });
  butLogin.click(function (event) {
    location.replace("../client/login.html");
  });
  butMenu.click(function (event) {
    location.replace("../client/boissons.html");
  });


  $(document).on('click', '.modifBoisson', function () {
    let pk = $(this).data('pk');
    console.log("Editing item with PK: " + pk);
    // Call your function to handle the editing
    editBoisson(pk);
  });
  $(document).on('click', '.modifEncas', function () {
    let pk = $(this).data('pk');
    console.log("Editing item with PK: " + pk);
    // Call your function to handle the editing
    editEncas(pk);
  });
  $(document).on('click', '.sauveBoisson', function () {
    let pk = $(this).data('pk');
    console.log("save button has been clicked with the PK : " + pk);
    let nom = document.getElementById("edit-nom").value;
    let description = document.getElementById("edit-description").value;
    let volume = document.getElementById("edit-volume").value;
    let quantite = document.getElementById("edit-quantite").value;
    let prix = document.getElementById("edit-prix").value;
    let alcool = document.getElementById("edit-alcool").checked;
    // console.log(pk, nom, description, volume, quantite, prix, alcool);
    modifierBoisson(pk, nom, description, volume, quantite, prix, alcool, editBoissonSuccess, callbackError);
    location.reload();
  });
  $(document).on('click', '.sauveEncas', function () {
    let pk = $(this).data('pk');
    console.log("save button has been clicked with the PK : " + pk);
    let nom = document.getElementById("edit-nom").value;
    let description = document.getElementById("edit-description").value;
    let poids = document.getElementById("edit-poids").value;
    let quantite = document.getElementById("edit-quantite").value;
    let prix = document.getElementById("edit-prix").value;
    let vegetarien = document.getElementById("edit-vegetarien").checked;
    // console.log(pk, nom, description, poids, quantite, prix, vegetarien);
    modifierEncas(pk, nom, description, poids, quantite, prix, vegetarien, editEncasSuccess, callbackError);
    location.reload();
  });
});