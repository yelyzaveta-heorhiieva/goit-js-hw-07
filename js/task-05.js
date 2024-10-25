'use strict';

const body = document.querySelector('body');
const widgetBtn = document.querySelector(".change-color");
const color = document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = () => {
    body.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor();
}

widgetBtn.addEventListener("click", changeColor)