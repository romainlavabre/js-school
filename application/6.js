// Je rassemble toute mes competences pour créer un programme complet

// Créez une fonction nommée "result" qui prend un argument
// Cet argument contiendra un boolean contenant true si il fait beau, false sinon
// Si il fait beau, retournez la constante "ilFaitBeau", mais en majuscule
// Sinon retournez la constante "lPleut", mais en majuscule

const ilFaitBeau = "Il fAit Beau";
const ilPleut = "Il Pleut";

// ============================= CODEZ ICI ================================


// ========================================================================
// NE PAS TOUCHER


try {
    let res = result(true);

    if (res === ilFaitBeau) {
        console.log("ERREUR: La constante ilFaitBeau n'est pas en minuscule");
        return;
    }

    if (res !== "il fait beau") {
        console.log("ERREUR: Euuuh, il fait beau, il ne pleut pas ...");
        return;
    }

    res = result(false);

    if (res === ilPleut) {
        console.log("ERREUR: La constante ilPleut n'est pas en majuscule");
        return;
    }

    if (res !== "IL PLEUT") {
        console.log("ERREUR: Euuuh, il pleut, il ne fait pas beau ...");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
