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

    _defineProperty(this, "game", null);

    // Load players
    this.p1 = new _model_js__WEBPACK_IMPORTED_MODULE_0__["Player"](1, "", "");
    this.p2 = new _model_js__WEBPACK_IMPORTED_MODULE_0__["Player"](2, "", "");
    $.mobile.changePage("#vueAccueil");
    this.view.onClickTakePicture(function (index) {
      _this.onClickTakePicture(index);
    });
    this.view.onClickReplay(function () {
      _this.onClickReplay();
    });
    this.view.onClickNewGame(function () {
      _this.onClickNewGame();
    });
    this.view.onGridClick(function (index) {
      _this.onGridClick(index);
    });
    this.view.onClickScore(function (index) {
      _this.onClickScore(index);
    });
  }

  _createClass(Controller, [{
    key: "onClickReplay",
    value: function onClickReplay() {
      this.game = new _model_js__WEBPACK_IMPORTED_MODULE_0__["TicTacToe"](this.p1, this.p2);
      this.view.resetGrid();
    }
  }, {
    key: "onClickTakePicture",
    value: function onClickTakePicture(playerIndex) {
      var _this2 = this;

      console.log("joueur " + playerIndex);
      _model_js__WEBPACK_IMPORTED_MODULE_0__["CordovaAPI"].takePicture().then(function (val) {
        if (playerIndex == 1) {
          _this2.p1.picture = val;
        } else {
          _this2.p2.picture = val;
        }
      });
    }
  }, {
    key: "onClickScore",
    value: function onClickScore() {
      this.view.setPlayersScores(_model_js__WEBPACK_IMPORTED_MODULE_0__["PlayersDao"].getAllPlayers());
      $.mobile.changePage("#vueFin");
    }
  }, {
    key: "onClickNewGame",
    value: function onClickNewGame() {
      this.p1.name = this.view.getPlayernameInput(1);
      this.view.setPlayername(1, this.p1.name);
      this.p2.name = this.view.getPlayernameInput(2);
      this.view.setPlayername(2, this.p2.name);
      this.game = new _model_js__WEBPACK_IMPORTED_MODULE_0__["TicTacToe"](this.p1, this.p2);
      this.view.setCurrentPlayer(this.game.currentPlayer.name);
      $.mobile.changePage("#vueJeu");
    }
  }, {
    key: "onGridClick",
    value: function onGridClick(index) {
      if (this.game.over) {
        return;
      }

      this.game.play(index);
      this.game.switchCurrentPlayer();
      this.view.setCurrentPlayer(this.game.currentPlayer.name);
      this.view.setImgOnBtn(index, this.game.currentPlayer.picture);

      if (this.game.isWin()) {
        this.view.setResultat("Win");
        this.end();
        return;
      }

      if (this.game.isDrawn()) {
        this.view.setResultat("Draw");
        this.end();
        return;
      }
    }
  }, {
    key: "end",
    value: function end() {
      this.game.save();
      this.game.over = true;
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(this, "over", false);

    this.player1 = player1;
    this.player2 = player2;
    var players = PlayersDao.getAllPlayers();
    var p1f = PlayersUtils.findPlayerByNameInArray(players, this.player1.name);

    if (p1f) {
      this.player1 = p1f;
    }

    var p2f = PlayersUtils.findPlayerByNameInArray(players, this.player2.name);

    if (p2f) {
      this.player2 = p2f;
    }

    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentPlayer = Math.random() < 0.5 ? player1 : player2; // Le premier joueur est choisi aléatoirement
  } // Changer de joueur courant


  _createClass(TicTacToe, [{
    key: "switchCurrentPlayer",
    value: function switchCurrentPlayer() {
      this.currentPlayer = this.player1 == this.currentPlayer ? this.player2 : this.player1;
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
  }, {
    key: "save",
    value: function save() {
      if (this.isWin()) {
        this.currentPlayer.nbWin++;
        this.switchCurrentPlayer();
        this.currentPlayer.nbLoss++;
      } else if (this.isDrawn()) {
        this.currentPlayer.nbDrawn++;
      }

      var players = PlayersDao.getAllPlayers();
      PlayersUtils.addOrUpdatePlayerInArray(players, this.player1);
      PlayersUtils.addOrUpdatePlayerInArray(players, this.player2);
      PlayersDao.savePlayers(players);
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, [{
    key: "onClickTakePicture",
    value: function onClickTakePicture(handler) {
      var _loop = function _loop(i) {
        $("#btnPhoto".concat(i)).click(function () {
          handler(i);
        });
      };

      for (var i = 1; i <= 2; i++) {
        _loop(i);
      }
    }
  }, {
    key: "onClickNewGame",
    value: function onClickNewGame(handler) {
      $("#btnNewGame").click(function () {
        handler();
      });
    }
  }, {
    key: "onClickReplay",
    value: function onClickReplay(handler) {
      $("#btnNouveauCoup").click(function () {
        handler();
      });
    }
  }, {
    key: "onClickScore",
    value: function onClickScore(handler) {
      $("#btnFinPartie").click(function () {
        handler();
      });
    }
  }, {
    key: "onGridClick",
    value: function onGridClick(handler) {
      var _loop2 = function _loop2(i) {
        var btn = $("#btnGrid".concat(i));
        btn.click(function () {
          if (btn.html() === "") {
            handler(i);
          }
        });
      };

      for (var i = 0; i < 9; i++) {
        _loop2(i);
      }
    }
  }, {
    key: "setImgOnBtn",
    value: function setImgOnBtn(index, image) {
      $("#btnGrid".concat(index)).html("<img width=\"100px\" height=\"100px\" src=\"data:image/jpeg;base64,".concat(image, "\" />"));
    }
  }, {
    key: "getPlayernameInput",
    value: function getPlayernameInput(index) {
      console.log($("#nomJoueur".concat(index)));
      return $("#nomJoueur".concat(index)).val();
    }
  }, {
    key: "setResultat",
    value: function setResultat(resultat) {
      $("#texteResultat").html(resultat);
    }
  }, {
    key: "setCurrentPlayer",
    value: function setCurrentPlayer(player) {
      $("span[data-role=\"currentPlayer\"]").html(player);
    }
  }, {
    key: "setPlayername",
    value: function setPlayername(index, name) {
      $("span[data-role=\"nomJoueur".concat(index, "\"]")).each(function () {
        $(this).html(name);
      });
    }
  }, {
    key: "resetGrid",
    value: function resetGrid() {
      for (var i = 0; i < 9; i++) {
        $("#btnGrid".concat(i)).html("");
      }
    }
  }, {
    key: "setPlayersScores",
    value: function setPlayersScores(players) {
      $("#vueFin").html('<div class="ui-content" data-role="main">');

      var _iterator = _createForOfIteratorHelper(players),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var player = _step.value;
          $("#vueFin").append("\n      \n        <div style=\"text-align: center\">\n          <img\n            data-role=\"photoJoueur\"\n            src=\"".concat(player.picture, "\"\n            style=\"\n              width: 200px;\n              margin-left: auto;\n              margin-right: auto;\n              display: block;\n            \"\n          />\n\n          <h1><span data-role=\"nomJoueur\" style=\"color: blue\">").concat(player.name, "</span></h1>\n          <p>\n            <span style=\"color: green\"\n              >Victoires : <span id=\"nbVictoires\">").concat(player.nbWin, "</span\n            ></span>\n            /\n            <span style=\"color: orange\">Nuls : <span id=\"nbNuls\">").concat(player.nbDrawn, "</span></span>\n            /\n            <span style=\"color: red\"\n              >D\xE9faites : <span id=\"nbDefaites\">").concat(player.nbLoss, "</span\n            ></span>\n          </p>\n        </div>\n        <button id=\"btnSupprimer\" data-icon=\"delete\">Supprimer</button>\n      \n      "));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      $("#vueFin").append("\n    <button id=\"btnRetourJeu\" data-icon=\"carat-l\">Continuer</button>\n    </div>");
    }
  }]);

  return View;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvdmlldy5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiam91ZXVyRW5Db3VycyIsInBhcnRpZUVuQ291cnMiLCJWaWV3IiwicDEiLCJQbGF5ZXIiLCJwMiIsIiQiLCJtb2JpbGUiLCJjaGFuZ2VQYWdlIiwidmlldyIsIm9uQ2xpY2tUYWtlUGljdHVyZSIsImluZGV4Iiwib25DbGlja1JlcGxheSIsIm9uQ2xpY2tOZXdHYW1lIiwib25HcmlkQ2xpY2siLCJvbkNsaWNrU2NvcmUiLCJnYW1lIiwiVGljVGFjVG9lIiwicmVzZXRHcmlkIiwicGxheWVySW5kZXgiLCJjb25zb2xlIiwibG9nIiwiQ29yZG92YUFQSSIsInRha2VQaWN0dXJlIiwidGhlbiIsInZhbCIsInBpY3R1cmUiLCJzZXRQbGF5ZXJzU2NvcmVzIiwiUGxheWVyc0RhbyIsImdldEFsbFBsYXllcnMiLCJuYW1lIiwiZ2V0UGxheWVybmFtZUlucHV0Iiwic2V0UGxheWVybmFtZSIsInNldEN1cnJlbnRQbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwib3ZlciIsInBsYXkiLCJzd2l0Y2hDdXJyZW50UGxheWVyIiwic2V0SW1nT25CdG4iLCJpc1dpbiIsInNldFJlc3VsdGF0IiwiZW5kIiwiaXNEcmF3biIsInNhdmUiLCJhcHAiLCJpbml0aWFsaXplIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25EZXZpY2VSZWFkeSIsImJpbmQiLCJQaWN0dXJlIiwiZGF0YSIsImlkIiwibmJXaW4iLCJuYkxvc3MiLCJuYkRyYXduIiwicGxheWVyMSIsInBsYXllcjIiLCJwbGF5ZXJzIiwicDFmIiwiUGxheWVyc1V0aWxzIiwiZmluZFBsYXllckJ5TmFtZUluQXJyYXkiLCJwMmYiLCJib2FyZCIsIk1hdGgiLCJyYW5kb20iLCJjYXNlSWQiLCJmaW5kIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImFkZE9yVXBkYXRlUGxheWVySW5BcnJheSIsInNhdmVQbGF5ZXJzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdHJpbmdQbGF5ZXJzIiwiZ2V0SXRlbSIsIkFycmF5IiwicGFyc2UiLCJwbGF5ZXJOYW1lIiwicGxheWVyIiwicGFydGlhbFBsYXllciIsImZpbmRJbmRleCIsInB1c2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hdmlnYXRvciIsImNhbWVyYSIsImdldFBpY3R1cmUiLCJpbWFnZURhdGEiLCJlcnIiLCJxdWFsaXR5IiwiZGVzdGluYXRpb25UeXBlIiwiRGVzdGluYXRpb25UeXBlIiwiREFUQV9VUkwiLCJlbmNvZGluZ1R5cGUiLCJFbmNvZGluZ1R5cGUiLCJKUEVHIiwibWVkaWFUeXBlIiwiTWVkaWFUeXBlIiwiUElDVFVSRSIsImNvcnJlY3RPcmllbnRhdGlvbiIsInNvdXJjZVR5cGUiLCJQaWN0dXJlU291cmNlVHlwZSIsIkNBTUVSQSIsImNhbWVyYURpcmVjdGlvbiIsIkRpcmVjdGlvbiIsIkZST05UIiwiaGFuZGxlciIsImkiLCJjbGljayIsImJ0biIsImh0bWwiLCJpbWFnZSIsInJlc3VsdGF0IiwiZWFjaCIsImFwcGVuZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxp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QXVCNEMyQixNQUFNLENBQUM1QixNQXZCbkQ7QUE4QkQ7QUFqQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0N4QmhELE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWlILE1BQWI7QUFHRCIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3d3dy9qcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRpY1RhY1RvZSwgUGxheWVyc0RhbywgUGxheWVyLCBDb3Jkb3ZhQVBJIH0gZnJvbSBcIi4vbW9kZWwuanNcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gIHNlc3Npb24gPSB7XG4gICAgam91ZXVyRW5Db3VyczogbnVsbCwgLy8gTGUgam91ZXVyIGNvdXJhbnRcbiAgICBwYXJ0aWVFbkNvdXJzOiBudWxsLCAvLyBMYSBwYXJ0aWUgZW4gdHJhaW4gZCfDqnRyZSBqb3XDqWVcbiAgfTtcblxuICB2aWV3ID0gbmV3IFZpZXcoKTtcbiAgZ2FtZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gTG9hZCBwbGF5ZXJzXG4gICAgdGhpcy5wMSA9IG5ldyBQbGF5ZXIoMSwgXCJcIiwgXCJcIik7XG4gICAgdGhpcy5wMiA9IG5ldyBQbGF5ZXIoMiwgXCJcIiwgXCJcIik7XG5cbiAgICAkLm1vYmlsZS5jaGFuZ2VQYWdlKFwiI3Z1ZUFjY3VlaWxcIik7XG5cbiAgICB0aGlzLnZpZXcub25DbGlja1Rha2VQaWN0dXJlKChpbmRleCkgPT4ge1xuICAgICAgdGhpcy5vbkNsaWNrVGFrZVBpY3R1cmUoaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy52aWV3Lm9uQ2xpY2tSZXBsYXkoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsaWNrUmVwbGF5KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZXcub25DbGlja05ld0dhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsaWNrTmV3R2FtZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy52aWV3Lm9uR3JpZENsaWNrKChpbmRleCkgPT4ge1xuICAgICAgdGhpcy5vbkdyaWRDbGljayhpbmRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZXcub25DbGlja1Njb3JlKChpbmRleCkgPT4ge1xuICAgICAgdGhpcy5vbkNsaWNrU2NvcmUoaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGlja1JlcGxheSgpIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgVGljVGFjVG9lKHRoaXMucDEsIHRoaXMucDIpO1xuICAgIHRoaXMudmlldy5yZXNldEdyaWQoKTtcbiAgfVxuXG4gIG9uQ2xpY2tUYWtlUGljdHVyZShwbGF5ZXJJbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwiam91ZXVyIFwiICsgcGxheWVySW5kZXgpO1xuICAgIENvcmRvdmFBUEkudGFrZVBpY3R1cmUoKS50aGVuKCh2YWwpID0+IHtcbiAgICAgIGlmIChwbGF5ZXJJbmRleCA9PSAxKSB7XG4gICAgICAgIHRoaXMucDEucGljdHVyZSA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucDIucGljdHVyZSA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2tTY29yZSgpIHtcbiAgICB0aGlzLnZpZXcuc2V0UGxheWVyc1Njb3JlcyhQbGF5ZXJzRGFvLmdldEFsbFBsYXllcnMoKSk7XG4gICAgJC5tb2JpbGUuY2hhbmdlUGFnZShcIiN2dWVGaW5cIik7XG4gIH1cblxuICBvbkNsaWNrTmV3R2FtZSgpIHtcbiAgICB0aGlzLnAxLm5hbWUgPSB0aGlzLnZpZXcuZ2V0UGxheWVybmFtZUlucHV0KDEpO1xuICAgIHRoaXMudmlldy5zZXRQbGF5ZXJuYW1lKDEsIHRoaXMucDEubmFtZSk7XG4gICAgdGhpcy5wMi5uYW1lID0gdGhpcy52aWV3LmdldFBsYXllcm5hbWVJbnB1dCgyKTtcbiAgICB0aGlzLnZpZXcuc2V0UGxheWVybmFtZSgyLCB0aGlzLnAyLm5hbWUpO1xuXG4gICAgdGhpcy5nYW1lID0gbmV3IFRpY1RhY1RvZSh0aGlzLnAxLCB0aGlzLnAyKTtcblxuICAgIHRoaXMudmlldy5zZXRDdXJyZW50UGxheWVyKHRoaXMuZ2FtZS5jdXJyZW50UGxheWVyLm5hbWUpO1xuICAgICQubW9iaWxlLmNoYW5nZVBhZ2UoXCIjdnVlSmV1XCIpO1xuICB9XG5cbiAgb25HcmlkQ2xpY2soaW5kZXgpIHtcbiAgICBpZiAodGhpcy5nYW1lLm92ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nYW1lLnBsYXkoaW5kZXgpO1xuICAgIHRoaXMuZ2FtZS5zd2l0Y2hDdXJyZW50UGxheWVyKCk7XG4gICAgdGhpcy52aWV3LnNldEN1cnJlbnRQbGF5ZXIodGhpcy5nYW1lLmN1cnJlbnRQbGF5ZXIubmFtZSk7XG4gICAgdGhpcy52aWV3LnNldEltZ09uQnRuKGluZGV4LCB0aGlzLmdhbWUuY3VycmVudFBsYXllci5waWN0dXJlKTtcbiAgICBpZiAodGhpcy5nYW1lLmlzV2luKCkpIHtcbiAgICAgIHRoaXMudmlldy5zZXRSZXN1bHRhdChcIldpblwiKTtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWUuaXNEcmF3bigpKSB7XG4gICAgICB0aGlzLnZpZXcuc2V0UmVzdWx0YXQoXCJEcmF3XCIpO1xuICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBlbmQoKSB7XG4gICAgdGhpcy5nYW1lLnNhdmUoKTtcbiAgICB0aGlzLmdhbWUub3ZlciA9IHRydWU7XG4gIH1cbn1cbiIsIi8vIG9uIGltcG9ydGUgdW5pcXVlbWVudCBsZSBtb2R1bGUgY29udHLDtGxldXJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcblxudmFyIGFwcCA9IHtcbiAgLy8gQXBwbGljYXRpb24gQ29uc3RydWN0b3JcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRldmljZXJlYWR5XCIsXG4gICAgICB0aGlzLm9uRGV2aWNlUmVhZHkuYmluZCh0aGlzKSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfSxcblxuICAvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXG4gIC8vXG4gIC8vIEJpbmQgYW55IGNvcmRvdmEgZXZlbnRzIGhlcmUuIENvbW1vbiBldmVudHMgYXJlOlxuICAvLyAncGF1c2UnLCAncmVzdW1lJywgZXRjLlxuICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgbmV3IENvbnRyb2xsZXIoKTtcbiAgfSxcbn07XG5cbmFwcC5pbml0aWFsaXplKCk7XG4iLCIvLyBDbGFzc2UgcG91ciByZXByw6lzZW50ZXIgdW5lIGltYWdlXHJcbmV4cG9ydCBjbGFzcyBQaWN0dXJlIHtcclxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVudm9pZSBsJ2ltYWdlIGF1IGZvcm1hdCBCYXNlNjQgYXZlYyBlbi10w6p0ZSBNSU1FXHJcbiAgZ2V0QmFzZTY0KCkge1xyXG4gICAgcmV0dXJuIFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIiArIHRoaXMuZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENsYXNzZSBwb3VyIHJlcHLDqXNlbnRlciB1biBqb3VldXJcclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHBpY3R1cmUsIG5iV2luID0gMCwgbmJMb3NzID0gMCwgbmJEcmF3biA9IDApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnBpY3R1cmUgPSBwaWN0dXJlO1xyXG4gICAgdGhpcy5uYldpbiA9IG5iV2luO1xyXG4gICAgdGhpcy5uYkxvc3MgPSBuYkxvc3M7XHJcbiAgICB0aGlzLm5iRHJhd24gPSBuYkRyYXduO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2xhc3NlIHBvdXIgcmVwcsOpc2VudGVyIHVuZSBwYXJ0aWUgZGUgVGljVGFjVG9lXHJcbmV4cG9ydCBjbGFzcyBUaWNUYWNUb2Uge1xyXG4gIG92ZXIgPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcihwbGF5ZXIxLCBwbGF5ZXIyKSB7XHJcbiAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xyXG4gICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcclxuICAgIGxldCBwbGF5ZXJzID0gUGxheWVyc0Rhby5nZXRBbGxQbGF5ZXJzKCk7XHJcbiAgICBsZXQgcDFmID0gUGxheWVyc1V0aWxzLmZpbmRQbGF5ZXJCeU5hbWVJbkFycmF5KHBsYXllcnMsIHRoaXMucGxheWVyMS5uYW1lKTtcclxuICAgIGlmIChwMWYpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIxID0gcDFmO1xyXG4gICAgfVxyXG4gICAgbGV0IHAyZiA9IFBsYXllcnNVdGlscy5maW5kUGxheWVyQnlOYW1lSW5BcnJheShwbGF5ZXJzLCB0aGlzLnBsYXllcjIubmFtZSk7XHJcbiAgICBpZiAocDJmKSB7XHJcbiAgICAgIHRoaXMucGxheWVyMiA9IHAyZjtcclxuICAgIH1cclxuICAgIHRoaXMuYm9hcmQgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gcGxheWVyMSA6IHBsYXllcjI7IC8vIExlIHByZW1pZXIgam91ZXVyIGVzdCBjaG9pc2kgYWzDqWF0b2lyZW1lbnRcclxuICB9XHJcblxyXG4gIC8vIENoYW5nZXIgZGUgam91ZXVyIGNvdXJhbnRcclxuICBzd2l0Y2hDdXJyZW50UGxheWVyKCkge1xyXG4gICAgdGhpcy5jdXJyZW50UGxheWVyID1cclxuICAgICAgdGhpcy5wbGF5ZXIxID09IHRoaXMuY3VycmVudFBsYXllciA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyMTtcclxuICB9XHJcblxyXG4gIC8vIExlIGpvdWV1ciBjb3VyYW50IGpvdWUgZW4gY2FzZUlkXHJcbiAgcGxheShjYXNlSWQpIHtcclxuICAgIHRoaXMuYm9hcmRbY2FzZUlkXSA9IHRoaXMuY3VycmVudFBsYXllci5pZDtcclxuICB9XHJcblxyXG4gIC8vIFJlbnZvaWUgdnJhaSBzaSBsZSBqb3VldXIgY291cmFudCBhIGdhZ27DqSAob24gdsOpcmlmaWUgXCJicnV0IGZvcmNlXCIgdG91dGVzIGxlcyBwb3NzaWJpbGl0w6lzKVxyXG4gIGlzV2luKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmN1cnJlbnRQbGF5ZXIuaWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodGhpcy5ib2FyZFswXSA9PSBpZCAmJiB0aGlzLmJvYXJkWzFdID09IGlkICYmIHRoaXMuYm9hcmRbMl0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzNdID09IGlkICYmIHRoaXMuYm9hcmRbNF0gPT0gaWQgJiYgdGhpcy5ib2FyZFs1XSA9PSBpZCkgfHxcclxuICAgICAgKHRoaXMuYm9hcmRbNl0gPT0gaWQgJiYgdGhpcy5ib2FyZFs3XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzhdID09IGlkKSB8fFxyXG4gICAgICAodGhpcy5ib2FyZFswXSA9PSBpZCAmJiB0aGlzLmJvYXJkWzNdID09IGlkICYmIHRoaXMuYm9hcmRbNl0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzFdID09IGlkICYmIHRoaXMuYm9hcmRbNF0gPT0gaWQgJiYgdGhpcy5ib2FyZFs3XSA9PSBpZCkgfHxcclxuICAgICAgKHRoaXMuYm9hcmRbMl0gPT0gaWQgJiYgdGhpcy5ib2FyZFs1XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzhdID09IGlkKSB8fFxyXG4gICAgICAodGhpcy5ib2FyZFswXSA9PSBpZCAmJiB0aGlzLmJvYXJkWzRdID09IGlkICYmIHRoaXMuYm9hcmRbOF0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzJdID09IGlkICYmIHRoaXMuYm9hcmRbNF0gPT0gaWQgJiYgdGhpcy5ib2FyZFs2XSA9PSBpZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW52b2llIHZyYWkgcydpbCB5IGEgbWF0Y2ggbnVsIChhdWN1bmUgY2FzZSlcclxuICBpc0RyYXduKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gMCkgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBpZiAodGhpcy5pc1dpbigpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBsYXllci5uYldpbisrO1xyXG4gICAgICB0aGlzLnN3aXRjaEN1cnJlbnRQbGF5ZXIoKTtcclxuICAgICAgdGhpcy5jdXJyZW50UGxheWVyLm5iTG9zcysrO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRHJhd24oKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIubmJEcmF3bisrO1xyXG4gICAgfVxyXG4gICAgbGV0IHBsYXllcnMgPSBQbGF5ZXJzRGFvLmdldEFsbFBsYXllcnMoKTtcclxuICAgIFBsYXllcnNVdGlscy5hZGRPclVwZGF0ZVBsYXllckluQXJyYXkocGxheWVycywgdGhpcy5wbGF5ZXIxKTtcclxuICAgIFBsYXllcnNVdGlscy5hZGRPclVwZGF0ZVBsYXllckluQXJyYXkocGxheWVycywgdGhpcy5wbGF5ZXIyKTtcclxuXHJcbiAgICBQbGF5ZXJzRGFvLnNhdmVQbGF5ZXJzKHBsYXllcnMpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2xhc3NlIHBvdXIgZ8OpcmVyIGxhIHBlcnNpc3RhbmNlIGQndW4gdGFibGVhdSBkZSBqb3VldXJzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJzRGFvIHtcclxuICAvLyBTYXV2ZWdhcmRlIGxlIHRhYmxlYXUgZGUgam91ZXVycyBkYW5zIGxlIGxvY2FsIHN0b3JhZ2VcclxuICBzdGF0aWMgc2F2ZVBsYXllcnMocGxheWVycykge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyc1wiLCBKU09OLnN0cmluZ2lmeShwbGF5ZXJzKSk7XHJcbiAgfVxyXG5cclxuICAvLyBSw6ljdXDDqHJlIGxlIHRhYmxlYXUgZGUgam91ZXVycyBkYW5zIGxlIGxvY2FsIHN0b3JhZ2VcclxuICBzdGF0aWMgZ2V0QWxsUGxheWVycygpIHtcclxuICAgIGNvbnN0IHN0cmluZ1BsYXllcnMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJzXCIpO1xyXG4gICAgLy8gU2kgdGFibGVhdSBub24gc3RvY2vDqSwgb24gcmVudm9pZSB1biB0YWJsZWF1IHZpZGVcclxuICAgIGlmIChzdHJpbmdQbGF5ZXJzID09PSBudWxsKSByZXR1cm4gbmV3IEFycmF5KCk7XHJcbiAgICBlbHNlIHJldHVybiBKU09OLnBhcnNlKHN0cmluZ1BsYXllcnMpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2xhc3NlIHBvdXIgbWFuaXB1bGVyIHVuIHRhYmxlYXUgZGUgam91ZXVyc1xyXG5leHBvcnQgY2xhc3MgUGxheWVyc1V0aWxzIHtcclxuICAvLyBSZWNoZXJjaGUgdW4gam91ZXVyIHBhciBzb24gbm9tIGRhbnMgdW4gdGFibGVhdSBkZSBqb3VldXJzXHJcbiAgc3RhdGljIGZpbmRQbGF5ZXJCeU5hbWVJbkFycmF5KHBsYXllcnMsIHBsYXllck5hbWUpIHtcclxuICAgIHJldHVybiBwbGF5ZXJzLmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PSBwbGF5ZXJOYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIE1ldCDDoCBqb3VyIG91IGFqb3V0ZSB1biBqb3VldXIgZGFucyBsZSB0YWJsZWF1IGRlIGpvdWV1cnNcclxuICBzdGF0aWMgYWRkT3JVcGRhdGVQbGF5ZXJJbkFycmF5KHBsYXllcnMsIHBsYXllcikge1xyXG4gICAgY29uc3QgeyBpZCwgLi4ucGFydGlhbFBsYXllciB9ID0gcGxheWVyOyAvLyBwYXJ0aWFsUGxheWVyID0gcGxheWVyIG1vaW5zIGwnaWQgcXUnb24gbmUgdmV1dCBwYXMgZW5yZWdpc3RyZXJcclxuICAgIGNvbnN0IHBsYXllckluZGV4ID0gcGxheWVycy5maW5kSW5kZXgoXHJcbiAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50Lm5hbWUgPT0gcGxheWVyLm5hbWVcclxuICAgICk7XHJcbiAgICBpZiAocGxheWVySW5kZXggIT0gLTEpIHtcclxuICAgICAgcGxheWVyc1twbGF5ZXJJbmRleF0gPSBwYXJ0aWFsUGxheWVyOyAvLyBTaSBsZSBqb3VldXIgZXhpc3RlIGTDqWrDoCwgb24gbGUgbWV0IMOgIGpvdXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYXllcnMucHVzaChwYXJ0aWFsUGxheWVyKTsgLy8gU2lub24gb24gbCdham91dGUgw6AgbGEgZmluXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMYSBjbGFzc2UgQ29yZG92YUFQSSBlc3QgdW4gc2VydmljZSBwZXJtZXR0YW50IGQndWlsaXNlciBsJ0FQSSBkZSBjb3Jkb3ZhIHNvdXMgZm9ybWUgZGUgcHJvbWVzc2VzXHJcbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhQVBJIHtcclxuICBzdGF0aWMgdGFrZVBpY3R1cmUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBuYXZpZ2F0b3IuY2FtZXJhLmdldFBpY3R1cmUoXHJcbiAgICAgICAgKGltYWdlRGF0YSkgPT4gcmVzb2x2ZShpbWFnZURhdGEpLFxyXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIHF1YWxpdMOpIGVuY29kYWdlIDUwJSwgZm9ybWF0IGJhc2U2NCAoZXQgSlBFRyBwYXIgZMOpZmF1dClcclxuICAgICAgICAgIHF1YWxpdHk6IDUwLFxyXG4gICAgICAgICAgZGVzdGluYXRpb25UeXBlOiBuYXZpZ2F0b3IuY2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5EQVRBX1VSTCxcclxuICAgICAgICAgIGVuY29kaW5nVHlwZTogbmF2aWdhdG9yLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcclxuICAgICAgICAgIG1lZGlhVHlwZTogbmF2aWdhdG9yLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRSxcclxuICAgICAgICAgIGNvcnJlY3RPcmllbnRhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIHNvdXJjZVR5cGU6IG5hdmlnYXRvci5jYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBLFxyXG4gICAgICAgICAgY2FtZXJhRGlyZWN0aW9uOiBuYXZpZ2F0b3IuY2FtZXJhLkRpcmVjdGlvbi5GUk9OVCxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkNsaWNrVGFrZVBpY3R1cmUoaGFuZGxlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjsgaSsrKSB7XHJcbiAgICAgICQoYCNidG5QaG90byR7aX1gKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlcihpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTmV3R2FtZShoYW5kbGVyKSB7XHJcbiAgICAkKFwiI2J0bk5ld0dhbWVcIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tSZXBsYXkoaGFuZGxlcikge1xyXG4gICAgJChcIiNidG5Ob3V2ZWF1Q291cFwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgIGhhbmRsZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1Njb3JlKGhhbmRsZXIpIHtcclxuICAgICQoXCIjYnRuRmluUGFydGllXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgaGFuZGxlcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkdyaWRDbGljayhoYW5kbGVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICBsZXQgYnRuID0gJChgI2J0bkdyaWQke2l9YCk7XHJcbiAgICAgIGJ0bi5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ0bi5odG1sKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgIGhhbmRsZXIoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEltZ09uQnRuKGluZGV4LCBpbWFnZSkge1xyXG4gICAgJChgI2J0bkdyaWQke2luZGV4fWApLmh0bWwoXHJcbiAgICAgIGA8aW1nIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIHNyYz1cImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsJHtpbWFnZX1cIiAvPmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGF5ZXJuYW1lSW5wdXQoaW5kZXgpIHtcclxuICAgIGNvbnNvbGUubG9nKCQoYCNub21Kb3VldXIke2luZGV4fWApKTtcclxuICAgIHJldHVybiAkKGAjbm9tSm91ZXVyJHtpbmRleH1gKS52YWwoKTtcclxuICB9XHJcblxyXG4gIHNldFJlc3VsdGF0KHJlc3VsdGF0KSB7XHJcbiAgICAkKGAjdGV4dGVSZXN1bHRhdGApLmh0bWwocmVzdWx0YXQpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudFBsYXllcihwbGF5ZXIpIHtcclxuICAgICQoYHNwYW5bZGF0YS1yb2xlPVwiY3VycmVudFBsYXllclwiXWApLmh0bWwocGxheWVyKTtcclxuICB9XHJcblxyXG4gIHNldFBsYXllcm5hbWUoaW5kZXgsIG5hbWUpIHtcclxuICAgICQoYHNwYW5bZGF0YS1yb2xlPVwibm9tSm91ZXVyJHtpbmRleH1cIl1gKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5odG1sKG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldEdyaWQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICAkKGAjYnRuR3JpZCR7aX1gKS5odG1sKGBgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFBsYXllcnNTY29yZXMocGxheWVycykge1xyXG4gICAgJChcIiN2dWVGaW5cIikuaHRtbCgnPGRpdiBjbGFzcz1cInVpLWNvbnRlbnRcIiBkYXRhLXJvbGU9XCJtYWluXCI+Jyk7XHJcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XHJcbiAgICAgICQoXCIjdnVlRmluXCIpLmFwcGVuZChgXHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgZGF0YS1yb2xlPVwicGhvdG9Kb3VldXJcIlxyXG4gICAgICAgICAgICBzcmM9XCIke3BsYXllci5waWN0dXJlfVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGgxPjxzcGFuIGRhdGEtcm9sZT1cIm5vbUpvdWV1clwiIHN0eWxlPVwiY29sb3I6IGJsdWVcIj4ke3BsYXllci5uYW1lfTwvc3Bhbj48L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuXCJcclxuICAgICAgICAgICAgICA+VmljdG9pcmVzIDogPHNwYW4gaWQ9XCJuYlZpY3RvaXJlc1wiPiR7cGxheWVyLm5iV2lufTwvc3BhblxyXG4gICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAvXHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IG9yYW5nZVwiPk51bHMgOiA8c3BhbiBpZD1cIm5iTnVsc1wiPiR7cGxheWVyLm5iRHJhd259PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiByZWRcIlxyXG4gICAgICAgICAgICAgID5Ew6lmYWl0ZXMgOiA8c3BhbiBpZD1cIm5iRGVmYWl0ZXNcIj4ke3BsYXllci5uYkxvc3N9PC9zcGFuXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0blN1cHByaW1lclwiIGRhdGEtaWNvbj1cImRlbGV0ZVwiPlN1cHByaW1lcjwvYnV0dG9uPlxyXG4gICAgICBcclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICAkKFwiI3Z1ZUZpblwiKS5hcHBlbmQoYFxyXG4gICAgPGJ1dHRvbiBpZD1cImJ0blJldG91ckpldVwiIGRhdGEtaWNvbj1cImNhcmF0LWxcIj5Db250aW51ZXI8L2J1dHRvbj5cclxuICAgIDwvZGl2PmApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9