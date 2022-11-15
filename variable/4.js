// Je fais la difference entre déclaration et initialisation

// Déclarer la variable "test1", initialisez-la, mais ne lui donnez pas de valeur (WTF ???)
// Déclarer la variable "test2", initialisez-la, mais ne lui donnez pas de valeur (WTF ???)
// Déclarer la variable "test3", initialisez-la, mais ne lui donnez pas de valeur (WTF ???)
// Déclarer la variable "test4", initialisez-la, mais ne lui donnez pas de valeur (WTF ???)

// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER

try {
    if (test1 === undefined) {
        console.log("ERREUR: Vous n'avez pas initialisé la variable test1");
        return;
    }

    if (test1 !== null) {
        console.log("ERREUR: La variable test1 contient une valeur");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test1");
    return;
}

try {
    if (test2 === undefined) {
        console.log("ERREUR: Vous n'avez pas initialisé la variable test2");
        return;
    }

    if (test2 !== null) {
        console.log("ERREUR: La variable test2 contient une valeur");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test2");
    return;
}

try {
    if (test3 === undefined) {
        console.log("ERREUR: Vous n'avez pas initialisé la variable test3");
        return;
    }

    if (test3 !== null) {
        console.log("ERREUR: La variable test3 contient une valeur");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test3");
    return;
}

try {
    if (test4 === undefined) {
        console.log("ERREUR: Vous n'avez pas initialisé la variable test4");
        return;
    }

    if (test4 !== null) {
        console.log("ERREUR: La variable test4 contient une valeur");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la variable test4");
    return;
}

console.log("Félicitation !!!");

console.log("INFO: Et oui, null n'est pas une valeur ...");
