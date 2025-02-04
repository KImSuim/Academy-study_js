const box = document.querySelector(".box");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue");
const greenButton = document.querySelector("#green");
const yellowButton = document.querySelector("#yellow");
const squareButton = document.querySelector("#square");
const softButton = document.querySelector("#soft");
const hardButton = document.querySelector("#hard");
const smallButton = document.querySelector("#small");
const mediumButton = document.querySelector("#medium");
const largeButton = document.querySelector("#large");

const colorBox = ["red","blue","green","yellow"]
const dohyeongBox = ["square","soft","hard"]
const sizeBox = ["small","medium","large"]



redButton.addEventListener(`click`, () => {
    box.classList.remove(...colorBox);
    box.classList.add("red");
})

blueButton.addEventListener(`click`, () => {
    box.classList.remove(...colorBox);
    box.classList.add("blue");
})

greenButton.addEventListener(`click`, () => {
    box.classList.remove(...colorBox);
    box.classList.add("green");
})

yellowButton.addEventListener(`click`, () => {
    box.classList.remove(...colorBox);
    box.classList.add("yellow");
})

squareButton.addEventListener(`click`, () => {
    box.classList.remove(...dohyeongBox);
    box.classList.add("square");
})

softButton.addEventListener(`click`, () => {
    box.classList.remove(...dohyeongBox);
    box.classList.add("soft");
})

hardButton.addEventListener(`click`, () => {
    box.classList.remove(...dohyeongBox);
    box.classList.add("hard");
})

smallButton.addEventListener(`click`, () => {
    box.classList.remove(...sizeBox);
    box.classList.add("small");

})

mediumButton.addEventListener(`click`, () => {
    box.classList.remove(...sizeBox);
    box.classList.add("medium");
})

largeButton.addEventListener(`click`, () => {
    box.classList.remove(...sizeBox);
    box.classList.add("large");

})