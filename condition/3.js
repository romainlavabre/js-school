// J'apprends à prendre des décisions de façon conditionnelle

// Creez une fonction nommée "result" et prenant un argument
// Si l'argument est égale à "rudolf", retournez "Allemand"
// Si l'argument est égale à "bellini", retournez "Sicilien"
// Si l'argument est égale à "evan", retournez "Espagnol"

// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER


try {
    if (result("rudolf") !== "Allemand") {
        console.log("ERREUR: Votre fonction retourne " + result("rudolf") + " pour la valeur rudolf");
        return;
    }

    if (result("bellini") !== "Sicilien") {
        console.log("ERREUR: Votre fonction retourne " + result("bellini") + " pour la valeur bellini");
        return;
    }

    if (result("evan") !== "Allemand") {
        console.log("ERREUR: Votre fonction retourne " + result("Espagnol") + " pour la valeur evan");
        return;
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
