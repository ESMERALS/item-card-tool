import {initializeCard} from "./InitializeCard.js";

let cardCounter = 1;

/** @type {HTMLElement} */
const bodyContainer = document.querySelector('#card-container');
/** @type {HTMLElement} */
const cardBodyTemplate = document.querySelector(`.card-body`);
cardBodyTemplate.parentElement.removeChild(cardBodyTemplate);

/** @type {HTMLElement} */
const inputContainer = document.querySelector('#input-container');
/** @type {HTMLElement} */
const cardInputsTemplate = document.querySelector(`.card-inputs`);
cardInputsTemplate.parentElement.removeChild(cardInputsTemplate);

export function addCard() {

    /** @type {HTMLElement} */
    const body = cardBodyTemplate.cloneNode(true);
    body.setAttribute('data-card-id', String(cardCounter));
    bodyContainer.appendChild(body);

    /** @type {HTMLElement} */
    const inputs = cardInputsTemplate.cloneNode(true);
    inputs.setAttribute('data-card-id', String(cardCounter));
    inputContainer.appendChild(inputs);

    initializeCard(cardCounter);

    cardCounter++;
}