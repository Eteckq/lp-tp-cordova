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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./www/js/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./www/js/view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Controller = /*#__PURE__*/function () {
  function Controller() {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "session", {
      joueurEnCours: null,
      // Le joueur courant
      partieEnCours: null // La partie en train d'être jouée

    });

    _defineProperty(this, "view", new _view_js__WEBPACK_IMPORTED_MODULE_1__["default"]());

    $.mobile.changePage("#vueAccueil");
    this.view.onClickNewGame(function () {
      _this.onClickNewGame();
    });
  }

  _createClass(Controller, [{
    key: "onClickNewGame",
    value: function onClickNewGame() {
      console.log("New game");
      $.mobile.changePage("#vueJeu");
      console.log(this.session);
    }
  }]);

  return Controller;
}();



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
  initialize: function initialize() {
    document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function onDeviceReady() {
    new _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
};
app.initialize();

/***/ }),

/***/ "./www/js/model.js":
/*!*************************!*\
  !*** ./www/js/model.js ***!
  \*************************/
/*! exports provided: Picture, Player, TicTacToe, PlayersDao, PlayersUtils, CordovaAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToe", function() { return TicTacToe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersDao", function() { return PlayersDao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersUtils", function() { return PlayersUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordovaAPI", function() { return CordovaAPI; });
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Classe pour représenter une image
var Picture = /*#__PURE__*/function () {
  function Picture(data) {
    _classCallCheck(this, Picture);

    this.data = data;
  } // Renvoie l'image au format Base64 avec en-tête MIME


  _createClass(Picture, [{
    key: "getBase64",
    value: function getBase64() {
      return "data:image/jpeg;base64," + this.data;
    }
  }]);

  return Picture;
}(); // Classe pour représenter un joueur

var Player = function Player(id, name, picture) {
  var nbWin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var nbLoss = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var nbDrawn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  _classCallCheck(this, Player);

  this.id = id;
  this.name = name;
  this.picture = picture;
  this.nbWin = nbWin;
  this.nbLoss = nbLoss;
  this.nbDrawn = nbDrawn;
}; // Classe pour représenter une partie de TicTacToe

var TicTacToe = /*#__PURE__*/function () {
  function TicTacToe(player1, player2) {
    _classCallCheck(this, TicTacToe);

    this.player1 = player1;
    this.player2 = player2;
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentPlayer = Math.random() < 0.5 ? player1 : player2; // Le premier joueur est choisi aléatoirement
  } // Changer de joueur courant


  _createClass(TicTacToe, [{
    key: "switchCurrentPlayer",
    value: function switchCurrentPlayer() {
      if (this.currentPlayer === this.player1) this.currentPlayer = this.player2;else this.currentPlayer = this.player1;
    } // Le joueur courant joue en caseId

  }, {
    key: "play",
    value: function play(caseId) {
      this.board[caseId] = this.currentPlayer.id;
    } // Renvoie vrai si le joueur courant a gagné (on vérifie "brut force" toutes les possibilités)

  }, {
    key: "isWin",
    value: function isWin() {
      var id = this.currentPlayer.id;
      return this.board[0] == id && this.board[1] == id && this.board[2] == id || this.board[3] == id && this.board[4] == id && this.board[5] == id || this.board[6] == id && this.board[7] == id && this.board[8] == id || this.board[0] == id && this.board[3] == id && this.board[6] == id || this.board[1] == id && this.board[4] == id && this.board[7] == id || this.board[2] == id && this.board[5] == id && this.board[8] == id || this.board[0] == id && this.board[4] == id && this.board[8] == id || this.board[2] == id && this.board[4] == id && this.board[6] == id;
    } // Renvoie vrai s'il y a match nul (aucune case)

  }, {
    key: "isDrawn",
    value: function isDrawn() {
      return this.board.find(function (element) {
        return element === 0;
      }) === undefined;
    }
  }]);

  return TicTacToe;
}(); // Classe pour gérer la persistance d'un tableau de joueurs

var PlayersDao = /*#__PURE__*/function () {
  function PlayersDao() {
    _classCallCheck(this, PlayersDao);
  }

  _createClass(PlayersDao, null, [{
    key: "savePlayers",
    value: // Sauvegarde le tableau de joueurs dans le local storage
    function savePlayers(players) {
      window.localStorage.setItem("players", JSON.stringify(players));
    } // Récupère le tableau de joueurs dans le local storage

  }, {
    key: "getAllPlayers",
    value: function getAllPlayers() {
      var stringPlayers = window.localStorage.getItem("players"); // Si tableau non stocké, on renvoie un tableau vide

      if (stringPlayers === null) return new Array();else return JSON.parse(stringPlayers);
    }
  }]);

  return PlayersDao;
}(); // Classe pour manipuler un tableau de joueurs

var PlayersUtils = /*#__PURE__*/function () {
  function PlayersUtils() {
    _classCallCheck(this, PlayersUtils);
  }

  _createClass(PlayersUtils, null, [{
    key: "findPlayerByNameInArray",
    value: // Recherche un joueur par son nom dans un tableau de joueurs
    function findPlayerByNameInArray(players, playerName) {
      return players.find(function (element) {
        return element.name == playerName;
      });
    } // Met à jour ou ajoute un joueur dans le tableau de joueurs

  }, {
    key: "addOrUpdatePlayerInArray",
    value: function addOrUpdatePlayerInArray(players, player) {
      var id = player.id,
          partialPlayer = _objectWithoutProperties(player, ["id"]); // partialPlayer = player moins l'id qu'on ne veut pas enregistrer


      var playerIndex = players.findIndex(function (element) {
        return element.name == player.name;
      });

      if (playerIndex != -1) {
        players[playerIndex] = partialPlayer; // Si le joueur existe déjà, on le met à jour
      } else {
        players.push(partialPlayer); // Sinon on l'ajoute à la fin
      }
    }
  }]);

  return PlayersUtils;
}(); // La classe CordovaAPI est un service permettant d'uiliser l'API de cordova sous forme de promesses

var CordovaAPI = /*#__PURE__*/function () {
  function CordovaAPI() {
    _classCallCheck(this, CordovaAPI);
  }

  _createClass(CordovaAPI, null, [{
    key: "takePicture",
    value: function takePicture() {
      return new Promise(function (resolve, reject) {
        navigator.camera.getPicture(function (imageData) {
          return resolve(imageData);
        }, function (err) {
          return reject(err);
        }, {
          // qualité encodage 50%, format base64 (et JPEG par défaut)
          quality: 50,
          destinationType: navigator.camera.DestinationType.DATA_URL,
          encodingType: navigator.camera.EncodingType.JPEG,
          mediaType: navigator.camera.MediaType.PICTURE,
          correctOrientation: true,
          sourceType: navigator.camera.PictureSourceType.CAMERA,
          cameraDirection: navigator.camera.Direction.FRONT
        });
      });
    }
  }]);

  return CordovaAPI;
}();

/***/ }),

/***/ "./www/js/view.js":
/*!************************!*\
  !*** ./www/js/view.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "onClickNewGame",
    value: function onClickNewGame(handler) {
      $("#btnNewGame").click(handler);
    }
  }]);

  return View;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvdmlldy5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiam91ZXVyRW5Db3VycyIsInBhcnRpZUVuQ291cnMiLCJWaWV3IiwiJCIsIm1vYmlsZSIsImNoYW5nZVBhZ2UiLCJ2aWV3Iiwib25DbGlja05ld0dhbWUiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbiIsImFwcCIsImluaXRpYWxpemUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRldmljZVJlYWR5IiwiYmluZCIsIlBpY3R1cmUiLCJkYXRhIiwiUGxheWVyIiwiaWQiLCJuYW1lIiwicGljdHVyZSIsIm5iV2luIiwibmJMb3NzIiwibmJEcmF3biIsIlRpY1RhY1RvZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwiYm9hcmQiLCJjdXJyZW50UGxheWVyIiwiTWF0aCIsInJhbmRvbSIsImNhc2VJZCIsImZpbmQiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiUGxheWVyc0RhbyIsInBsYXllcnMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmluZ1BsYXllcnMiLCJnZXRJdGVtIiwiQXJyYXkiLCJwYXJzZSIsIlBsYXllcnNVdGlscyIsInBsYXllck5hbWUiLCJwbGF5ZXIiLCJwYXJ0aWFsUGxheWVyIiwicGxheWVySW5kZXgiLCJmaW5kSW5kZXgiLCJwdXNoIiwiQ29yZG92YUFQSSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibmF2aWdhdG9yIiwiY2FtZXJhIiwiZ2V0UGljdHVyZSIsImltYWdlRGF0YSIsImVyciIsInF1YWxpdHkiLCJkZXN0aW5hdGlvblR5cGUiLCJEZXN0aW5hdGlvblR5cGUiLCJEQVRBX1VSTCIsImVuY29kaW5nVHlwZSIsIkVuY29kaW5nVHlwZSIsIkpQRUciLCJtZWRpYVR5cGUiLCJNZWRpYVR5cGUiLCJQSUNUVVJFIiwiY29ycmVjdE9yaWVudGF0aW9uIiwic291cmNlVHlwZSIsIlBpY3R1cmVTb3VyY2VUeXBlIiwiQ0FNRVJBIiwiY2FtZXJhRGlyZWN0aW9uIiwiRGlyZWN0aW9uIiwiRlJPTlQiLCJoYW5kbGVyIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7SUFFcUJBLFU7QUFRbkIsd0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxxQ0FQSjtBQUNSQyxtQkFBYSxFQUFFLElBRFA7QUFDYTtBQUNyQkMsbUJBQWEsRUFBRSxJQUZQLENBRWE7O0FBRmIsS0FPSTs7QUFBQSxrQ0FGUCxJQUFJQyxnREFBSixFQUVPOztBQUNaQyxLQUFD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T0VDLG9CQUFVLEVBQUVoQixTQUFTLENBQUNDLE1BQVYsQ0FBaUJnQixpQkFBakIsQ0FBbUNDLE1BUGpEO0FBUUVDLHlCQUFlLEVBQUVuQixTQUFTLENBQUNDLE1BQVYsQ0FBaUJtQixTQUFqQixDQUEyQkM7QUFSOUMsU0FIRjtBQWNELE9BZk0sQ0FBUDtBQWdCRDtBQWxCSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkdxQjlFLEk7QUFDbkIsa0JBQWM7QUFBQTtBQUFFOzs7O1dBRWhCLHdCQUFlK0UsT0FBZixFQUF3QjtBQUN0QjlFLE9BQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrRSxLQUFqQixDQUF1QkQsT0FBdkI7QUFDRCIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3d3dy9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIG1vZGVsIGZyb20gXCIuL21vZGVsLmpzXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICBzZXNzaW9uID0ge1xuICAgIGpvdWV1ckVuQ291cnM6IG51bGwsIC8vIExlIGpvdWV1ciBjb3VyYW50XG4gICAgcGFydGllRW5Db3VyczogbnVsbCwgLy8gTGEgcGFydGllIGVuIHRyYWluIGQnw6p0cmUgam91w6llXG4gIH07XG5cbiAgdmlldyA9IG5ldyBWaWV3KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJC5tb2JpbGUuY2hhbmdlUGFnZShcIiN2dWVBY2N1ZWlsXCIpO1xuXG4gICAgdGhpcy52aWV3Lm9uQ2xpY2tOZXdHYW1lKCgpID0+IHtcbiAgICAgIHRoaXMub25DbGlja05ld0dhbWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2tOZXdHYW1lKCkge1xuICAgIGNvbnNvbGUubG9nKFwiTmV3IGdhbWVcIik7XG4gICAgJC5tb2JpbGUuY2hhbmdlUGFnZShcIiN2dWVKZXVcIik7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlc3Npb24pO1xuICB9XG59XG4iLCIvLyBvbiBpbXBvcnRlIHVuaXF1ZW1lbnQgbGUgbW9kdWxlIGNvbnRyw7RsZXVyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5cbnZhciBhcHAgPSB7XG4gIC8vIEFwcGxpY2F0aW9uIENvbnN0cnVjdG9yXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkZXZpY2VyZWFkeVwiLFxuICAgICAgdGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcyksXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH0sXG5cbiAgLy8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxuICAvL1xuICAvLyBCaW5kIGFueSBjb3Jkb3ZhIGV2ZW50cyBoZXJlLiBDb21tb24gZXZlbnRzIGFyZTpcbiAgLy8gJ3BhdXNlJywgJ3Jlc3VtZScsIGV0Yy5cbiAgb25EZXZpY2VSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDb250cm9sbGVyKCk7XG4gIH0sXG59O1xuXG5hcHAuaW5pdGlhbGl6ZSgpO1xuIiwiLy8gQ2xhc3NlIHBvdXIgcmVwcsOpc2VudGVyIHVuZSBpbWFnZVxyXG5leHBvcnQgY2xhc3MgUGljdHVyZSB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIC8vIFJlbnZvaWUgbCdpbWFnZSBhdSBmb3JtYXQgQmFzZTY0IGF2ZWMgZW4tdMOqdGUgTUlNRVxyXG4gIGdldEJhc2U2NCgpIHtcclxuICAgIHJldHVybiBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgKyB0aGlzLmRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDbGFzc2UgcG91ciByZXByw6lzZW50ZXIgdW4gam91ZXVyXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwaWN0dXJlLCBuYldpbiA9IDAsIG5iTG9zcyA9IDAsIG5iRHJhd24gPSAwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5waWN0dXJlID0gcGljdHVyZTtcclxuICAgIHRoaXMubmJXaW4gPSBuYldpbjtcclxuICAgIHRoaXMubmJMb3NzID0gbmJMb3NzO1xyXG4gICAgdGhpcy5uYkRyYXduID0gbmJEcmF3bjtcclxuICB9XHJcbn1cclxuXHJcbi8vIENsYXNzZSBwb3VyIHJlcHLDqXNlbnRlciB1bmUgcGFydGllIGRlIFRpY1RhY1RvZVxyXG5leHBvcnQgY2xhc3MgVGljVGFjVG9lIHtcclxuICBjb25zdHJ1Y3RvcihwbGF5ZXIxLCBwbGF5ZXIyKSB7XHJcbiAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xyXG4gICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcclxuICAgIHRoaXMuYm9hcmQgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gcGxheWVyMSA6IHBsYXllcjI7IC8vIExlIHByZW1pZXIgam91ZXVyIGVzdCBjaG9pc2kgYWzDqWF0b2lyZW1lbnRcclxuICB9XHJcblxyXG4gIC8vIENoYW5nZXIgZGUgam91ZXVyIGNvdXJhbnRcclxuICBzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxKSB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjI7XHJcbiAgICBlbHNlIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyMTtcclxuICB9XHJcblxyXG4gIC8vIExlIGpvdWV1ciBjb3VyYW50IGpvdWUgZW4gY2FzZUlkXHJcbiAgcGxheShjYXNlSWQpIHtcclxuICAgIHRoaXMuYm9hcmRbY2FzZUlkXSA9IHRoaXMuY3VycmVudFBsYXllci5pZDtcclxuICB9XHJcblxyXG4gIC8vIFJlbnZvaWUgdnJhaSBzaSBsZSBqb3VldXIgY291cmFudCBhIGdhZ27DqSAob24gdsOpcmlmaWUgXCJicnV0IGZvcmNlXCIgdG91dGVzIGxlcyBwb3NzaWJpbGl0w6lzKVxyXG4gIGlzV2luKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmN1cnJlbnRQbGF5ZXIuaWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5ib2FyZFswXSA9PSBpZCAmJiB0aGlzLmJvYXJkWzFdID09IGlkICYmIHRoaXMuYm9hcmRbMl0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzNdID09IGlkICYmIHRoaXMuYm9hcmRbNF0gPT0gaWQgJiYgdGhpcy5ib2FyZFs1XSA9PSBpZCkgfHxcclxuICAgICAgKHRoaXMuYm9hcmRbNl0gPT0gaWQgJiYgdGhpcy5ib2FyZFs3XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzhdID09IGlkKSB8fFxyXG4gICAgICAodGhpcy5ib2FyZFswXSA9PSBpZCAmJiB0aGlzLmJvYXJkWzNdID09IGlkICYmIHRoaXMuYm9hcmRbNl0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzFdID09IGlkICYmIHRoaXMuYm9hcmRbNF0gPT0gaWQgJiYgdGhpcy5ib2FyZFs3XSA9PSBpZCkgfHxcclxuICAgICAgKHRoaXMuYm9hcmRbMl0gPT0gaWQgJiYgdGhpcy5ib2FyZFs1XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzhdID09IGlkKSB8fFxyXG4gICAgICAodGhpcy5ib2FyZFswXSA9PSBpZCAmJiB0aGlzLmJvYXJkWzRdID09IGlkICYmIHRoaXMuYm9hcmRbOF0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzJdID09IGlkICYmIHRoaXMuYm9hcmRbNF0gPT0gaWQgJiYgdGhpcy5ib2FyZFs2XSA9PSBpZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW52b2llIHZyYWkgcydpbCB5IGEgbWF0Y2ggbnVsIChhdWN1bmUgY2FzZSlcclxuICBpc0RyYXduKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gMCkgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIENsYXNzZSBwb3VyIGfDqXJlciBsYSBwZXJzaXN0YW5jZSBkJ3VuIHRhYmxlYXUgZGUgam91ZXVyc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyc0RhbyB7XHJcbiAgLy8gU2F1dmVnYXJkZSBsZSB0YWJsZWF1IGRlIGpvdWV1cnMgZGFucyBsZSBsb2NhbCBzdG9yYWdlXHJcbiAgc3RhdGljIHNhdmVQbGF5ZXJzKHBsYXllcnMpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBsYXllcnNcIiwgSlNPTi5zdHJpbmdpZnkocGxheWVycykpO1xyXG4gIH1cclxuXHJcbiAgLy8gUsOpY3Vww6hyZSBsZSB0YWJsZWF1IGRlIGpvdWV1cnMgZGFucyBsZSBsb2NhbCBzdG9yYWdlXHJcbiAgc3RhdGljIGdldEFsbFBsYXllcnMoKSB7XHJcbiAgICBjb25zdCBzdHJpbmdQbGF5ZXJzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyc1wiKTtcclxuICAgIC8vIFNpIHRhYmxlYXUgbm9uIHN0b2Nrw6ksIG9uIHJlbnZvaWUgdW4gdGFibGVhdSB2aWRlXHJcbiAgICBpZiAoc3RyaW5nUGxheWVycyA9PT0gbnVsbCkgcmV0dXJuIG5ldyBBcnJheSgpO1xyXG4gICAgZWxzZSByZXR1cm4gSlNPTi5wYXJzZShzdHJpbmdQbGF5ZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENsYXNzZSBwb3VyIG1hbmlwdWxlciB1biB0YWJsZWF1IGRlIGpvdWV1cnNcclxuZXhwb3J0IGNsYXNzIFBsYXllcnNVdGlscyB7XHJcbiAgLy8gUmVjaGVyY2hlIHVuIGpvdWV1ciBwYXIgc29uIG5vbSBkYW5zIHVuIHRhYmxlYXUgZGUgam91ZXVyc1xyXG4gIHN0YXRpYyBmaW5kUGxheWVyQnlOYW1lSW5BcnJheShwbGF5ZXJzLCBwbGF5ZXJOYW1lKSB7XHJcbiAgICByZXR1cm4gcGxheWVycy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT0gcGxheWVyTmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBNZXQgw6Agam91ciBvdSBham91dGUgdW4gam91ZXVyIGRhbnMgbGUgdGFibGVhdSBkZSBqb3VldXJzXHJcbiAgc3RhdGljIGFkZE9yVXBkYXRlUGxheWVySW5BcnJheShwbGF5ZXJzLCBwbGF5ZXIpIHtcclxuICAgIGNvbnN0IHsgaWQsIC4uLnBhcnRpYWxQbGF5ZXIgfSA9IHBsYXllcjsgLy8gcGFydGlhbFBsYXllciA9IHBsYXllciBtb2lucyBsJ2lkIHF1J29uIG5lIHZldXQgcGFzIGVucmVnaXN0cmVyXHJcbiAgICBjb25zdCBwbGF5ZXJJbmRleCA9IHBsYXllcnMuZmluZEluZGV4KFxyXG4gICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09IHBsYXllci5uYW1lXHJcbiAgICApO1xyXG4gICAgaWYgKHBsYXllckluZGV4ICE9IC0xKSB7XHJcbiAgICAgIHBsYXllcnNbcGxheWVySW5kZXhdID0gcGFydGlhbFBsYXllcjsgLy8gU2kgbGUgam91ZXVyIGV4aXN0ZSBkw6lqw6AsIG9uIGxlIG1ldCDDoCBqb3VyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGF5ZXJzLnB1c2gocGFydGlhbFBsYXllcik7IC8vIFNpbm9uIG9uIGwnYWpvdXRlIMOgIGxhIGZpblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGEgY2xhc3NlIENvcmRvdmFBUEkgZXN0IHVuIHNlcnZpY2UgcGVybWV0dGFudCBkJ3VpbGlzZXIgbCdBUEkgZGUgY29yZG92YSBzb3VzIGZvcm1lIGRlIHByb21lc3Nlc1xyXG5leHBvcnQgY2xhc3MgQ29yZG92YUFQSSB7XHJcbiAgc3RhdGljIHRha2VQaWN0dXJlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbmF2aWdhdG9yLmNhbWVyYS5nZXRQaWN0dXJlKFxyXG4gICAgICAgIChpbWFnZURhdGEpID0+IHJlc29sdmUoaW1hZ2VEYXRhKSxcclxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBxdWFsaXTDqSBlbmNvZGFnZSA1MCUsIGZvcm1hdCBiYXNlNjQgKGV0IEpQRUcgcGFyIGTDqWZhdXQpXHJcbiAgICAgICAgICBxdWFsaXR5OiA1MCxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uVHlwZTogbmF2aWdhdG9yLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuREFUQV9VUkwsXHJcbiAgICAgICAgICBlbmNvZGluZ1R5cGU6IG5hdmlnYXRvci5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXHJcbiAgICAgICAgICBtZWRpYVR5cGU6IG5hdmlnYXRvci5jYW1lcmEuTWVkaWFUeXBlLlBJQ1RVUkUsXHJcbiAgICAgICAgICBjb3JyZWN0T3JpZW50YXRpb246IHRydWUsXHJcbiAgICAgICAgICBzb3VyY2VUeXBlOiBuYXZpZ2F0b3IuY2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSxcclxuICAgICAgICAgIGNhbWVyYURpcmVjdGlvbjogbmF2aWdhdG9yLmNhbWVyYS5EaXJlY3Rpb24uRlJPTlQsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25DbGlja05ld0dhbWUoaGFuZGxlcikge1xyXG4gICAgJChcIiNidG5OZXdHYW1lXCIpLmNsaWNrKGhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9