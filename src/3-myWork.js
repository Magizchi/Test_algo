/**
 * Dépendences non inclues, aucun résultat n'est attendu à l'exécution de ce fichier
 * L'exercice a pour objectif de déterminer votre capacité à reprendre du code existant :
 * Il faut revoir le fond, la forme et les erreurs potentielles
 * Vous devez modifier le code et mettre des commentaires si besoin
 */

const axios = require("axios");

const REFERENT = "REFERENT";
const GENERIC = "GENERIC";
const DELETE = "DELETE";

class Product {
  constructor(pId) {
    this.id = pId;
    this.donnee = {};
  }

  loadData() {
    let id = this.id;
    return new Promise(function (pResolve, pReject) {
      axios
        .get("https://api.vidal.fr/api/product/" + id)
        .then(function (pResult) {
          this.donnee = { ...pResult.data };
          pResolve();
        }, pReject);
    });
  }

  getName() {
    return this.donnee.name;
  }

  isDelete() {
    return this.donnee.marketStatus === DELETE;
  }

  isReferent() {
    return this.donnee.type === REFERENT;
  }

  isGeneric() {
    return this.donnee.type === GENERIC;
  }

  getMolecules() {
    if (this.donnee && this.donnee.molecules) {
      return this.donnee.molecules;
    } else {
      return [];
    }
  }

  getClassification() {
    return this.donnee.classification ?? [];
  }
}

const doliprane = new Product(19649);

doliprane.loadData().then(
  function () {
    console.log("getName: ", doliprane.getName());

    doliprane.getMolecules().forEach((pMolecule) => {
      console.log("molecule name: ", pMolecule.name);
    });

    for (let i = 0; i < doliprane.getClassification().length; i++) {
      const classif = doliprane.getClassification()[i];
      console.log("classif Name: ", classif.name);
    }
  },
  function (e) {
    console.error(
      "Impossible de charger les informations pour le produit demandé",
      e
    );
  }
);

console.log("delete: ", doliprane.isDelete());
