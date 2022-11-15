// J'apprends les fonctions

// Créez une fonction nommée "result" qui prend quatre arguments et les additionne
// Les quatre arguments seront des nombres (integer ou float)

// ============================= CODEZ ICI ================================


// ========================================================================
// NE PAS TOUCHER


try {
    const values = [
        {arg1: 10, arg2: 10, arg3: 20, arg4: 30},
        {arg1: 0.5, arg2: 0.5, arg3: 20, arg4: 30}
    ];

    for (let i = 0; i < values.length; i++) {
        if (result(values[i].arg1, values[i].arg2, values[i].arg3, values[i].arg4) !== values[i].arg1 + values[i].arg2 + values[i].arg3 + values[i].arg4) {
            console.log("ERREUR: Votre fonction ne retourne pas " + (values[i].arg1 + values[i].arg2 + values[i].arg3 + values[i].arg4) + " pour las valeurs " + values[i].arg1 + ", " + values[i].arg2 + ", " + values[i].arg3 + " et " + values[i].arg4);
            return;
        }
    }

} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
