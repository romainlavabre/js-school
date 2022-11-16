// Je rassemble toute mes compétance pour créer un programme complet

// Créez une fonction nommée "result" qui prend un argument
// Cet argument contiendra un tableau de string
// Retournez le nombre de fois ou la valeur est égale à "array"

// ============================= CODEZ ICI ================================

function result(arg) {
    let counter = 0;

    for (let i = 0; i < arg.length; i++) {
        if (arg[i] === "array") {
            counter++;
        }
    }

    return counter;
}

// ========================================================================
// NE PAS TOUCHER


try {
    if (result(["string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float", "string", "boolean", "array", "object", "integer", "float"]) !== 23) {
        console.log("ERREUR: Nope, il y a plus de mot \"array\" que vous le pensez");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
