import * as model from "./model.js";
import * as view from "./view.js";

////////////////////////////////////////////////////////////////////////////////
// Session : variables qui représentent l'état de l'application
////////////////////////////////////////////////////////////////////////////////

var session = {
  joueurEnCours: null, // Le joueur courant
  partieEnCours: null, // La partie en train d'être jouée
};

////////////////////////////////////////////////////////////////////////////////
// init : exécutée au démarrage de l'application (voir fichier index.js)
////////////////////////////////////////////////////////////////////////////////

export function init() {
  // On duplique Header et Footer sur chaque page (sauf la première !)
  var $header = $("#shifumiHeader");
  var $footer = $("#shifumiFooter");
  $('div[data-role="page"]').each(function (i) {
    if (i) {
      var $content = $(this).children(":first");
      $header.clone().insertBefore($content);
      $content.after($footer.clone());
    }
  });
  // On initialise les pages (attacher les "handlers" d'événements propres à chaque page)
  VueAccueilController.setEvents();
  VueJeuController.setEvents();
  VueFinController.setEvents();
  // On navigue vers la page d'accueil
  $.mobile.changePage("#vueAccueil");
}

////////////////////////////////////////////////////////////////////////////////
// Controleurs de pages : 1 contrôleur par page, qui porte le nom de la page
//  et contient les "handlers" des événements associés à cette page
////////////////////////////////////////////////////////////////////////////////

class VueAccueilController {
  static setEvents() {
    // définition des "handlers" d'événements sur la page
    $(document).on(
      "pagebeforeshow",
      "#vueAccueil",
      function () {
        this.init();
      }.bind(this)
    );
    $("#btnNouvellePartie").on(
      "click",
      function () {
        this.nouvellePartie();
      }.bind(this)
    );
    $("#btnPhoto").on(
      "click",
      function () {
        this.prendrePhoto();
      }.bind(this)
    );
    $("#nomJoueur").on(
      "input",
      function () {
        this.chargeJoueur();
      }.bind(this)
    );
  }

  static init() {
    // initialisation de la page
    $("#nomJoueur").val("");
    $("#imgPhoto").attr("src", "");
  }

  static chargeJoueur() {
    var nom = $("#nomJoueur").val();
    var joueur = model.JoueurDAO.loadJoueur(nom);
    if (joueur) {
      session.joueurEnCours = joueur;
      $("#imgPhoto").attr("src", joueur.photo);
    } else {
      session.joueurEnCours = new model.Joueur(nom);
      $("#imgPhoto").attr("src", "");
    }
  }

  static nouvellePartie() {
    // on récupère de l'information de la vue en cours
    var nomJoueur = $("#nomJoueur").val();
    if (nomJoueur === "") {
      plugins.toast.showShortCenter("Saisir un nom de joueur");
    } else {
      // On utilise le modèle pour créer une nouvelle partie
      session.partieEnCours = new model.Shifumi(session.joueurEnCours); // charge la partie du joueur depuis le localstorage
      // On "propage" le nom du joueur sur toutes les vues
      $('span[data-role="nomJoueur"]').each(function () {
        $(this).html(session.joueurEnCours.nom);
      });
      // On "propage" la photo du joueur sur toutes les vues
      $('img[data-role="photoJoueur"]').each(function () {
        $(this).attr("src", session.joueurEnCours.photo);
      });
      // Et on passe à une autre vue
      $.mobile.changePage("#vueJeu");
    }
  }

  static prendrePhoto() {
    model.CordovaAPI.takePicture()
      .then((imageData) => {
        session.joueurEnCours.photo = "data:image/jpeg;base64," + imageData;
        $("#imgPhoto").attr("src", session.joueurEnCours.photo);
      })
      .catch((err) => {
        session.joueurEnCours.photo = "";
        $("#imgPhoto").attr("src", "");
        plugins.toast.showShortCenter("Echec Photo : " + err.message);
      });
  }
}

////////////////////////////////////////////////////////////////////////////////
class VueJeuController {
  static setEvents() {
    // définition des "handlers" d'événements sur la page
    $(document).on(
      "pagebeforeshow",
      "#vueJeu",
      function () {
        this.init();
      }.bind(this)
    );
    $("#btnJouerCiseau").on(
      "click",
      function () {
        this.jouer(model.Shifumi.CISEAU);
      }.bind(this)
    );
    $("#btnJouerFeuille").on(
      "click",
      function () {
        this.jouer(model.Shifumi.FEUILLE);
      }.bind(this)
    );
    $("#btnJouerPierre").on(
      "click",
      function () {
        this.jouer(model.Shifumi.PIERRE);
      }.bind(this)
    );
    $("#btnNouveauCoup").on(
      "click",
      function () {
        this.nouveauCoup();
      }.bind(this)
    );
    $("#btnFinPartie").on(
      "click",
      function () {
        this.finPartie();
      }.bind(this)
    );
  }

  static init() {
    // initialisation de la page
    // on active et on montre tous les boutons du joueur
    $("button[id^=btnJouer]").prop("disabled", false).show();
    // on cache toutes les réponses de la machine
    $("img[id^=machine]").hide();
    // on cache la div resultat
    $("#resultat").hide();
  }

  static jouer(coupJoueur) {
    // le joueur a choisi son coup
    // On interroge le modèle pour voir le résultat du nouveau coup
    var resultat = session.partieEnCours.nouveauCoup(coupJoueur);
    // Le score a changé => on sauvegarde la partie en cours
    model.JoueurDAO.saveJoueur(session.partieEnCours.joueur);
    // Et on met à jour la vue :
    // 1. on désactive le bouton cliqué par le joueur et on cache les autres boutons
    switch (coupJoueur) {
      case model.Shifumi.CISEAU:
        $("#btnJouerCiseau").prop("disabled", true);
        $("#btnJouerFeuille").hide();
        $("#btnJouerPierre").hide();
        break;
      case model.Shifumi.FEUILLE:
        $("#btnJouerFeuille").prop("disabled", true);
        $("#btnJouerCiseau").hide();
        $("#btnJouerPierre").hide();
        break;
      case model.Shifumi.PIERRE:
        $("#btnJouerPierre").prop("disabled", true);
        $("#btnJouerCiseau").hide();
        $("#btnJouerFeuille").hide();
    }
    // 2. on affiche le coup joué par la machine
    switch (resultat.mainMachine) {
      case model.Shifumi.CISEAU:
        $("#machineCiseau").show();
        break;
      case model.Shifumi.FEUILLE:
        $("#machineFeuille").show();
        break;
      case model.Shifumi.PIERRE:
        $("#machinePierre").show();
    }
    // 3. on affiche le résultat
    var couleur =
      resultat.message === "Victoire"
        ? "green"
        : resultat.message === "Défaite"
        ? "red"
        : "orange";
    $("#texteResultat").html(resultat.message).css("color", couleur);
    $("#resultat").show();
  }

  static nouveauCoup() {
    this.init();
  }

  static finPartie() {
    $.mobile.changePage("#vueFin");
  }
}

////////////////////////////////////////////////////////////////////////////////
class VueFinController {
  static setEvents() {
    // définition des "handlers" d'événements sur la page
    $(document).on("pagebeforeshow", "#vueFin", () => {
      this.init();
    });
    $("#btnRetourJeu").on("click", () => {
      this.retourJeu();
    });
    $("#btnSupprimer").on("click", () => {
      this.supprimerJoueur();
    });
    $("#btnRetourAccueil").on("click", () => {
      this.retourAccueil();
    });
  }

  static init() {
    // initialisation de la page
    $("#nbVictoires").html(session.partieEnCours.joueur.victoires);
    $("#nbNuls").html(session.partieEnCours.joueur.nuls);
    $("#nbDefaites").html(session.partieEnCours.joueur.defaites);
  }

  static retourJeu() {
    $.mobile.changePage("#vueJeu");
  }

  static supprimerJoueur() {
    model.JoueurDAO.removeJoueur(session.partieEnCours.joueur.nom);
    this.retourAccueil();
  }

  static retourAccueil() {
    $.mobile.changePage("#vueAccueil");
  }
}
