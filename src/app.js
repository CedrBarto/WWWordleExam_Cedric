"use strict";

import { Answer } from "./Answer.js";
//import { Game } from "./Game.js";

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // Créer 5 instances de Answer pour les 5 tentatives
    const attempt1 = new Answer();
    const attempt2 = new Answer();
    const attempt3 = new Answer();
    const attempt4 = new Answer();
    const attempt5 = new Answer();

    //const game = new Game(attempt1, attempt2, attempt3, attempt4, attempt5);


    // Fonction pour obtenir l'URL de l'API
    async function getWordleUrl() {
        try {
            const response = await fetch('https://progweb-wwwordle-api.onrender.com/', {
                method: 'POST'
            });
            const data = await response.json();
            console.log('URL reçue:', data.url);
            return data.url;
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
            throw error;
        }
    }

    // Exécuter la requête
    getWordleUrl().then(url => {
        console.log('URL à utiliser:', url);
        // Vous pouvez utiliser l'URL ici pour la suite
    });
});