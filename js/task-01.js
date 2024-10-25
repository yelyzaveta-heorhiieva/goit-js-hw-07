'use strict';

const items = document.querySelectorAll("#categories .item");

console.log("Number of categories:", items.length);

items.forEach(item => {
    const itemTitle = item.querySelector("h2");
    const itemElements = item.querySelectorAll("ul li");

    console.log(`Category: ${itemTitle.textContent}`);
    console.log(`Elements: ${itemElements.length}`);
})