// J'apprends les tableaux

// Dans le tableau myArray, remplacez la valeur "array" par "Je suis fan des tableaux"
// Dans le tableau myArray, remplacez la valeur "integer" par "arrrrr"
// Dans le tableau myArray, remplacez la valeur "string" par "Ca sort par le nez ! C'est gagné !"


// NE PAS TOUCHER
const myArray = ["string", "boolean", "array", "object", "integer", "float"];
// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER


if (myArray.includes("array") || !myArray.includes("Je suis fan des tableaux")) {
    console.log("ERREUR: Vous n'avez pas remplacé la valeur \"array\" par \"Je suis fan des tableaux\"");
    return;
}

if (myArray.includes("integer") || !myArray.includes("arrrrr")) {
    console.log("ERREUR: Vous n'avez pas remplacé la valeur \"integer\" par \"arrrrr\"");
    return;
}

if (myArray.includes("string") || !myArray.includes("Ca sort par le nez ! C'est gagné !")) {
    console.log("ERREUR: Vous n'avez pas remplacé la valeur \"string\" par \"Ca sort par le nez ! C'est gagné !\"");
    return;
}


console.log("Félicitation !!!");
