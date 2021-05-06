// Le module "modele" exporte 4 classes : Joueur, Shifum, JoueurDAO et CordovaAPI
export class Joueur {
  constructor(nom = "", photo = "", victoires = 0, defaites = 0, nuls = 0) {
    this.nom = nom;
    this.photo = photo;
    this.victoires = victoires;
    this.defaites = defaites;
    this.nuls = nuls;
  }
}

// La classe Shifumi modélise une partie de Shifumi réalisée par un Joueur
export class Shifumi {
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
export class JoueurDAO {
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
export class CordovaAPI {
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
