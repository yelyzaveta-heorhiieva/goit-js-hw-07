'use strict';

const box = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = document.querySelector("#controls input")

function createBoxes(amount) {
    box.innerHTML = '';
    let newBoxes = '';
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();
        newBoxes += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    } 

    box.insertAdjacentHTML('beforeend', newBoxes);
}


create.addEventListener('click', () => {
    const amount = input.value;
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = "";
    }
});
  
destroy.addEventListener('click', () => box.innerHTML = "");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

