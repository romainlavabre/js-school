// J'apprends à prendre des décisions de façon conditionnelle

// Creez une fonction nommée "result" et prenant un argument
// Si l'argument est égale à "rudolf" ou "olivier", retournez "Allemand"
// Si l'argument est égale à "bellini" ou "layla", retournez "Sicilien"
// Si l'argument est égale à "evan" ou "romain", retournez "Espagnol"

// ATTENTION : Vous devez utiliser la structure conditionnelle "switch"

// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER


try {
    if (result("rudolf") !== "Allemand") {
        console.log("ERREUR: Votre fonction retourne " + result("rudolf") + " pour la valeur rudolf");
        return;
    }

    if (result("olivier") !== "Allemand") {
        console.log("ERREUR: Votre fonction retourne " + result("olivier") + " pour la valeur olivier");
        return;
    }

    if (result("bellini") !== "Sicilien") {
        console.log("ERREUR: Votre fonction retourne " + result("bellini") + " pour la valeur bellini");
        return;
    }

    if (result("layla") !== "Sicilien") {
        console.log("ERREUR: Votre fonction retourne " + result("layla") + " pour la valeur layla");
        return;
    }

    if (result("evan") !== "Espagnol") {
        console.log("ERREUR: Votre fonction retourne " + result("evan") + " pour la valeur evan");
        return;
    }

    if (result("romain") !== "Espagnol") {
        console.log("ERREUR: Votre fonction retourne " + result("romain") + " pour la valeur romain");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
