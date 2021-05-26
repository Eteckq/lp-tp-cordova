import {
  TicTacToe,
  PlayersDao,
  PlayersUtils,
  Player,
  CordovaAPI,
} from "./model.js";
import View from "./view.js";

export default class Controller {
  session = {
    joueurEnCours: null, // Le joueur courant
    partieEnCours: null, // La partie en train d'être jouée
  };

  view = new View();
  game = null;

  constructor() {
    // Load players
    this.p1 = new Player(1, "", "");
    this.p2 = new Player(2, "", "");

    $.mobile.changePage("#vueAccueil");

    this.view.onClickTakePicture((index) => {
      this.onClickTakePicture(index);
    });

    this.view.onClickReplay(() => {
      this.onClickReplay();
    });

    this.view.onClickNewGame(() => {
      this.onClickNewGame();
    });

    this.view.onGridClick((index) => {
      this.onGridClick(index);
    });

    this.view.onClickScore((index) => {
      this.onClickScore(index);
    });
  }

  onClickReplay() {
    this.game = new TicTacToe(this.p1, this.p2);
    this.view.resetGrid();
    this.view.setResultat("");
  }

  onClickTakePicture(playerIndex) {
    console.log("joueur " + playerIndex);
    CordovaAPI.takePicture().then((val) => {
      if (playerIndex == 1) {
        this.p1.picture = val;
      } else {
        this.p2.picture = val;
      }
    });
  }

  onClickScore() {
    this.view.setPlayersScores(PlayersDao.getAllPlayers());
    $.mobile.changePage("#vueFin");
  }

  onClickNewGame() {
    this.p1.name = this.view.getPlayernameInput(1);
    this.view.setPlayername(1, this.p1.name);
    this.p2.name = this.view.getPlayernameInput(2);
    this.view.setPlayername(2, this.p2.name);

    let players = PlayersDao.getAllPlayers();
    let p1f = PlayersUtils.findPlayerByNameInArray(players, this.p1.name);
    if (p1f) {
      this.p1 = p1f;
      this.p1.id = 1;
    }
    let p2f = PlayersUtils.findPlayerByNameInArray(players, this.p2.name);
    if (p2f) {
      this.p2 = p2f;
      this.p2.id = 2;
    }

    this.game = new TicTacToe(this.p1, this.p2);

    this.view.setCurrentPlayer(this.game.currentPlayer.name);
    $.mobile.changePage("#vueJeu");
  }

  onGridClick(index) {
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

  end() {
    this.game.save();
    this.game.over = true;
  }
}
