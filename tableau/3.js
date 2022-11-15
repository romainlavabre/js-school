// J'apprends les tableaux

// Déclarez la variable "result1" et stockez y la valeur "string" en passant par "myArray"
// Déclarez la variable "result2" et stockez y la valeur "array" en passant par "myArray"
// Déclarez la variable "result3" et stockez y la valeur "float" en passant par "myArray"
// Déclarez la variable "result4" et stockez y la valeur "object" en passant par "myArray"

// NE PAS TOUCHER
const myArray = ["string", "boolean", "array", "object", "integer", "float"];
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

try {
    if (result1 !== "string") {
        console.log("ERREUR: Mauvais index pour result1");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result1");
    return;
}

try {
    if (result2 !== "array") {
        console.log("ERREUR: Mauvais index pour result2");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result2");
    return;
}

try {
    if (result3 !== "float") {
        console.log("ERREUR: Mauvais index pour result3");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result3");
    return;
}

try {
    if (result4 !== "object") {
        console.log("ERREUR: Mauvais index pour result4");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result4");
    return;
}

console.log("Félicitation !!!");
console.log("RAPPEL: Notez la difference entre l'index qui permet d'accéder à la valeur et la valeur. Ils n'ont rien avoir l'un avec l'autre, l'index est une adresse (dans le tableau), tandis que la valeur est ... la valeur");
