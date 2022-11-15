// J'apprends à manipuler les chaines de caractères

// Déclarez la variable "result" et stockez y la valeur de la constante "myString" en minuscule
const myString = "LE DEV EST UN LONG FLEUVE TRANQUILLE";
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER
try {
    if (result !== "le dev est un long fleuve tranquille") {
        console.log("ERREUR: La variable result contient des majuscules");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result");
    return;
}

console.log("Félicitation !!!");
