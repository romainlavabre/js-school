// J'apprends les fonctions

// Créez une fonction nommée "result" qui prend un argument et retourne sa valeur (brut)

// ============================= CODEZ ICI ================================


// ========================================================================
// NE PAS TOUCHER


try {
    const values = ["array", 0, 34.5, {key: "value"}];

    for (let i = 0; i < values.length; i++) {
        if (result(values[i]) !== values[i]) {
            console.log("ERREUR: Votre fonction ne retourne pas " + values[i] + " pour la valeur " + values[i]);
            return;
        }
    }

} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
