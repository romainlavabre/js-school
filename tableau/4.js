// J'apprends les tableaux

// Déclarez la variable "result" et stockez y la taille du tableau "myArray"

// NE PAS TOUCHER
const myArray = ["string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float"];
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

let i = 0;

for (; i < myArray.length; i++) {
}

try {
    if (result !== i) {
        console.log("ERREUR: Vous vous êtes tromper sur la taille, ça peut faire mal ...");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable result");
    return;
}

console.log("Félicitation !!!");
console.log("RAPPEL: Pour obtenir la taille d'un tableau, il suffit d'appeler la propriété magique length sur votre tableau (tableau.length). A ne pas confondre avec les index !");
