// J'apprends à concaténer

// Créer la phrase "Je sais à présent concaténer et j'en suis très heureux !!!" en réutilisant
// les constantes ci-dessous. Hard codez l'autre partie de la chaine.
// Stockez le resultat dans la variable "result"
// NE PAS TOUCHER
const string1 = "Je sais à ";
const string2 = "présent concaténer";
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

try {
    if (result !== "Je sais à présent concaténer et j'en suis très heureux !!!") {
        if (result === "Je sais à présent concaténeret j'en suis très heureux !!!") {
            console.log("ERREUR: Vos variables sont mal concaténé (attention aux espaces entre les chaines");
            return;
        }

        console.log("ERREUR: Vos variables sont mal concaténé");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result");
    return;
}

console.log("Félicitation !!!");
