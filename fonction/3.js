// J'apprends les fonctions

// Créez une fonction nommée "result" qui prend deux arguments et les additionne
// Retournez le resultat
// Les deux arguments seront des nombres (integer ou float)

// ============================= CODEZ ICI ================================


// ========================================================================
// NE PAS TOUCHER


try {
    const values = [
        {arg1: 10, arg2: 10},
        {arg1: 0.5, arg2: 0.5}
    ];

    for (let i = 0; i < values.length; i++) {
        if (result(values[i].arg1, values[i].arg2) !== values[i].arg1 + values[i].arg2) {
            console.log("ERREUR: Votre fonction ne retourne pas " + values[i].arg1 + values[i].arg2 + " pour las valeurs " + values[i].arg1 + " et " + values[i].arg2);
            return;
        }
    }

} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
