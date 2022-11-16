// J'apprends les tableaux

// Dans le tableau myArray, inversez la position de la valeur "array" avec "object"
// ATTENTION : Vous devez partir du principe que vous ne connaissez pas le contenu de myArray.


// NE PAS TOUCHER
const myArray = ["string", "boolean", "array", "object", "integer", "float"];
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

for (let i = 0; i < myArray.length; i++) {
    if (i === 2 && myArray[i] !== "object") {
        console.log("ERREUR: Vous n'avez pas inversé la position de la valeur \"array\" avec \"object\"");
        return;
    }

    if (i === 3 && myArray[i] !== "array") {
        console.log("ERREUR: Vous n'avez pas inversé la position de la valeur \"array\" avec \"object\"");
        return;
    }
}


console.log("Félicitation !!!");
console.log("Si vous avez bien compris l'histoire des index, vous ne vous êtes pas trop cassé le crane. Sinon vous avez sans doute codé votre propre algorithme de trie ... mouhahahaha")
