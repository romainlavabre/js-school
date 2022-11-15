// J'apprends à prendre des décisions de façon conditionnelle

// Creez une fonction nommée "result" et prenant un argument (qui sera un string)
// Si la taille du string est comprise entre 1 ET 3 inclus, retournez "String petit modele"
// Si la taille du string est comprise entre 4 ET 10 inclus, retournez "String pour femme sur la tangente"
// Si la taille du string est comprise entre 11 ET 15 inclus, retournez "String pour big mama"
// Si la taille du string est supérieure à 15, retournez "La ficelle vous fera trop mal, laissez tomber"

// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER


try {
    const values = [
        {value: "X", expected: "String petit modele"},
        {value: "XX", expected: "String petit modele"},
        {value: "XXX", expected: "String petit modele"},
        {value: "XXXX", expected: "String pour femme sur la tangente"},
        {value: "XXXXX", expected: "String pour femme sur la tangente"},
        {value: "XXXXXX", expected: "String pour femme sur la tangente"},
        {value: "XXXXXXX", expected: "String pour femme sur la tangente"},
        {value: "XXXXXXXX", expected: "String pour femme sur la tangente"},
        {value: "XXXXXXXXX", expected: "String pour femme sur la tangente"},
        {value: "XXXXXXXXXX", expected: "String pour femme sur la tangente"},
        {value: "XXXXXXXXXXX", expected: "String pour big mama"},
        {value: "XXXXXXXXXXXX", expected: "String pour big mama"},
        {value: "XXXXXXXXXXXXX", expected: "String pour big mama"},
        {value: "XXXXXXXXXXXXXX", expected: "String pour big mama"},
        {value: "XXXXXXXXXXXXXXX", expected: "String pour big mama"},
        {value: "XXXXXXXXXXXXXXXX", expected: "La ficelle vous fera trop mal, laissez tomber"},
    ];

    for (let i = 0; i < values.length; i++) {
        const useFuncResult = result(values[i].value);

        if (useFuncResult !== values[i].expected) {
            console.log("ERREUR: Votre fonction retourne \"" + useFuncResult + "\", or elle devrait retourner \"" + values[i].expected + "\" pour la valeur \"" + values[i].value + "\"");
            return;
        }
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
