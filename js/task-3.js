'use strict';

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", event => {
    const textValue = textInput.value.trim();
      output.textContent = textValue === '' ? 'Anonymous' : textValue;
});