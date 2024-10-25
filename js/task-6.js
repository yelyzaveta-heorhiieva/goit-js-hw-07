'use strict';

const box = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const input = document.querySelector("#controls input")

function createBoxes(amount) {
    box.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const newBox = document.createElement('div');
        box.append(newBox);  
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;
        newBox.style.backgroundColor = getRandomHexColor();
    } 
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

