// J'apprends les tableaux

// Déclarez la variable "result1" et stockez y l'index de la valeur "string" dans la constante "myArray"
// Déclarez la variable "result2" et stockez y l'index de la valeur "array" dans la constante "myArray"
// Déclarez la variable "result3" et stockez y l'index de la valeur "float" dans la constante "myArray"
// Déclarez la variable "result4" et stockez y l'index de la valeur "object" dans la constante "myArray"

// NE PAS TOUCHER
const myArray = ["string", "boolean", "array", "object", "integer", "float"];
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

try {
    if (myArray[result1] !== "string") {
        console.log("ERREUR: Mauvais index pour result1");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result1");
    return;
}

try {
    if (myArray[result2] !== "array") {
        console.log("ERREUR: Mauvais index pour result2");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result2");
    return;
}

try {
    if (myArray[result3] !== "float") {
        console.log("ERREUR: Mauvais index pour result3");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result3");
    return;
}

try {
    if (myArray[result4] !== "object") {
        console.log("ERREUR: Mauvais index pour result4");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result4");
    return;
}

console.log("Félicitation !!!");
