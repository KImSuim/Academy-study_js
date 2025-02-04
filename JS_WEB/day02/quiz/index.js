const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const buttonNumber = [..."1234567890abcdef"]
const getOneOfHex = () => buttonNumber[getRandom(0,buttonNumber.length)];
const getColor = () => "#"+Array(6).fill(0).map((v)=> getOneOfHex()).join('')

Array(10).fill(0).forEach((v)=>{
    const btn = document.createElement("button");
    const color = getColor();
    btn.innerText = color; 
    btn.addEventListener("click", ()=>{
        const box = document.querySelector("#box");
        box.style.backgroundColor = color;
    });
    document.body.appendChild(btn);
})

