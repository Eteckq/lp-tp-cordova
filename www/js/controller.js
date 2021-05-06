import * as model from "./model.js";
import View from "./view.js";

export default class Controller {
  session = {
    joueurEnCours: null, // Le joueur courant
    partieEnCours: null, // La partie en train d'être jouée
  };

  view = new View();

  constructor() {
    $.mobile.changePage("#vueAccueil");

    this.view.onClickNewGame(() => {
      this.onClickNewGame();
    });
  }

  onClickNewGame() {
    console.log("New game");
    $.mobile.changePage("#vueJeu");

    console.log(this.session);
  }
}
