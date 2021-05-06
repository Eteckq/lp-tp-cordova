/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/controller.js":
/*!******************************!*\
  !*** ./www/js/controller.js ***!
  \******************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./www/js/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./www/js/view.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_js__WEBPACK_IMPORTED_MODULE_1__);



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

function init() {
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
    var joueur = _model_js__WEBPACK_IMPORTED_MODULE_0__["JoueurDAO"].loadJoueur(nom);
    if (joueur) {
      session.joueurEnCours = joueur;
      $("#imgPhoto").attr("src", joueur.photo);
    } else {
      session.joueurEnCours = new _model_js__WEBPACK_IMPORTED_MODULE_0__["Joueur"](nom);
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
      session.partieEnCours = new _model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"](session.joueurEnCours); // charge la partie du joueur depuis le localstorage
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
    _model_js__WEBPACK_IMPORTED_MODULE_0__["CordovaAPI"].takePicture()
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
        this.jouer(_model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].CISEAU);
      }.bind(this)
    );
    $("#btnJouerFeuille").on(
      "click",
      function () {
        this.jouer(_model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].FEUILLE);
      }.bind(this)
    );
    $("#btnJouerPierre").on(
      "click",
      function () {
        this.jouer(_model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].PIERRE);
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
    _model_js__WEBPACK_IMPORTED_MODULE_0__["JoueurDAO"].saveJoueur(session.partieEnCours.joueur);
    // Et on met à jour la vue :
    // 1. on désactive le bouton cliqué par le joueur et on cache les autres boutons
    switch (coupJoueur) {
      case _model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].CISEAU:
        $("#btnJouerCiseau").prop("disabled", true);
        $("#btnJouerFeuille").hide();
        $("#btnJouerPierre").hide();
        break;
      case _model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].FEUILLE:
        $("#btnJouerFeuille").prop("disabled", true);
        $("#btnJouerCiseau").hide();
        $("#btnJouerPierre").hide();
        break;
      case _model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].PIERRE:
        $("#btnJouerPierre").prop("disabled", true);
        $("#btnJouerCiseau").hide();
        $("#btnJouerFeuille").hide();
    }
    // 2. on affiche le coup joué par la machine
    switch (resultat.mainMachine) {
      case _model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].CISEAU:
        $("#machineCiseau").show();
        break;
      case _model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].FEUILLE:
        $("#machineFeuille").show();
        break;
      case _model_js__WEBPACK_IMPORTED_MODULE_0__["Shifumi"].PIERRE:
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
    _model_js__WEBPACK_IMPORTED_MODULE_0__["JoueurDAO"].removeJoueur(session.partieEnCours.joueur.nom);
    this.retourAccueil();
  }

  static retourAccueil() {
    $.mobile.changePage("#vueAccueil");
  }
}


/***/ }),

/***/ "./www/js/index.js":
/*!*************************!*\
  !*** ./www/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./www/js/controller.js");
// on importe uniquement le module contrôleur


var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    _controller_js__WEBPACK_IMPORTED_MODULE_0__["init"]();
  },
};

app.initialize();


/***/ }),

/***/ "./www/js/model.js":
/*!*************************!*\
  !*** ./www/js/model.js ***!
  \*************************/
/*! exports provided: Joueur, Shifumi, JoueurDAO, CordovaAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Joueur", function() { return Joueur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shifumi", function() { return Shifumi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoueurDAO", function() { return JoueurDAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordovaAPI", function() { return CordovaAPI; });
// Le module "modele" exporte 4 classes : Joueur, Shifum, JoueurDAO et CordovaAPI
class Joueur {
  constructor(nom = "", photo = "", victoires = 0, defaites = 0, nuls = 0) {
    this.nom = nom;
    this.photo = photo;
    this.victoires = victoires;
    this.defaites = defaites;
    this.nuls = nuls;
  }
}

// La classe Shifumi modélise une partie de Shifumi réalisée par un Joueur
class Shifumi {
  // constructeur
  constructor(joueur) {
    // attributs d'instance
    this.joueur = joueur;
  }

  // constantes de classe : pas de syntaxe spécifique en ES6...
  static get CISEAU() {
    return 0;
  }
  static get FEUILLE() {
    return 1;
  }
  static get PIERRE() {
    return 2;
  }

  // Le joueur a joué un nouveau coup coupJoueur (CISEAU, FEUILLE ou PIERRE)
  nouveauCoup(coupJoueur) {
    // détermine le résulat d'un nouveau coup et met à jour le score
    var mainMachine = Math.floor(Math.random() * 3);
    var resultat;
    if (mainMachine === coupJoueur) {
      this.joueur.nuls++;
      resultat = { mainMachine: mainMachine, message: "Match Nul" };
    } else if (
      (coupJoueur === Shifumi.CISEAU && mainMachine === Shifumi.FEUILLE) ||
      (coupJoueur === Shifumi.FEUILLE && mainMachine === Shifumi.PIERRE) ||
      (coupJoueur === Shifumi.PIERRE && mainMachine === Shifumi.CISEAU)
    ) {
      this.joueur.victoires++;
      resultat = { mainMachine: mainMachine, message: "Victoire" };
    } else {
      this.joueur.defaites++;
      resultat = { mainMachine: mainMachine, message: "Défaite" };
    }
    return resultat;
  }
}

// La classe abstraite JoueurDAO gère la persistance des joueurs dans le local storage.
// On stocke dans le local storage des paires (nom, {photo, victoires, defaites, nuls}).
class JoueurDAO {
  // sauvegarde un joueur au format JSON dans le local storage
  static saveJoueur(joueur) {
    window.localStorage.setItem(
      joueur.nom,
      JSON.stringify({
        photo: joueur.photo,
        victoires: joueur.victoires,
        nuls: joueur.nuls,
        defaites: joueur.defaites,
      })
    );
  }

  // charge un joueur, s'il existe, depuis le local storage
  static loadJoueur(nom) {
    var data = window.localStorage.getItem(nom);
    if (data === null) {
      // s'il n'y a pas de joueur avec ce nom, on en crée un nouveau par défaut
      return null;
    } else {
      // sinon on convertit la partie au format JSON en objet de la classe Joueur
      data = JSON.parse(data); // convertit la chaine JSON en objet JS
      return new Joueur(
        nom,
        data.photo,
        data.victoires,
        data.defaites,
        data.nuls
      );
    }
  }

  // suppression d'un joueur
  static removeJoueur(nom) {
    window.localStorage.removeItem(nom);
  }
}

// La classe CordovaAPI est un service permettant d'uiliser l'API de cordova sous forme de promesses
class CordovaAPI {
  static takePicture() {
    return new Promise((resolve, reject) => {
      navigator.camera.getPicture(
        (imageData) => resolve(imageData),
        (err) => reject(err),
        {
          // qualité encodage 50%, format base64 (et JPEG par défaut)
          quality: 50,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          encodingType: navigator.camera.EncodingType.JPEG,
          mediaType: navigator.camera.MediaType.PICTURE,
          correctOrientation: true,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          cameraDirection: navigator.camera.Direction.FRONT,
        }
      );
    });
  }
}


/***/ }),

/***/ "./www/js/view.js":
/*!************************!*\
  !*** ./www/js/view.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDRjs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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S0FBSztBQUNMO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGlDQUFpQztBQUMvRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3d3dy9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIG1vZGVsIGZyb20gXCIuL21vZGVsLmpzXCI7XG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gXCIuL3ZpZXcuanNcIjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFNlc3Npb24gOiB2YXJpYWJsZXMgcXVpIHJlcHLDqXNlbnRlbnQgbCfDqXRhdCBkZSBsJ2FwcGxpY2F0aW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgc2Vzc2lvbiA9IHtcbiAgam91ZXVyRW5Db3VyczogbnVsbCwgLy8gTGUgam91ZXVyIGNvdXJhbnRcbiAgcGFydGllRW5Db3VyczogbnVsbCwgLy8gTGEgcGFydGllIGVuIHRyYWluIGQnw6p0cmUgam91w6llXG59O1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gaW5pdCA6IGV4w6ljdXTDqWUgYXUgZMOpbWFycmFnZSBkZSBsJ2FwcGxpY2F0aW9uICh2b2lyIGZpY2hpZXIgaW5kZXguanMpXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8gT24gZHVwbGlxdWUgSGVhZGVyIGV0IEZvb3RlciBzdXIgY2hhcXVlIHBhZ2UgKHNhdWYgbGEgcHJlbWnDqHJlICEpXG4gIHZhciAkaGVhZGVyID0gJChcIiNzaGlmdW1pSGVhZGVyXCIpO1xuICB2YXIgJGZvb3RlciA9ICQoXCIjc2hpZnVtaUZvb3RlclwiKTtcbiAgJCgnZGl2W2RhdGEtcm9sZT1cInBhZ2VcIl0nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgaWYgKGkpIHtcbiAgICAgIHZhciAkY29udGVudCA9ICQodGhpcykuY2hpbGRyZW4oXCI6Zmlyc3RcIik7XG4gICAgICAkaGVhZGVyLmNsb25lKCkuaW5zZXJ0QmVmb3JlKCRjb250ZW50KTtcbiAgICAgICRjb250ZW50LmFmdGVyKCRmb290ZXIuY2xvbmUoKSk7XG4gICAgfVxuICB9KTtcbiAgLy8gT24gaW5pdGlhbGlzZSBsZXMgcGFnZXMgKGF0dGFjaGVyIGxlcyBcImhhbmRsZXJzXCIgZCfDqXbDqW5lbWVudHMgcHJvcHJlcyDDoCBjaGFxdWUgcGFnZSlcbiAgVnVlQWNjdWVpbENvbnRyb2xsZXIuc2V0RXZlbnRzKCk7XG4gIFZ1ZUpldUNvbnRyb2xsZXIuc2V0RXZlbnRzKCk7XG4gIFZ1ZUZpbkNvbnRyb2xsZXIuc2V0RXZlbnRzKCk7XG4gIC8vIE9uIG5hdmlndWUgdmVycyBsYSBwYWdlIGQnYWNjdWVpbFxuICAkLm1vYmlsZS5jaGFuZ2VQYWdlKFwiI3Z1ZUFjY3VlaWxcIik7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDb250cm9sZXVycyBkZSBwYWdlcyA6IDEgY29udHLDtGxldXIgcGFyIHBhZ2UsIHF1aSBwb3J0ZSBsZSBub20gZGUgbGEgcGFnZVxuLy8gIGV0IGNvbnRpZW50IGxlcyBcImhhbmRsZXJzXCIgZGVzIMOpdsOpbmVtZW50cyBhc3NvY2nDqXMgw6AgY2V0dGUgcGFnZVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY2xhc3MgVnVlQWNjdWVpbENvbnRyb2xsZXIge1xuICBzdGF0aWMgc2V0RXZlbnRzKCkge1xuICAgIC8vIGTDqWZpbml0aW9uIGRlcyBcImhhbmRsZXJzXCIgZCfDqXbDqW5lbWVudHMgc3VyIGxhIHBhZ2VcbiAgICAkKGRvY3VtZW50KS5vbihcbiAgICAgIFwicGFnZWJlZm9yZXNob3dcIixcbiAgICAgIFwiI3Z1ZUFjY3VlaWxcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICAgICQoXCIjYnRuTm91dmVsbGVQYXJ0aWVcIikub24oXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm91dmVsbGVQYXJ0aWUoKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgJChcIiNidG5QaG90b1wiKS5vbihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmVuZHJlUGhvdG8oKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgJChcIiNub21Kb3VldXJcIikub24oXG4gICAgICBcImlucHV0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlSm91ZXVyKCk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGluaXQoKSB7XG4gICAgLy8gaW5pdGlhbGlzYXRpb24gZGUgbGEgcGFnZVxuICAgICQoXCIjbm9tSm91ZXVyXCIpLnZhbChcIlwiKTtcbiAgICAkKFwiI2ltZ1Bob3RvXCIpLmF0dHIoXCJzcmNcIiwgXCJcIik7XG4gIH1cblxuICBzdGF0aWMgY2hhcmdlSm91ZXVyKCkge1xuICAgIHZhciBub20gPSAkKFwiI25vbUpvdWV1clwiKS52YWwoKTtcbiAgICB2YXIgam91ZXVyID0gbW9kZWwuSm91ZXVyREFPLmxvYWRKb3VldXIobm9tKTtcbiAgICBpZiAoam91ZXVyKSB7XG4gICAgICBzZXNzaW9uLmpvdWV1ckVuQ291cnMgPSBqb3VldXI7XG4gICAgICAkKFwiI2ltZ1Bob3RvXCIpLmF0dHIoXCJzcmNcIiwgam91ZXVyLnBob3RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvbi5qb3VldXJFbkNvdXJzID0gbmV3IG1vZGVsLkpvdWV1cihub20pO1xuICAgICAgJChcIiNpbWdQaG90b1wiKS5hdHRyKFwic3JjXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBub3V2ZWxsZVBhcnRpZSgpIHtcbiAgICAvLyBvbiByw6ljdXDDqHJlIGRlIGwnaW5mb3JtYXRpb24gZGUgbGEgdnVlIGVuIGNvdXJzXG4gICAgdmFyIG5vbUpvdWV1ciA9ICQoXCIjbm9tSm91ZXVyXCIpLnZhbCgpO1xuICAgIGlmIChub21Kb3VldXIgPT09IFwiXCIpIHtcbiAgICAgIHBsdWdpbnMudG9hc3Quc2hvd1Nob3J0Q2VudGVyKFwiU2Fpc2lyIHVuIG5vbSBkZSBqb3VldXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9uIHV0aWxpc2UgbGUgbW9kw6hsZSBwb3VyIGNyw6llciB1bmUgbm91dmVsbGUgcGFydGllXG4gICAgICBzZXNzaW9uLnBhcnRpZUVuQ291cnMgPSBuZXcgbW9kZWwuU2hpZnVtaShzZXNzaW9uLmpvdWV1ckVuQ291cnMpOyAvLyBjaGFyZ2UgbGEgcGFydGllIGR1IGpvdWV1ciBkZXB1aXMgbGUgbG9jYWxzdG9yYWdlXG4gICAgICAvLyBPbiBcInByb3BhZ2VcIiBsZSBub20gZHUgam91ZXVyIHN1ciB0b3V0ZXMgbGVzIHZ1ZXNcbiAgICAgICQoJ3NwYW5bZGF0YS1yb2xlPVwibm9tSm91ZXVyXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuaHRtbChzZXNzaW9uLmpvdWV1ckVuQ291cnMubm9tKTtcbiAgICAgIH0pO1xuICAgICAgLy8gT24gXCJwcm9wYWdlXCIgbGEgcGhvdG8gZHUgam91ZXVyIHN1ciB0b3V0ZXMgbGVzIHZ1ZXNcbiAgICAgICQoJ2ltZ1tkYXRhLXJvbGU9XCJwaG90b0pvdWV1clwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmF0dHIoXCJzcmNcIiwgc2Vzc2lvbi5qb3VldXJFbkNvdXJzLnBob3RvKTtcbiAgICAgIH0pO1xuICAgICAgLy8gRXQgb24gcGFzc2Ugw6AgdW5lIGF1dHJlIHZ1ZVxuICAgICAgJC5tb2JpbGUuY2hhbmdlUGFnZShcIiN2dWVKZXVcIik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHByZW5kcmVQaG90bygpIHtcbiAgICBtb2RlbC5Db3Jkb3ZhQVBJLnRha2VQaWN0dXJlKClcbiAgICAgIC50aGVuKChpbWFnZURhdGEpID0+IHtcbiAgICAgICAgc2Vzc2lvbi5qb3VldXJFbkNvdXJzLnBob3RvID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiICsgaW1hZ2VEYXRhO1xuICAgICAgICAkKFwiI2ltZ1Bob3RvXCIpLmF0dHIoXCJzcmNcIiwgc2Vzc2lvbi5qb3VldXJFbkNvdXJzLnBob3RvKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBzZXNzaW9uLmpvdWV1ckVuQ291cnMucGhvdG8gPSBcIlwiO1xuICAgICAgICAkKFwiI2ltZ1Bob3RvXCIpLmF0dHIoXCJzcmNcIiwgXCJcIik7XG4gICAgICAgIHBsdWdpbnMudG9hc3Quc2hvd1Nob3J0Q2VudGVyKFwiRWNoZWMgUGhvdG8gOiBcIiArIGVyci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jbGFzcyBWdWVKZXVDb250cm9sbGVyIHtcbiAgc3RhdGljIHNldEV2ZW50cygpIHtcbiAgICAvLyBkw6lmaW5pdGlvbiBkZXMgXCJoYW5kbGVyc1wiIGQnw6l2w6luZW1lbnRzIHN1ciBsYSBwYWdlXG4gICAgJChkb2N1bWVudCkub24oXG4gICAgICBcInBhZ2ViZWZvcmVzaG93XCIsXG4gICAgICBcIiN2dWVKZXVcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICAgICQoXCIjYnRuSm91ZXJDaXNlYXVcIikub24oXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuam91ZXIobW9kZWwuU2hpZnVtaS5DSVNFQVUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICAkKFwiI2J0bkpvdWVyRmV1aWxsZVwiKS5vbihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5qb3Vlcihtb2RlbC5TaGlmdW1pLkZFVUlMTEUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICAkKFwiI2J0bkpvdWVyUGllcnJlXCIpLm9uKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmpvdWVyKG1vZGVsLlNoaWZ1bWkuUElFUlJFKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgJChcIiNidG5Ob3V2ZWF1Q291cFwiKS5vbihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ub3V2ZWF1Q291cCgpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICAkKFwiI2J0bkZpblBhcnRpZVwiKS5vbihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5maW5QYXJ0aWUoKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgaW5pdCgpIHtcbiAgICAvLyBpbml0aWFsaXNhdGlvbiBkZSBsYSBwYWdlXG4gICAgLy8gb24gYWN0aXZlIGV0IG9uIG1vbnRyZSB0b3VzIGxlcyBib3V0b25zIGR1IGpvdWV1clxuICAgICQoXCJidXR0b25baWRePWJ0bkpvdWVyXVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpLnNob3coKTtcbiAgICAvLyBvbiBjYWNoZSB0b3V0ZXMgbGVzIHLDqXBvbnNlcyBkZSBsYSBtYWNoaW5lXG4gICAgJChcImltZ1tpZF49bWFjaGluZV1cIikuaGlkZSgpO1xuICAgIC8vIG9uIGNhY2hlIGxhIGRpdiByZXN1bHRhdFxuICAgICQoXCIjcmVzdWx0YXRcIikuaGlkZSgpO1xuICB9XG5cbiAgc3RhdGljIGpvdWVyKGNvdXBKb3VldXIpIHtcbiAgICAvLyBsZSBqb3VldXIgYSBjaG9pc2kgc29uIGNvdXBcbiAgICAvLyBPbiBpbnRlcnJvZ2UgbGUgbW9kw6hsZSBwb3VyIHZvaXIgbGUgcsOpc3VsdGF0IGR1IG5vdXZlYXUgY291cFxuICAgIHZhciByZXN1bHRhdCA9IHNlc3Npb24ucGFydGllRW5Db3Vycy5ub3V2ZWF1Q291cChjb3VwSm91ZXVyKTtcbiAgICAvLyBMZSBzY29yZSBhIGNoYW5nw6kgPT4gb24gc2F1dmVnYXJkZSBsYSBwYXJ0aWUgZW4gY291cnNcbiAgICBtb2RlbC5Kb3VldXJEQU8uc2F2ZUpvdWV1cihzZXNzaW9uLnBhcnRpZUVuQ291cnMuam91ZXVyKTtcbiAgICAvLyBFdCBvbiBtZXQgw6Agam91ciBsYSB2dWUgOlxuICAgIC8vIDEuIG9uIGTDqXNhY3RpdmUgbGUgYm91dG9uIGNsaXF1w6kgcGFyIGxlIGpvdWV1ciBldCBvbiBjYWNoZSBsZXMgYXV0cmVzIGJvdXRvbnNcbiAgICBzd2l0Y2ggKGNvdXBKb3VldXIpIHtcbiAgICAgIGNhc2UgbW9kZWwuU2hpZnVtaS5DSVNFQVU6XG4gICAgICAgICQoXCIjYnRuSm91ZXJDaXNlYXVcIikucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICAkKFwiI2J0bkpvdWVyRmV1aWxsZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjYnRuSm91ZXJQaWVycmVcIikuaGlkZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbW9kZWwuU2hpZnVtaS5GRVVJTExFOlxuICAgICAgICAkKFwiI2J0bkpvdWVyRmV1aWxsZVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgICQoXCIjYnRuSm91ZXJDaXNlYXVcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2J0bkpvdWVyUGllcnJlXCIpLmhpZGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG1vZGVsLlNoaWZ1bWkuUElFUlJFOlxuICAgICAgICAkKFwiI2J0bkpvdWVyUGllcnJlXCIpLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgJChcIiNidG5Kb3VlckNpc2VhdVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjYnRuSm91ZXJGZXVpbGxlXCIpLmhpZGUoKTtcbiAgICB9XG4gICAgLy8gMi4gb24gYWZmaWNoZSBsZSBjb3VwIGpvdcOpIHBhciBsYSBtYWNoaW5lXG4gICAgc3dpdGNoIChyZXN1bHRhdC5tYWluTWFjaGluZSkge1xuICAgICAgY2FzZSBtb2RlbC5TaGlmdW1pLkNJU0VBVTpcbiAgICAgICAgJChcIiNtYWNoaW5lQ2lzZWF1XCIpLnNob3coKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG1vZGVsLlNoaWZ1bWkuRkVVSUxMRTpcbiAgICAgICAgJChcIiNtYWNoaW5lRmV1aWxsZVwiKS5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBtb2RlbC5TaGlmdW1pLlBJRVJSRTpcbiAgICAgICAgJChcIiNtYWNoaW5lUGllcnJlXCIpLnNob3coKTtcbiAgICB9XG4gICAgLy8gMy4gb24gYWZmaWNoZSBsZSByw6lzdWx0YXRcbiAgICB2YXIgY291bGV1ciA9XG4gICAgICByZXN1bHRhdC5tZXNzYWdlID09PSBcIlZpY3RvaXJlXCJcbiAgICAgICAgPyBcImdyZWVuXCJcbiAgICAgICAgOiByZXN1bHRhdC5tZXNzYWdlID09PSBcIkTDqWZhaXRlXCJcbiAgICAgICAgPyBcInJlZFwiXG4gICAgICAgIDogXCJvcmFuZ2VcIjtcbiAgICAkKFwiI3RleHRlUmVzdWx0YXRcIikuaHRtbChyZXN1bHRhdC5tZXNzYWdlKS5jc3MoXCJjb2xvclwiLCBjb3VsZXVyKTtcbiAgICAkKFwiI3Jlc3VsdGF0XCIpLnNob3coKTtcbiAgfVxuXG4gIHN0YXRpYyBub3V2ZWF1Q291cCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5QYXJ0aWUoKSB7XG4gICAgJC5tb2JpbGUuY2hhbmdlUGFnZShcIiN2dWVGaW5cIik7XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNsYXNzIFZ1ZUZpbkNvbnRyb2xsZXIge1xuICBzdGF0aWMgc2V0RXZlbnRzKCkge1xuICAgIC8vIGTDqWZpbml0aW9uIGRlcyBcImhhbmRsZXJzXCIgZCfDqXbDqW5lbWVudHMgc3VyIGxhIHBhZ2VcbiAgICAkKGRvY3VtZW50KS5vbihcInBhZ2ViZWZvcmVzaG93XCIsIFwiI3Z1ZUZpblwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9KTtcbiAgICAkKFwiI2J0blJldG91ckpldVwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMucmV0b3VySmV1KCk7XG4gICAgfSk7XG4gICAgJChcIiNidG5TdXBwcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnN1cHByaW1lckpvdWV1cigpO1xuICAgIH0pO1xuICAgICQoXCIjYnRuUmV0b3VyQWNjdWVpbFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMucmV0b3VyQWNjdWVpbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXQoKSB7XG4gICAgLy8gaW5pdGlhbGlzYXRpb24gZGUgbGEgcGFnZVxuICAgICQoXCIjbmJWaWN0b2lyZXNcIikuaHRtbChzZXNzaW9uLnBhcnRpZUVuQ291cnMuam91ZXVyLnZpY3RvaXJlcyk7XG4gICAgJChcIiNuYk51bHNcIikuaHRtbChzZXNzaW9uLnBhcnRpZUVuQ291cnMuam91ZXVyLm51bHMpO1xuICAgICQoXCIjbmJEZWZhaXRlc1wiKS5odG1sKHNlc3Npb24ucGFydGllRW5Db3Vycy5qb3VldXIuZGVmYWl0ZXMpO1xuICB9XG5cbiAgc3RhdGljIHJldG91ckpldSgpIHtcbiAgICAkLm1vYmlsZS5jaGFuZ2VQYWdlKFwiI3Z1ZUpldVwiKTtcbiAgfVxuXG4gIHN0YXRpYyBzdXBwcmltZXJKb3VldXIoKSB7XG4gICAgbW9kZWwuSm91ZXVyREFPLnJlbW92ZUpvdWV1cihzZXNzaW9uLnBhcnRpZUVuQ291cnMuam91ZXVyLm5vbSk7XG4gICAgdGhpcy5yZXRvdXJBY2N1ZWlsKCk7XG4gIH1cblxuICBzdGF0aWMgcmV0b3VyQWNjdWVpbCgpIHtcbiAgICAkLm1vYmlsZS5jaGFuZ2VQYWdlKFwiI3Z1ZUFjY3VlaWxcIik7XG4gIH1cbn1cbiIsIi8vIG9uIGltcG9ydGUgdW5pcXVlbWVudCBsZSBtb2R1bGUgY29udHLDtGxldXJcbmltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuXG52YXIgYXBwID0ge1xuICAvLyBBcHBsaWNhdGlvbiBDb25zdHJ1Y3RvclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZGV2aWNlcmVhZHlcIixcbiAgICAgIHRoaXMub25EZXZpY2VSZWFkeS5iaW5kKHRoaXMpLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9LFxuXG4gIC8vIGRldmljZXJlYWR5IEV2ZW50IEhhbmRsZXJcbiAgLy9cbiAgLy8gQmluZCBhbnkgY29yZG92YSBldmVudHMgaGVyZS4gQ29tbW9uIGV2ZW50cyBhcmU6XG4gIC8vICdwYXVzZScsICdyZXN1bWUnLCBldGMuXG4gIG9uRGV2aWNlUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICBjb250cm9sbGVyLmluaXQoKTtcbiAgfSxcbn07XG5cbmFwcC5pbml0aWFsaXplKCk7XG4iLCIvLyBMZSBtb2R1bGUgXCJtb2RlbGVcIiBleHBvcnRlIDQgY2xhc3NlcyA6IEpvdWV1ciwgU2hpZnVtLCBKb3VldXJEQU8gZXQgQ29yZG92YUFQSVxyXG5leHBvcnQgY2xhc3MgSm91ZXVyIHtcclxuICBjb25zdHJ1Y3Rvcihub20gPSBcIlwiLCBwaG90byA9IFwiXCIsIHZpY3RvaXJlcyA9IDAsIGRlZmFpdGVzID0gMCwgbnVscyA9IDApIHtcclxuICAgIHRoaXMubm9tID0gbm9tO1xyXG4gICAgdGhpcy5waG90byA9IHBob3RvO1xyXG4gICAgdGhpcy52aWN0b2lyZXMgPSB2aWN0b2lyZXM7XHJcbiAgICB0aGlzLmRlZmFpdGVzID0gZGVmYWl0ZXM7XHJcbiAgICB0aGlzLm51bHMgPSBudWxzO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGEgY2xhc3NlIFNoaWZ1bWkgbW9kw6lsaXNlIHVuZSBwYXJ0aWUgZGUgU2hpZnVtaSByw6lhbGlzw6llIHBhciB1biBKb3VldXJcclxuZXhwb3J0IGNsYXNzIFNoaWZ1bWkge1xyXG4gIC8vIGNvbnN0cnVjdGV1clxyXG4gIGNvbnN0cnVjdG9yKGpvdWV1cikge1xyXG4gICAgLy8gYXR0cmlidXRzIGQnaW5zdGFuY2VcclxuICAgIHRoaXMuam91ZXVyID0gam91ZXVyO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3RhbnRlcyBkZSBjbGFzc2UgOiBwYXMgZGUgc3ludGF4ZSBzcMOpY2lmaXF1ZSBlbiBFUzYuLi5cclxuICBzdGF0aWMgZ2V0IENJU0VBVSgpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IEZFVUlMTEUoKSB7XHJcbiAgICByZXR1cm4gMTtcclxuICB9XHJcbiAgc3RhdGljIGdldCBQSUVSUkUoKSB7XHJcbiAgICByZXR1cm4gMjtcclxuICB9XHJcblxyXG4gIC8vIExlIGpvdWV1ciBhIGpvdcOpIHVuIG5vdXZlYXUgY291cCBjb3VwSm91ZXVyIChDSVNFQVUsIEZFVUlMTEUgb3UgUElFUlJFKVxyXG4gIG5vdXZlYXVDb3VwKGNvdXBKb3VldXIpIHtcclxuICAgIC8vIGTDqXRlcm1pbmUgbGUgcsOpc3VsYXQgZCd1biBub3V2ZWF1IGNvdXAgZXQgbWV0IMOgIGpvdXIgbGUgc2NvcmVcclxuICAgIHZhciBtYWluTWFjaGluZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdmFyIHJlc3VsdGF0O1xyXG4gICAgaWYgKG1haW5NYWNoaW5lID09PSBjb3VwSm91ZXVyKSB7XHJcbiAgICAgIHRoaXMuam91ZXVyLm51bHMrKztcclxuICAgICAgcmVzdWx0YXQgPSB7IG1haW5NYWNoaW5lOiBtYWluTWFjaGluZSwgbWVzc2FnZTogXCJNYXRjaCBOdWxcIiB9O1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKGNvdXBKb3VldXIgPT09IFNoaWZ1bWkuQ0lTRUFVICYmIG1haW5NYWNoaW5lID09PSBTaGlmdW1pLkZFVUlMTEUpIHx8XHJcbiAgICAgIChjb3VwSm91ZXVyID09PSBTaGlmdW1pLkZFVUlMTEUgJiYgbWFpbk1hY2hpbmUgPT09IFNoaWZ1bWkuUElFUlJFKSB8fFxyXG4gICAgICAoY291cEpvdWV1ciA9PT0gU2hpZnVtaS5QSUVSUkUgJiYgbWFpbk1hY2hpbmUgPT09IFNoaWZ1bWkuQ0lTRUFVKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuam91ZXVyLnZpY3RvaXJlcysrO1xyXG4gICAgICByZXN1bHRhdCA9IHsgbWFpbk1hY2hpbmU6IG1haW5NYWNoaW5lLCBtZXNzYWdlOiBcIlZpY3RvaXJlXCIgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuam91ZXVyLmRlZmFpdGVzKys7XHJcbiAgICAgIHJlc3VsdGF0ID0geyBtYWluTWFjaGluZTogbWFpbk1hY2hpbmUsIG1lc3NhZ2U6IFwiRMOpZmFpdGVcIiB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdGF0O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGEgY2xhc3NlIGFic3RyYWl0ZSBKb3VldXJEQU8gZ8OocmUgbGEgcGVyc2lzdGFuY2UgZGVzIGpvdWV1cnMgZGFucyBsZSBsb2NhbCBzdG9yYWdlLlxyXG4vLyBPbiBzdG9ja2UgZGFucyBsZSBsb2NhbCBzdG9yYWdlIGRlcyBwYWlyZXMgKG5vbSwge3Bob3RvLCB2aWN0b2lyZXMsIGRlZmFpdGVzLCBudWxzfSkuXHJcbmV4cG9ydCBjbGFzcyBKb3VldXJEQU8ge1xyXG4gIC8vIHNhdXZlZ2FyZGUgdW4gam91ZXVyIGF1IGZvcm1hdCBKU09OIGRhbnMgbGUgbG9jYWwgc3RvcmFnZVxyXG4gIHN0YXRpYyBzYXZlSm91ZXVyKGpvdWV1cikge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICBqb3VldXIubm9tLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgcGhvdG86IGpvdWV1ci5waG90byxcclxuICAgICAgICB2aWN0b2lyZXM6IGpvdWV1ci52aWN0b2lyZXMsXHJcbiAgICAgICAgbnVsczogam91ZXVyLm51bHMsXHJcbiAgICAgICAgZGVmYWl0ZXM6IGpvdWV1ci5kZWZhaXRlcyxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBjaGFyZ2UgdW4gam91ZXVyLCBzJ2lsIGV4aXN0ZSwgZGVwdWlzIGxlIGxvY2FsIHN0b3JhZ2VcclxuICBzdGF0aWMgbG9hZEpvdWV1cihub20pIHtcclxuICAgIHZhciBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG5vbSk7XHJcbiAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAvLyBzJ2lsIG4neSBhIHBhcyBkZSBqb3VldXIgYXZlYyBjZSBub20sIG9uIGVuIGNyw6llIHVuIG5vdXZlYXUgcGFyIGTDqWZhdXRcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzaW5vbiBvbiBjb252ZXJ0aXQgbGEgcGFydGllIGF1IGZvcm1hdCBKU09OIGVuIG9iamV0IGRlIGxhIGNsYXNzZSBKb3VldXJcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7IC8vIGNvbnZlcnRpdCBsYSBjaGFpbmUgSlNPTiBlbiBvYmpldCBKU1xyXG4gICAgICByZXR1cm4gbmV3IEpvdWV1cihcclxuICAgICAgICBub20sXHJcbiAgICAgICAgZGF0YS5waG90byxcclxuICAgICAgICBkYXRhLnZpY3RvaXJlcyxcclxuICAgICAgICBkYXRhLmRlZmFpdGVzLFxyXG4gICAgICAgIGRhdGEubnVsc1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc3VwcHJlc3Npb24gZCd1biBqb3VldXJcclxuICBzdGF0aWMgcmVtb3ZlSm91ZXVyKG5vbSkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKG5vbSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYSBjbGFzc2UgQ29yZG92YUFQSSBlc3QgdW4gc2VydmljZSBwZXJtZXR0YW50IGQndWlsaXNlciBsJ0FQSSBkZSBjb3Jkb3ZhIHNvdXMgZm9ybWUgZGUgcHJvbWVzc2VzXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhQVBJIHtcclxuICBzdGF0aWMgdGFrZVBpY3R1cmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3IuY2FtZXJhLmdldFBpY3R1cmUoXHJcbiAgICAgICAgKGltYWdlRGF0YSkgPT4gcmVzb2x2ZShpbWFnZURhdGEpLFxyXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIHF1YWxpdMOpIGVuY29kYWdlIDUwJSwgZm9ybWF0IGJhc2U2NCAoZXQgSlBFRyBwYXIgZMOpZmF1dClcclxuICAgICAgICAgIHF1YWxpdHk6IDUwLFxyXG4gICAgICAgICAgZGVzdGluYXRpb25UeXBlOiBuYXZpZ2F0b3IuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5EQVRBX1VSTCxcclxuICAgICAgICAgIGVuY29kaW5nVHlwZTogbmF2aWdhdG9yLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcclxuICAgICAgICAgIG1lZGlhVHlwZTogbmF2aWdhdG9yLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRSxcclxuICAgICAgICAgIGNvcnJlY3RPcmllbnRhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIHNvdXJjZVR5cGU6IG5hdmlnYXRvci5jYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBLFxyXG4gICAgICAgICAgY2FtZXJhRGlyZWN0aW9uOiBuYXZpZ2F0b3IuY2FtZXJhLkRpcmVjdGlvbi5GUk9OVCxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==