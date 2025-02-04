"use strict";

export class Answer {
    
    constructor() {
        this.createForm();
    }

    createForm() {
        // Créer le formulaire
        const form = document.createElement('form');
        form.className = 'row';
        form.id = 'row-0';

        // Créer les 5 champs input pour les lettres
        for (let i = 0; i < 5; i++) {
            const input = document.createElement('input');
            input.className = 'letter';
            input.type = 'text';
            input.name = `letter-${i}`;
            input.id = `row-0--${i}`;
            input.maxLength = 1;
            form.appendChild(input);
        }


        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.hidden = true;
        form.appendChild(submitButton);
        
        const board = document.querySelector('main.board');
        board.appendChild(form);



        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        


    }

    /* //Créez un événement de type keyup sur chaque input
    inputKeyup.addEventListener("keyup", (e) => {


        console.log(e);
    }); */


}

export default Answer;