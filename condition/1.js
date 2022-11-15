// J'apprends à prendre des décisions de façon conditionnelle

// Stockez dans la variable "result" la phrase :
// "Je peux sortir mais je vais mourir de chaud" si il fait soleil
// "Je peux sortir mais je vais être mouiller" si il pleut
// Le tout en fonction de la variable "ilFaitSoleil".
// ATTENTION : Passer la valeur de la variable "ilFaitSoleil"
// à "true" puis "false" pour tester l'intégralité de l'exercice sans modifier votre code source.
const ilFaitSoleil = true; // Modifiez cette valeur lors des tests
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER


try {
    if (ilFaitSoleil && result !== "Je peux sortir mais je vais mourir de chaud") {
        console.log("ERREUR: Lorsqu'il fait beau, vous n'avez aucune chance d'être mouillé, a moins qu'un pigeon vous chie dessus");
        return;
    }

    if (!ilFaitSoleil && result !== "Je peux sortir mais je vais être mouiller") {
        console.log("ERREUR: Lorsqu'il fait pleut, vous serez forcément mouillé");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result");
    return;
}

console.log("Félicitation !!!");
