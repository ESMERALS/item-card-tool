export function initializeCard(cardId) {

    /** @type {HTMLElement} */
    const cardBody = document.querySelector(`.card-body[data-card-id="${cardId}"]`);

    /** @type {HTMLElement} */
    const cardInputs = document.querySelector(`.card-inputs[data-card-id="${cardId}"]`);

    /** @type {HTMLElement} */
    const idIndicator = cardInputs.querySelector('.card-id-indicator');
    idIndicator.innerText = cardId;

    /** @type {HTMLElement} */
    const backFace = cardBody.querySelector('.card-back-face');

    /** @type {HTMLElement} */
    const frontFace = cardBody.querySelector('.card-front-face');

    /** @type {HTMLElement} */
    const backInputs = cardInputs.querySelector('.back-inputs');

    /** @type {HTMLElement} */
    const frontInputs = cardInputs.querySelector('.front-inputs');

    /** @type {HTMLInputElement} */
    const backgroundColorInput = backInputs.querySelector('#card-back-background-color');
    /** @type {HTMLInputElement} */
    const backgroundImageInput = backInputs.querySelector('#card-back-background-image');
    /** @type {HTMLSelectElement} */
    const backgroundSizeSelect = backInputs.querySelector('#card-back-background-size');
    /** @type {HTMLInputElement} */
    const backgroundSizeXInput = backInputs.querySelector('#card-back-background-size-x');
    /** @type {HTMLInputElement} */
    const backgroundSizeYInput = backInputs.querySelector('#card-back-background-size-y');
    /** @type {HTMLSelectElement} */
    const backgroundPositioningSelect = backInputs.querySelector('#card-back-background-position');
    /** @type {HTMLInputElement} */
    const backgroundPositionXInput = backInputs.querySelector('#card-back-background-position-x');
    /** @type {HTMLInputElement} */
    const backgroundPositionYInput = backInputs.querySelector('#card-back-background-position-y');

    backgroundColorInput.value = '#ffffff';
    backgroundColorInput.addEventListener('input', () => {
        backFace.style.backgroundColor = backgroundColorInput.value;
    })

    backgroundImageInput.addEventListener('change', () => {
        const file = backgroundImageInput.files.item(0);
        if (!file) {
            return null;
        }

        const fileUrl = URL.createObjectURL(file);
        backFace.style.backgroundImage = `url(${fileUrl})`;
    });

    backgroundSizeXInput.style.display = 'none';
    backgroundSizeYInput.style.display = 'none';
    backgroundSizeSelect.addEventListener('input', () => {
        const value = backgroundSizeSelect.value;
        const isCustom = value === "custom";
        backgroundSizeXInput.style.display = isCustom ? 'block' : 'none';
        backgroundSizeYInput.style.display = isCustom ? 'block' : 'none';
        if (isCustom) {
            return null;
        }
        backFace.style.backgroundSize = value;
    })

    backgroundSizeXInput.addEventListener('input', () => {
        backFace.style.backgroundSize = backgroundSizeXInput.value + 'mm ' + backgroundSizeYInput.value + 'mm';
    })
    backgroundSizeYInput.addEventListener('input', () => {
        backFace.style.backgroundSize = backgroundSizeXInput.value + 'mm ' + backgroundSizeYInput.value + 'mm';
    })

    backgroundPositionXInput.style.display = 'none';
    backgroundPositionYInput.style.display = 'none';
    backgroundPositioningSelect.addEventListener('input', () => {
        const value = backgroundPositioningSelect.value;
        const isCustom = value === "custom";
        backgroundPositionXInput.style.display = isCustom ? 'block' : 'none';
        backgroundPositionYInput.style.display = isCustom ? 'block' : 'none';
        if (isCustom) {
            return null;
        }
        backFace.style.backgroundPosition = value;
    })

    backgroundPositionXInput.addEventListener('input', () => {
        const xOff = backgroundPositionXInput.value || '0';
        const yOff = backgroundPositionYInput.value || '0';
        backFace.style.backgroundPosition = `${xOff}mm ${yOff}mm`;
    })

    backgroundPositionYInput.addEventListener('input', () => {
        const xOff = backgroundPositionXInput.value || '0';
        const yOff = backgroundPositionYInput.value || '0';
        backFace.style.backgroundPosition = `${xOff}mm ${yOff}mm`;
    })

    /** @type {HTMLInputElement} */
    const titleInput = frontInputs.querySelector('#card-front-title-input');
    /** @type {HTMLInputElement} */
    const typeInput = frontInputs.querySelector('#card-front-type-input');
    /** @type {HTMLInputElement} */
    const attunementInput = frontInputs.querySelector('#card-front-attunement-input');
    /** @type {HTMLTextAreaElement} */
    const descriptionInput = frontInputs.querySelector('#card-front-description-input');
    /** @type {HTMLInputElement} */
    const leftModifierInput = frontInputs.querySelector('#card-front-left-modifier-input');
    /** @type {HTMLInputElement} */
    const weightInput = frontInputs.querySelector('#card-front-weight-input');
    /** @type {HTMLInputElement} */
    const rightModifierInput = frontInputs.querySelector('#card-front-right-modifier-input');

    /** @type {HTMLSpanElement} */
    const title = frontFace.querySelector('.card-front-title');
    /** @type {HTMLSpanElement} */
    const type = frontFace.querySelector('.card-front-type');
    /** @type {HTMLElement} */
    const attunement = frontFace.querySelector('.card-front-attunement');
    /** @type {HTMLSpanElement} */
    const description = frontFace.querySelector('.card-front-description');
    /** @type {HTMLSpanElement} */
    const leftModifier = frontFace.querySelector('.card-front-left-modifier');
    /** @type {HTMLSpanElement} */
    const weight = frontFace.querySelector('.card-front-weight');
    /** @type {HTMLSpanElement} */
    const rightModifier = frontFace.querySelector('.card-front-right-modifier');

    titleInput.addEventListener('input', () => {
        title.innerHTML = titleInput.value;
    })

    typeInput.addEventListener('input', () => {
        type.innerHTML = typeInput.value;
    })

    attunementInput.addEventListener('input', () => {
        const isEnabled = attunementInput.checked;
        attunement.classList.toggle('enabled', isEnabled);
    })

    descriptionInput.addEventListener('input', () => {
        description.innerHTML = descriptionInput.value;
    });

    leftModifierInput.addEventListener('input', () => {
        leftModifier.innerHTML = leftModifierInput.value;
    });

    weightInput.addEventListener('input', () => {
        weight.innerHTML = weightInput.value;
    });

    rightModifierInput.addEventListener('input', () => {
        rightModifier.innerHTML = rightModifierInput.value;
    });
}