// J'apprends les tableaux

// Déclarez la variable "result" et stockez y le dernier index du tableau "myArray"

// NE PAS TOUCHER
const myArray = ["string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float"];
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

let i = 0;

for (; i < myArray.length; i++) {
}

try {
    if (result !== i - 1) {
        console.log("ERREUR: Nope, le dernier index n'est pas " + result + " ...");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result");
    return;
}

console.log("Félicitation !!!");
console.log("RAPPEL: Pour obtenir le dernier index d'un tableau, il suffit de prendre sa taille - 1 (tableau.length - 1), car les index commences à 0 et non à 1 ...");
