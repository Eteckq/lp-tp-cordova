export default class View {
  constructor() {}

  onClickTakePicture(handler) {
    for (let i = 1; i <= 2; i++) {
      $(`#btnPhoto${i}`).click(() => {
        handler(i);
      });
    }
  }

  onClickNewGame(handler) {
    $("#btnNewGame").click(() => {
      handler();
    });
  }

  onClickReplay(handler) {
    $("#btnNouveauCoup").click(() => {
      handler();
    });
  }

  onClickScore(handler) {
    $("#btnFinPartie").click(() => {
      handler();
    });
  }

  onGridClick(handler) {
    for (let i = 0; i < 9; i++) {
      let btn = $(`#btnGrid${i}`);
      btn.click(() => {
        if (btn.html() === "") {
          handler(i);
        }
      });
    }
  }

  setImgOnBtn(index, image) {
    $(`#btnGrid${index}`).html(
      `<img width="100px" height="100px" src="data:image/jpeg;base64,${image}" />`
    );
  }

  getPlayernameInput(index) {
    return $(`#nomJoueur${index}`).val();
  }

  setResultat(resultat) {
    $(`#texteResultat`).html(resultat);
  }

  setCurrentPlayer(player) {
    $(`span[data-role="currentPlayer"]`).html(player);
  }

  setPlayername(index, name) {
    $(`span[data-role="nomJoueur${index}"]`).each(function () {
      $(this).html(name);
    });
  }

  resetGrid() {
    for (let i = 0; i < 9; i++) {
      $(`#btnGrid${i}`).html(``);
    }
  }

  setPlayersScores(players) {
    $("#vueFin").html('<div class="ui-content" data-role="main">');
    for (const player of players) {
      $("#vueFin").append(`
      
        <div style="text-align: center">
          <img
            data-role="photoJoueur"
            src="${player.picture}"
            style="
              width: 200px;
              margin-left: auto;
              margin-right: auto;
              display: block;
            "
          />

          <h1><span data-role="nomJoueur" style="color: blue">${player.name}</span></h1>
          <p>
            <span style="color: green"
              >Victoires : <span id="nbVictoires">${player.nbWin}</span
            ></span>
            /
            <span style="color: orange">Nuls : <span id="nbNuls">${player.nbDrawn}</span></span>
            /
            <span style="color: red"
              >Défaites : <span id="nbDefaites">${player.nbLoss}</span
            ></span>
          </p>
        </div>
      `);
    }
    $("#vueFin").append(`
    <button id="btnRetourJeu" data-icon="carat-l">Continuer</button>
    </div>`);

    $("#btnRetourJeu").click(() => {
      $.mobile.changePage("#vueJeu");
    });
  }
}
