// Je rassemble toute mes competences pour créer un programme complet

// Créez une fonction nommée "result" qui prend un argument
// Cet argument contiendra un string avec une phrase à l'intérieur
// Retournez le nombre de mots contenu dans la phrase

// ============================= CODEZ ICI ================================


// ========================================================================
// NE PAS TOUCHER


try {
    const values = [
        {assertion: "Il fait beau", expected: 3},
        {assertion: "JS est l'un des pire language aux monde", expected: 8},
        {assertion: "Le language d'assembleur est spécifique à chaque constructeur de processeur", expected: 10},
        {assertion: "Le mot clé \"null\" n'est pas une valeur", expected: 8},
    ];

    for (let i = 0; i < values.length; i++) {
        const res = result(values[i].assertion);

        if (res !== values[i].expected) {
            console.log("ERREUR: La chaine \"" + values[i].assertion + "\" ne contient pas " + res + " mots");
            return;
        }
    }
} catch (e) {
    console.log("ERREUR: Vous n'avez pas déclaré la fonction result");
    return;
}

console.log("Félicitation !!!");
