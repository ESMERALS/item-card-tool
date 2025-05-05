import {initializeCard} from "./modules/InitializeCard.js";
import {addCard} from "./modules/AddCard.js";


document.addEventListener('DOMContentLoaded', () => {
    initializeCard(1);
    addCard();
    addCard();
    addCard();
})