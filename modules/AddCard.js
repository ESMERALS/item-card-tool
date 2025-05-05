import {initializeCard} from "./InitializeCard.js";

let cardCounter = 1;

/** @type {HTMLElement} */
const inputContainer = document.querySelector('#input-container');
/** @type {HTMLElement} */
const firstCardBody = document.querySelector(`.card-body[data-card-id="1"]`);
/** @type {HTMLElement} */
const cardBodyTemplate = firstCardBody.cloneNode(1);

/** @type {HTMLElement} */
const bodyContainer = document.querySelector('#card-container');
/** @type {HTMLElement} */
const firstCardInputs = document.querySelector(`.card-inputs[data-card-id="1"]`);
/** @type {HTMLElement} */
const cardInputsTemplate = firstCardInputs.cloneNode(1);

export function addCard() {
    const cardId = cardCounter + 1;

    /** @type {HTMLElement} */
    const body = cardBodyTemplate.cloneNode(1);
    /** @type {HTMLElement} */
    const inputs = cardInputsTemplate.cloneNode(1);

    body.setAttribute('data-card-id', String(cardId));
    inputs.setAttribute('data-card-id', String(cardId));

    inputContainer.appendChild(inputs);
    bodyContainer.appendChild(body);

    initializeCard(cardId);

    cardCounter++;
}