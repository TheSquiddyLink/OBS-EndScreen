const image = document.getElementById("image");
const text = document.getElementById("text");
const container = document.getElementById("container");
const title = document.getElementById("title");

/**
 * @typedef {Object} Option
 * @property {string} text
 * @property {string} image
 * @property {string} title
 */

/**
 * @type {Array<Option>}
 */
var config

const aniLenMs = 10000;
const aniLenS = aniLenMs / 1000;

var index = 0

var len;

async function main(){
    container.style.animation = `slide ${aniLenS}s infinite`;
    const raw = await fetch("config/config.json");
    const rawStr = await raw.text();
    config = await JSON.parse(rawStr);
    len = config.length;
    update();
    container.addEventListener('animationiteration', (e) => {
        if(e.target !== container) return;
        console.log("done");
        index++;
        if(index >= len) index = 0;
        update();
    })
}
function seperateLetters(string){
    const letters = string.split("");
    return letters;
}
function spanPerLetter(string){
    const letters = seperateLetters(string);
    const arr = [];
    letters.forEach((letter, index) => {
        let element = document.createElement("span");
        element.innerHTML = letter;
        element.className = "letter";
        element.style.animationDelay = `${index * 0.25}s`;
        arr.push(element);
    });
    return arr;
}
function update(){
    image.src = "assets/" + config[index].image + ".png";
    text.innerHTML = config[index].text;
    title.innerHTML = "";
    let letters = spanPerLetter(config[index].title)
    letters.forEach((letter, index) => {
        title.appendChild(letter);
    });
}
main();
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}