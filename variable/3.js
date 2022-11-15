// Je fais la difference entre déclaration et initialisation

// Déclarer la variable "test1" sans l'initialiser
// Déclarer la variable "test2" sans l'initialiser
// Déclarer la variable "test3" sans l'initialiser
// Déclarer la variable "test4" sans l'initialiser

// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

try {
    if (test1 !== undefined) {
        console.log("ERREUR: Vous avez initialisé la variable test1");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test1");
    return;
}

try {
    if (test2 !== undefined) {
        console.log("ERREUR: Vous avez initialisé la variable test2");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test2");
    return;
}

try {
    if (test3 !== undefined) {
        console.log("ERREUR: Vous avez initialisé la variable test3");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test3");
    return;
}

try {
    if (test4 !== undefined) {
        console.log("ERREUR: Vous avez initialisé la variable test4");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test4");
    return;
}

console.log("Félicitation !!!");

console.log("RAPPEL: Déclarer une variable consiste simplement à lui donner un nom, vous bloquez \"une adresse\" pour cette variable. Néanmoins cette variable ne contient pas de valeur");
