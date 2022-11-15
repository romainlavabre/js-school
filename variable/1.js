// J'apprend à déclarer une variable

// Déclarez et initialisez les variables comme mentionné ci-dessous
// Déclarez "var1" avec pour type string
// Déclarez "var2" avec pour type boolean
// Déclarez "var3" avec pour type integer (nombre entier)
// Déclarez "var4" avec pour type float (nombre décimal)
// Déclarez "var5" avec pour type tableau
// Déclarez "var6" avec pour type objet

// ============================= CODEZ ICI ================================


// =========================================================================
// NE PAS TOUCHER
if (typeof var1 !== "string") {
    console.log("ERREUR: La variable var1 n'est pas un string");
    return;
}

if (typeof var2 !== "boolean") {
    console.log("ERREUR: La variable var2 n'est pas un boolean");
    return;
}

if (typeof var3 !== "number") {
    console.log("ERREUR: La variable var3 n'est pas un integer");
    return;
}

if (typeof var4 !== "number") {
    console.log("ERREUR: La variable var4 n'est pas un float");
    return;
}

try {
    if (!Array.isArray(var5)) {
        console.log("ERREUR: La variable var5 n'est pas un tableau");
        return;
    }
} catch (e) {
    console.log("ERREUR: La variable var5 n'est pas définie");
    return;
}

if (typeof var6 !== "object") {
    console.log("ERREUR: La variable var6 n'est pas un objet");
    return;
}

console.log("Félicitation !!!")
