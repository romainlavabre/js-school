// J'apprends à concaténer

// Concaténez les deux string ci-dessous et stockez le resultat dans une variable nommée "result"
// NE PAS TOUCHER
const string1 = "Je sais à ";
const string2 = "présent concaténer";
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

try {
    if (result !== "Je sais à présent concaténer") {
        console.log("ERREUR: Vos variables sont mal concaténé");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result");
    return;
}

console.log("Félicitation !!!");

console.log("RAPPEL: La concaténation se fait en séparant les variables par un \"+\". Vous pouvez également ajouter des string en dur (hard codé)");
