// J'apprends les boucles

// Faites 10 tours de boucle, mais à l'envers, (decrementez i au lieu de l'incrémenter)
// À chaque tour de boucle enlevez 1 à la variable "numberOfTurns"
let numberOfTurns = 10;
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

if (numberOfTurns === 10) {
    console.log("ERREUR: Vous n'avez pas fait de tour de boucle");
    return;
}

if (numberOfTurns !== 0) {
    console.log("ERREUR: Vous avez fait " + (10 - numberOfTurns) + " tours de boucle, pas 10 !");
    return;
}

console.log("Félicitation !!!");
