// J'apprends les tableaux

// Declarez la variable "position1" et mettez-y l'index associé à la valeur "array"
// Declarez la variable "position2" et mettez-y l'index associé à la valeur "object"
// ATTENTION : Vous devez partir du principe que vous ne connaissez pas le contenu de myArray.


// NE PAS TOUCHER
const myArray = ["string", "boolean", "array", "object", "integer", "float"];
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

try {
    if (position1 !== 2) {
        console.log("ERREUR: La valeur \"array\" n'est pas à la position " + position1);
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable position1");
    return;
}

try {
    if (position2 !== 3) {
        console.log("ERREUR: La valeur \"object\" n'est pas à la position " + position2);
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable position2");
    return;
}

console.log("Félicitation !!! Mouhahahahahaha");
