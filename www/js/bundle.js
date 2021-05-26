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
      this.view.setResultat("");
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
      var players = _model_js__WEBPACK_IMPORTED_MODULE_0__["PlayersDao"].getAllPlayers();
      var p1f = _model_js__WEBPACK_IMPORTED_MODULE_0__["PlayersUtils"].findPlayerByNameInArray(players, this.p1.name);

      if (p1f) {
        this.p1 = p1f;
        this.p1.id = 1;
      }

      var p2f = _model_js__WEBPACK_IMPORTED_MODULE_0__["PlayersUtils"].findPlayerByNameInArray(players, this.p2.name);

      if (p2f) {
        this.p2 = p2f;
        this.p2.id = 2;
      }

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

      this.game.switchCurrentPlayer();
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
          $("#vueFin").append("\n      \n        <div style=\"text-align: center\">\n          <img\n            data-role=\"photoJoueur\"\n            src=\"".concat(player.picture, "\"\n            style=\"\n              width: 200px;\n              margin-left: auto;\n              margin-right: auto;\n              display: block;\n            \"\n          />\n\n          <h1><span data-role=\"nomJoueur\" style=\"color: blue\">").concat(player.name, "</span></h1>\n          <p>\n            <span style=\"color: green\"\n              >Victoires : <span id=\"nbVictoires\">").concat(player.nbWin, "</span\n            ></span>\n            /\n            <span style=\"color: orange\">Nuls : <span id=\"nbNuls\">").concat(player.nbDrawn, "</span></span>\n            /\n            <span style=\"color: red\"\n              >D\xE9faites : <span id=\"nbDefaites\">").concat(player.nbLoss, "</span\n            ></span>\n          </p>\n        </div>\n      "));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      $("#vueFin").append("\n    <button id=\"btnRetourJeu\" data-icon=\"carat-l\">Continuer</button>\n    </div>");
      $("#btnRetourJeu").click(function () {
        $.mobile.changePage("#vueJeu");
      });
    }
  }]);

  return View;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3d3dy9qcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi93d3cvanMvdmlldy5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiam91ZXVyRW5Db3VycyIsInBhcnRpZUVuQ291cnMiLCJWaWV3IiwicDEiLCJQbGF5ZXIiLCJwMiIsIiQiLCJtb2JpbGUiLCJjaGFuZ2VQYWdlIiwidmlldyIsIm9uQ2xpY2tUYWtlUGljdHVyZSIsImluZGV4Iiwib25DbGlja1JlcGxheSIsIm9uQ2xpY2tOZXdHYW1lIiwib25HcmlkQ2xpY2siLCJvbkNsaWNrU2NvcmUiLCJnYW1lIiwiVGljVGFjVG9lIiwicmVzZXRHcmlkIiwic2V0UmVzdWx0YXQiLCJwbGF5ZXJJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJDb3Jkb3ZhQVBJIiwidGFrZVBpY3R1cmUiLCJ0aGVuIiwidmFsIiwicGljdHVyZSIsInNldFBsYXllcnNTY29yZXMiLCJQbGF5ZXJzRGFvIiwiZ2V0QWxsUGxheWVycyIsIm5hbWUiLCJnZXRQbGF5ZXJuYW1lSW5wdXQiLCJzZXRQbGF5ZXJuYW1lIiwicGxheWVycyIsInAxZiIsIlBsYXllcnNVdGlscyIsImZpbmRQbGF5ZXJCeU5hbWVJbkFycmF5IiwiaWQiLCJwMmYiLCJzZXRDdXJyZW50UGxheWVyIiwiY3VycmVudFBsYXllciIsIm92ZXIiLCJwbGF5Iiwic2V0SW1nT25CdG4iLCJpc1dpbiIsImVuZCIsImlzRHJhd24iLCJzd2l0Y2hDdXJyZW50UGxheWVyIiwic2F2ZSIsImFwcCIsImluaXRpYWxpemUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRldmljZVJlYWR5IiwiYmluZCIsIlBpY3R1cmUiLCJkYXRhIiwibmJXaW4iLCJuYkxvc3MiLCJuYkRyYXduIiwicGxheWVyMSIsInBsYXllcjIiLCJib2FyZCIsIk1hdGgiLCJyYW5kb20iLCJjYXNlSWQiLCJmaW5kIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImFkZE9yVXBkYXRlUGxheWVySW5BcnJheSIsInNhdmVQbGF5ZXJzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdHJpbmdQbGF5ZXJzIiwiZ2V0SXRlbSIsIkFycmF5IiwicGFyc2UiLCJwbGF5ZXJOYW1lIiwicGxheWVyIiwicGFydGlhbFBsYXllciIsImZpbmRJbmRleCIsInB1c2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm5hdmlnYXRvciIsImNhbWVyYSIsImdldFBpY3R1cmUiLCJpbWFnZURhdGEiLCJlcnIiLCJxdWFsaXR5IiwiZGVzdGluYXRpb25UeXBlIiwiRGVzdGluYXRpb25UeXBlIiwiREFUQV9VUkwiLCJlbmNvZGluZ1R5cGUiLCJFbmNvZGluZ1R5cGUiLCJKUEVHIiwibWVkaWFUeXBlIiwiTWVkaWFUeXBlIiwiUElDVFVSRSIsImNvcnJlY3RPcmllbnRhdGlvbiIsInNvdXJjZVR5cGUiLCJQaWN0dXJlU291cmNlVHlwZSIsIkNBTUVSQSIsImNhbWVyYURpcmVjdGlvbiIsIkRpcmVjdGlvbiIsIkZST05UIiwiaGFuZGxlciIsImkiLCJjbGljayIsImJ0biIsImh0bWwiLCJpbWFnZSIsInJlc3VsdGF0IiwiZWFjaCIsImFwcGVuZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxp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QUFiLDBJQUthckMsTUFBTSxDQUFDdkQsT0FMcEIsMFFBYzBEdUQsTUFBTSxDQUFDbkQsSUFkakUsd0lBaUI4Q21ELE1BQU0sQ0FBQ3hCLEtBakJyRCwrSEFvQjZEd0IsTUFBTSxDQUFDdEIsT0FwQnBFLHlJQXVCNENzQixNQUFNLENBQUN2QixNQXZCbkQ7QUE0QkQ7QUEvQnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0N4QnJELE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWlILE1BQWI7QUFJQWpILE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIyRyxLQUFuQixDQUF5QixZQUFNO0FBQzdCM0csU0FBQyxDQUFDQyxNQUFGLENBQVNDLFVBQVQsQ0FBb0IsU0FBcEI7QUFDRCxPQUZEO0FBR0QiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3cvanMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1xuICBUaWNUYWNUb2UsXG4gIFBsYXllcnNEYW8sXG4gIFBsYXllcnNVdGlscyxcbiAgUGxheWVyLFxuICBDb3Jkb3ZhQVBJLFxufSBmcm9tIFwiLi9tb2RlbC5qc1wiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlldy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgc2Vzc2lvbiA9IHtcbiAgICBqb3VldXJFbkNvdXJzOiBudWxsLCAvLyBMZSBqb3VldXIgY291cmFudFxuICAgIHBhcnRpZUVuQ291cnM6IG51bGwsIC8vIExhIHBhcnRpZSBlbiB0cmFpbiBkJ8OqdHJlIGpvdcOpZVxuICB9O1xuXG4gIHZpZXcgPSBuZXcgVmlldygpO1xuICBnYW1lID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBMb2FkIHBsYXllcnNcbiAgICB0aGlzLnAxID0gbmV3IFBsYXllcigxLCBcIlwiLCBcIlwiKTtcbiAgICB0aGlzLnAyID0gbmV3IFBsYXllcigyLCBcIlwiLCBcIlwiKTtcblxuICAgICQubW9iaWxlLmNoYW5nZVBhZ2UoXCIjdnVlQWNjdWVpbFwiKTtcblxuICAgIHRoaXMudmlldy5vbkNsaWNrVGFrZVBpY3R1cmUoKGluZGV4KSA9PiB7XG4gICAgICB0aGlzLm9uQ2xpY2tUYWtlUGljdHVyZShpbmRleCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZXcub25DbGlja1JlcGxheSgoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xpY2tSZXBsYXkoKTtcbiAgICB9KTtcblxuICAgIHRoaXMudmlldy5vbkNsaWNrTmV3R2FtZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2xpY2tOZXdHYW1lKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZXcub25HcmlkQ2xpY2soKGluZGV4KSA9PiB7XG4gICAgICB0aGlzLm9uR3JpZENsaWNrKGluZGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMudmlldy5vbkNsaWNrU2NvcmUoKGluZGV4KSA9PiB7XG4gICAgICB0aGlzLm9uQ2xpY2tTY29yZShpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsaWNrUmVwbGF5KCkge1xuICAgIHRoaXMuZ2FtZSA9IG5ldyBUaWNUYWNUb2UodGhpcy5wMSwgdGhpcy5wMik7XG4gICAgdGhpcy52aWV3LnJlc2V0R3JpZCgpO1xuICAgIHRoaXMudmlldy5zZXRSZXN1bHRhdChcIlwiKTtcbiAgfVxuXG4gIG9uQ2xpY2tUYWtlUGljdHVyZShwbGF5ZXJJbmRleCkge1xuICAgIGNvbnNvbGUubG9nKFwiam91ZXVyIFwiICsgcGxheWVySW5kZXgpO1xuICAgIENvcmRvdmFBUEkudGFrZVBpY3R1cmUoKS50aGVuKCh2YWwpID0+IHtcbiAgICAgIGlmIChwbGF5ZXJJbmRleCA9PSAxKSB7XG4gICAgICAgIHRoaXMucDEucGljdHVyZSA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucDIucGljdHVyZSA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2tTY29yZSgpIHtcbiAgICB0aGlzLnZpZXcuc2V0UGxheWVyc1Njb3JlcyhQbGF5ZXJzRGFvLmdldEFsbFBsYXllcnMoKSk7XG4gICAgJC5tb2JpbGUuY2hhbmdlUGFnZShcIiN2dWVGaW5cIik7XG4gIH1cblxuICBvbkNsaWNrTmV3R2FtZSgpIHtcbiAgICB0aGlzLnAxLm5hbWUgPSB0aGlzLnZpZXcuZ2V0UGxheWVybmFtZUlucHV0KDEpO1xuICAgIHRoaXMudmlldy5zZXRQbGF5ZXJuYW1lKDEsIHRoaXMucDEubmFtZSk7XG4gICAgdGhpcy5wMi5uYW1lID0gdGhpcy52aWV3LmdldFBsYXllcm5hbWVJbnB1dCgyKTtcbiAgICB0aGlzLnZpZXcuc2V0UGxheWVybmFtZSgyLCB0aGlzLnAyLm5hbWUpO1xuXG4gICAgbGV0IHBsYXllcnMgPSBQbGF5ZXJzRGFvLmdldEFsbFBsYXllcnMoKTtcbiAgICBsZXQgcDFmID0gUGxheWVyc1V0aWxzLmZpbmRQbGF5ZXJCeU5hbWVJbkFycmF5KHBsYXllcnMsIHRoaXMucDEubmFtZSk7XG4gICAgaWYgKHAxZikge1xuICAgICAgdGhpcy5wMSA9IHAxZjtcbiAgICAgIHRoaXMucDEuaWQgPSAxO1xuICAgIH1cbiAgICBsZXQgcDJmID0gUGxheWVyc1V0aWxzLmZpbmRQbGF5ZXJCeU5hbWVJbkFycmF5KHBsYXllcnMsIHRoaXMucDIubmFtZSk7XG4gICAgaWYgKHAyZikge1xuICAgICAgdGhpcy5wMiA9IHAyZjtcbiAgICAgIHRoaXMucDIuaWQgPSAyO1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZSA9IG5ldyBUaWNUYWNUb2UodGhpcy5wMSwgdGhpcy5wMik7XG5cbiAgICB0aGlzLnZpZXcuc2V0Q3VycmVudFBsYXllcih0aGlzLmdhbWUuY3VycmVudFBsYXllci5uYW1lKTtcbiAgICAkLm1vYmlsZS5jaGFuZ2VQYWdlKFwiI3Z1ZUpldVwiKTtcbiAgfVxuXG4gIG9uR3JpZENsaWNrKGluZGV4KSB7XG4gICAgaWYgKHRoaXMuZ2FtZS5vdmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nYW1lLnBsYXkoaW5kZXgpO1xuICAgIHRoaXMudmlldy5zZXRDdXJyZW50UGxheWVyKHRoaXMuZ2FtZS5jdXJyZW50UGxheWVyLm5hbWUpO1xuICAgIHRoaXMudmlldy5zZXRJbWdPbkJ0bihpbmRleCwgdGhpcy5nYW1lLmN1cnJlbnRQbGF5ZXIucGljdHVyZSk7XG5cbiAgICBpZiAodGhpcy5nYW1lLmlzV2luKCkpIHtcbiAgICAgIHRoaXMudmlldy5zZXRSZXN1bHRhdChcIldpblwiKTtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmdhbWUuaXNEcmF3bigpKSB7XG4gICAgICB0aGlzLnZpZXcuc2V0UmVzdWx0YXQoXCJEcmF3XCIpO1xuICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nYW1lLnN3aXRjaEN1cnJlbnRQbGF5ZXIoKTsgIFxuICB9XG5cbiAgZW5kKCkge1xuICAgIHRoaXMuZ2FtZS5zYXZlKCk7XG4gICAgdGhpcy5nYW1lLm92ZXIgPSB0cnVlO1xuICB9XG59XG4iLCIvLyBvbiBpbXBvcnRlIHVuaXF1ZW1lbnQgbGUgbW9kdWxlIGNvbnRyw7RsZXVyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5cbnZhciBhcHAgPSB7XG4gIC8vIEFwcGxpY2F0aW9uIENvbnN0cnVjdG9yXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkZXZpY2VyZWFkeVwiLFxuICAgICAgdGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcyksXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH0sXG5cbiAgLy8gZGV2aWNlcmVhZHkgRXZlbnQgSGFuZGxlclxuICAvL1xuICAvLyBCaW5kIGFueSBjb3Jkb3ZhIGV2ZW50cyBoZXJlLiBDb21tb24gZXZlbnRzIGFyZTpcbiAgLy8gJ3BhdXNlJywgJ3Jlc3VtZScsIGV0Yy5cbiAgb25EZXZpY2VSZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDb250cm9sbGVyKCk7XG4gIH0sXG59O1xuXG5hcHAuaW5pdGlhbGl6ZSgpO1xuIiwiLy8gQ2xhc3NlIHBvdXIgcmVwcsOpc2VudGVyIHVuZSBpbWFnZVxyXG5leHBvcnQgY2xhc3MgUGljdHVyZSB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIC8vIFJlbnZvaWUgbCdpbWFnZSBhdSBmb3JtYXQgQmFzZTY0IGF2ZWMgZW4tdMOqdGUgTUlNRVxyXG4gIGdldEJhc2U2NCgpIHtcclxuICAgIHJldHVybiBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgKyB0aGlzLmRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDbGFzc2UgcG91ciByZXByw6lzZW50ZXIgdW4gam91ZXVyXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwaWN0dXJlLCBuYldpbiA9IDAsIG5iTG9zcyA9IDAsIG5iRHJhd24gPSAwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5waWN0dXJlID0gcGljdHVyZTtcclxuICAgIHRoaXMubmJXaW4gPSBuYldpbjtcclxuICAgIHRoaXMubmJMb3NzID0gbmJMb3NzO1xyXG4gICAgdGhpcy5uYkRyYXduID0gbmJEcmF3bjtcclxuICB9XHJcbn1cclxuXHJcbi8vIENsYXNzZSBwb3VyIHJlcHLDqXNlbnRlciB1bmUgcGFydGllIGRlIFRpY1RhY1RvZVxyXG5leHBvcnQgY2xhc3MgVGljVGFjVG9lIHtcclxuICBvdmVyID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xyXG4gICAgdGhpcy5wbGF5ZXIxID0gcGxheWVyMTtcclxuICAgIHRoaXMucGxheWVyMiA9IHBsYXllcjI7XHJcblxyXG4gICAgdGhpcy5ib2FyZCA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgIHRoaXMuY3VycmVudFBsYXllciA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBwbGF5ZXIxIDogcGxheWVyMjsgLy8gTGUgcHJlbWllciBqb3VldXIgZXN0IGNob2lzaSBhbMOpYXRvaXJlbWVudFxyXG4gIH1cclxuXHJcbiAgLy8gQ2hhbmdlciBkZSBqb3VldXIgY291cmFudFxyXG4gIHN3aXRjaEN1cnJlbnRQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPVxyXG4gICAgICB0aGlzLnBsYXllcjEgPT0gdGhpcy5jdXJyZW50UGxheWVyID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xyXG4gIH1cclxuXHJcbiAgLy8gTGUgam91ZXVyIGNvdXJhbnQgam91ZSBlbiBjYXNlSWRcclxuICBwbGF5KGNhc2VJZCkge1xyXG4gICAgdGhpcy5ib2FyZFtjYXNlSWRdID0gdGhpcy5jdXJyZW50UGxheWVyLmlkO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVudm9pZSB2cmFpIHNpIGxlIGpvdWV1ciBjb3VyYW50IGEgZ2FnbsOpIChvbiB2w6lyaWZpZSBcImJydXQgZm9yY2VcIiB0b3V0ZXMgbGVzIHBvc3NpYmlsaXTDqXMpXHJcbiAgaXNXaW4oKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuY3VycmVudFBsYXllci5pZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLmJvYXJkWzBdID09IGlkICYmIHRoaXMuYm9hcmRbMV0gPT0gaWQgJiYgdGhpcy5ib2FyZFsyXSA9PSBpZCkgfHxcclxuICAgICAgKHRoaXMuYm9hcmRbM10gPT0gaWQgJiYgdGhpcy5ib2FyZFs0XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzVdID09IGlkKSB8fFxyXG4gICAgICAodGhpcy5ib2FyZFs2XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzddID09IGlkICYmIHRoaXMuYm9hcmRbOF0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzBdID09IGlkICYmIHRoaXMuYm9hcmRbM10gPT0gaWQgJiYgdGhpcy5ib2FyZFs2XSA9PSBpZCkgfHxcclxuICAgICAgKHRoaXMuYm9hcmRbMV0gPT0gaWQgJiYgdGhpcy5ib2FyZFs0XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzddID09IGlkKSB8fFxyXG4gICAgICAodGhpcy5ib2FyZFsyXSA9PSBpZCAmJiB0aGlzLmJvYXJkWzVdID09IGlkICYmIHRoaXMuYm9hcmRbOF0gPT0gaWQpIHx8XHJcbiAgICAgICh0aGlzLmJvYXJkWzBdID09IGlkICYmIHRoaXMuYm9hcmRbNF0gPT0gaWQgJiYgdGhpcy5ib2FyZFs4XSA9PSBpZCkgfHxcclxuICAgICAgKHRoaXMuYm9hcmRbMl0gPT0gaWQgJiYgdGhpcy5ib2FyZFs0XSA9PSBpZCAmJiB0aGlzLmJvYXJkWzZdID09IGlkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIFJlbnZvaWUgdnJhaSBzJ2lsIHkgYSBtYXRjaCBudWwgKGF1Y3VuZSBjYXNlKVxyXG4gIGlzRHJhd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ib2FyZC5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSAwKSA9PT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgc2F2ZSgpIHtcclxuICAgIGlmICh0aGlzLmlzV2luKCkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGxheWVyLm5iV2luKys7XHJcbiAgICAgIHRoaXMuc3dpdGNoQ3VycmVudFBsYXllcigpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIubmJMb3NzKys7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEcmF3bigpKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBsYXllci5uYkRyYXduKys7XHJcbiAgICB9XHJcbiAgICBsZXQgcGxheWVycyA9IFBsYXllcnNEYW8uZ2V0QWxsUGxheWVycygpO1xyXG4gICAgUGxheWVyc1V0aWxzLmFkZE9yVXBkYXRlUGxheWVySW5BcnJheShwbGF5ZXJzLCB0aGlzLnBsYXllcjEpO1xyXG4gICAgUGxheWVyc1V0aWxzLmFkZE9yVXBkYXRlUGxheWVySW5BcnJheShwbGF5ZXJzLCB0aGlzLnBsYXllcjIpO1xyXG5cclxuICAgIFBsYXllcnNEYW8uc2F2ZVBsYXllcnMocGxheWVycyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDbGFzc2UgcG91ciBnw6lyZXIgbGEgcGVyc2lzdGFuY2UgZCd1biB0YWJsZWF1IGRlIGpvdWV1cnNcclxuZXhwb3J0IGNsYXNzIFBsYXllcnNEYW8ge1xyXG4gIC8vIFNhdXZlZ2FyZGUgbGUgdGFibGVhdSBkZSBqb3VldXJzIGRhbnMgbGUgbG9jYWwgc3RvcmFnZVxyXG4gIHN0YXRpYyBzYXZlUGxheWVycyhwbGF5ZXJzKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5ZXJzXCIsIEpTT04uc3RyaW5naWZ5KHBsYXllcnMpKTtcclxuICB9XHJcblxyXG4gIC8vIFLDqWN1cMOocmUgbGUgdGFibGVhdSBkZSBqb3VldXJzIGRhbnMgbGUgbG9jYWwgc3RvcmFnZVxyXG4gIHN0YXRpYyBnZXRBbGxQbGF5ZXJzKCkge1xyXG4gICAgY29uc3Qgc3RyaW5nUGxheWVycyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllcnNcIik7XHJcbiAgICAvLyBTaSB0YWJsZWF1IG5vbiBzdG9ja8OpLCBvbiByZW52b2llIHVuIHRhYmxlYXUgdmlkZVxyXG4gICAgaWYgKHN0cmluZ1BsYXllcnMgPT09IG51bGwpIHJldHVybiBuZXcgQXJyYXkoKTtcclxuICAgIGVsc2UgcmV0dXJuIEpTT04ucGFyc2Uoc3RyaW5nUGxheWVycyk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDbGFzc2UgcG91ciBtYW5pcHVsZXIgdW4gdGFibGVhdSBkZSBqb3VldXJzXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJzVXRpbHMge1xyXG4gIC8vIFJlY2hlcmNoZSB1biBqb3VldXIgcGFyIHNvbiBub20gZGFucyB1biB0YWJsZWF1IGRlIGpvdWV1cnNcclxuICBzdGF0aWMgZmluZFBsYXllckJ5TmFtZUluQXJyYXkocGxheWVycywgcGxheWVyTmFtZSkge1xyXG4gICAgcmV0dXJuIHBsYXllcnMuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5uYW1lID09IHBsYXllck5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gTWV0IMOgIGpvdXIgb3UgYWpvdXRlIHVuIGpvdWV1ciBkYW5zIGxlIHRhYmxlYXUgZGUgam91ZXVyc1xyXG4gIHN0YXRpYyBhZGRPclVwZGF0ZVBsYXllckluQXJyYXkocGxheWVycywgcGxheWVyKSB7XHJcbiAgICBjb25zdCB7IGlkLCAuLi5wYXJ0aWFsUGxheWVyIH0gPSBwbGF5ZXI7IC8vIHBhcnRpYWxQbGF5ZXIgPSBwbGF5ZXIgbW9pbnMgbCdpZCBxdSdvbiBuZSB2ZXV0IHBhcyBlbnJlZ2lzdHJlclxyXG4gICAgY29uc3QgcGxheWVySW5kZXggPSBwbGF5ZXJzLmZpbmRJbmRleChcclxuICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQubmFtZSA9PSBwbGF5ZXIubmFtZVxyXG4gICAgKTtcclxuICAgIGlmIChwbGF5ZXJJbmRleCAhPSAtMSkge1xyXG4gICAgICBwbGF5ZXJzW3BsYXllckluZGV4XSA9IHBhcnRpYWxQbGF5ZXI7IC8vIFNpIGxlIGpvdWV1ciBleGlzdGUgZMOpasOgLCBvbiBsZSBtZXQgw6Agam91clxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGxheWVycy5wdXNoKHBhcnRpYWxQbGF5ZXIpOyAvLyBTaW5vbiBvbiBsJ2Fqb3V0ZSDDoCBsYSBmaW5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExhIGNsYXNzZSBDb3Jkb3ZhQVBJIGVzdCB1biBzZXJ2aWNlIHBlcm1ldHRhbnQgZCd1aWxpc2VyIGwnQVBJIGRlIGNvcmRvdmEgc291cyBmb3JtZSBkZSBwcm9tZXNzZXNcclxuZXhwb3J0IGNsYXNzIENvcmRvdmFBUEkge1xyXG4gIHN0YXRpYyB0YWtlUGljdHVyZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIG5hdmlnYXRvci5jYW1lcmEuZ2V0UGljdHVyZShcclxuICAgICAgICAoaW1hZ2VEYXRhKSA9PiByZXNvbHZlKGltYWdlRGF0YSksXHJcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVyciksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gcXVhbGl0w6kgZW5jb2RhZ2UgNTAlLCBmb3JtYXQgYmFzZTY0IChldCBKUEVHIHBhciBkw6lmYXV0KVxyXG4gICAgICAgICAgcXVhbGl0eTogNTAsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvblR5cGU6IG5hdmlnYXRvci5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkRBVEFfVVJMLFxyXG4gICAgICAgICAgZW5jb2RpbmdUeXBlOiBuYXZpZ2F0b3IuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxyXG4gICAgICAgICAgbWVkaWFUeXBlOiBuYXZpZ2F0b3IuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFLFxyXG4gICAgICAgICAgY29ycmVjdE9yaWVudGF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgc291cmNlVHlwZTogbmF2aWdhdG9yLmNhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEsXHJcbiAgICAgICAgICBjYW1lcmFEaXJlY3Rpb246IG5hdmlnYXRvci5jYW1lcmEuRGlyZWN0aW9uLkZST05ULFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG9uQ2xpY2tUYWtlUGljdHVyZShoYW5kbGVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIHtcclxuICAgICAgJChgI2J0blBob3RvJHtpfWApLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBoYW5kbGVyKGkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tOZXdHYW1lKGhhbmRsZXIpIHtcclxuICAgICQoXCIjYnRuTmV3R2FtZVwiKS5jbGljaygoKSA9PiB7XHJcbiAgICAgIGhhbmRsZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja1JlcGxheShoYW5kbGVyKSB7XHJcbiAgICAkKFwiI2J0bk5vdXZlYXVDb3VwXCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgaGFuZGxlcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrU2NvcmUoaGFuZGxlcikge1xyXG4gICAgJChcIiNidG5GaW5QYXJ0aWVcIikuY2xpY2soKCkgPT4ge1xyXG4gICAgICBoYW5kbGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uR3JpZENsaWNrKGhhbmRsZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgIGxldCBidG4gPSAkKGAjYnRuR3JpZCR7aX1gKTtcclxuICAgICAgYnRuLmNsaWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoYnRuLmh0bWwoKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgaGFuZGxlcihpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW1nT25CdG4oaW5kZXgsIGltYWdlKSB7XHJcbiAgICAkKGAjYnRuR3JpZCR7aW5kZXh9YCkuaHRtbChcclxuICAgICAgYDxpbWcgd2lkdGg9XCIxMDBweFwiIGhlaWdodD1cIjEwMHB4XCIgc3JjPVwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwke2ltYWdlfVwiIC8+YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFBsYXllcm5hbWVJbnB1dChpbmRleCkge1xyXG4gICAgcmV0dXJuICQoYCNub21Kb3VldXIke2luZGV4fWApLnZhbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVzdWx0YXQocmVzdWx0YXQpIHtcclxuICAgICQoYCN0ZXh0ZVJlc3VsdGF0YCkuaHRtbChyZXN1bHRhdCk7XHJcbiAgfVxyXG5cclxuICBzZXRDdXJyZW50UGxheWVyKHBsYXllcikge1xyXG4gICAgJChgc3BhbltkYXRhLXJvbGU9XCJjdXJyZW50UGxheWVyXCJdYCkuaHRtbChwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgc2V0UGxheWVybmFtZShpbmRleCwgbmFtZSkge1xyXG4gICAgJChgc3BhbltkYXRhLXJvbGU9XCJub21Kb3VldXIke2luZGV4fVwiXWApLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLmh0bWwobmFtZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0R3JpZCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICQoYCNidG5HcmlkJHtpfWApLmh0bWwoYGApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0UGxheWVyc1Njb3JlcyhwbGF5ZXJzKSB7XHJcbiAgICAkKFwiI3Z1ZUZpblwiKS5odG1sKCc8ZGl2IGNsYXNzPVwidWktY29udGVudFwiIGRhdGEtcm9sZT1cIm1haW5cIj4nKTtcclxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcclxuICAgICAgJChcIiN2dWVGaW5cIikuYXBwZW5kKGBcclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBkYXRhLXJvbGU9XCJwaG90b0pvdWV1clwiXHJcbiAgICAgICAgICAgIHNyYz1cIiR7cGxheWVyLnBpY3R1cmV9XCJcclxuICAgICAgICAgICAgc3R5bGU9XCJcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8aDE+PHNwYW4gZGF0YS1yb2xlPVwibm9tSm91ZXVyXCIgc3R5bGU9XCJjb2xvcjogYmx1ZVwiPiR7cGxheWVyLm5hbWV9PC9zcGFuPjwvaDE+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JlZW5cIlxyXG4gICAgICAgICAgICAgID5WaWN0b2lyZXMgOiA8c3BhbiBpZD1cIm5iVmljdG9pcmVzXCI+JHtwbGF5ZXIubmJXaW59PC9zcGFuXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogb3JhbmdlXCI+TnVscyA6IDxzcGFuIGlkPVwibmJOdWxzXCI+JHtwbGF5ZXIubmJEcmF3bn08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAvXHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiXHJcbiAgICAgICAgICAgICAgPkTDqWZhaXRlcyA6IDxzcGFuIGlkPVwibmJEZWZhaXRlc1wiPiR7cGxheWVyLm5iTG9zc308L3NwYW5cclxuICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICAkKFwiI3Z1ZUZpblwiKS5hcHBlbmQoYFxyXG4gICAgPGJ1dHRvbiBpZD1cImJ0blJldG91ckpldVwiIGRhdGEtaWNvbj1cImNhcmF0LWxcIj5Db250aW51ZXI8L2J1dHRvbj5cclxuICAgIDwvZGl2PmApO1xyXG5cclxuICAgICQoXCIjYnRuUmV0b3VySmV1XCIpLmNsaWNrKCgpID0+IHtcclxuICAgICAgJC5tb2JpbGUuY2hhbmdlUGFnZShcIiN2dWVKZXVcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==