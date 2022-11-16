// Je rassemble toute mes competences pour créer un programme complet

// Créez une fonction nommée "result" qui prend un argument
// Cet argument contiendra un tableau de string.
// Retournez le tableau après avoir éliminé toutes les minuscules

// ============================= CODEZ ICI ================================


// ========================================================================
// NE PAS TOUCHER


try {
    const res = result(["BonJour", "Aurevoir", "MIIIAaaam", "MouHahaHa"]);

    for (let i = 0; i < res.length; i++) {
        if (res[i].match("[a-z]+")) {
            console.log("Le mot \"" + res[i] + "\" contient encore des minuscules");
            return;
        }
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
