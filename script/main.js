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
 * @typedef {Object} Config
 * @property {Object} settings
 * @property {?number} settings.speed
 * @property {?boolean} settings.shuffle
 * @property {?boolean} settings.bounceTitle
 * @property {?boolean} settings.horizontalSlide
 * @property {Array<Option>} data
 */

/**
 * @type {Config}
 */
var config

var aniLenMs = 10000;
var aniLenS = aniLenMs / 1000;

var index = 0

var len;

async function main(){
    
    const raw = await fetch("config/config.json");
    const rawStr = await raw.text();
    config = await JSON.parse(rawStr);
    if(config.settings.speed){
        aniLenS = config.settings.speed;
        aniLenMs = aniLenS * 1000;
    }
    container.style.animation = config.settings.horizontalSlide ? `slide ${aniLenS}s infinite` : `slideH ${aniLenS}s linear infinite`;
    len = config.data.length;
    update();
    container.addEventListener('animationiteration', (e) => {
        if(e.target !== container) return;
        console.log("done");
        index++;
        if(config.settings.shuffle) shuffle();
        if(index >= len) index = 0;
        update();
    })
}
function seperateLetters(string){
    const letters = string.split("");
    console.log(letters);
    return letters;
}
function spanPerLetter(string){
    const letters = seperateLetters(string);
    const arr = [];
    letters.forEach((letter, index) => {
        let element = document.createElement("span");
        element.innerHTML = letter === " " ? "&nbsp;" : letter;
        element.className = "letter";
        element.style.animationDelay = `${index * 0.25}s`;
        arr.push(element);
    });
    return arr;
}
function update(){
    image.src = "assets/" + config.data[index].image + ".png";
    text.innerHTML = config.data[index].text;
    title.innerHTML = "";
    if(config.settings.bounceTitle){
        let letters = spanPerLetter(config.data[index].title)
        letters.forEach((letter, index) => {
            title.appendChild(letter);
        });
    } else {
        title.innerHTML = config.data[index].title;
    }
    
}
main();

function shuffle(){
    console.log("shuffling");
    if(len <= 1) return index;
    var newIndex = Math.floor(Math.random() * len);
    while(newIndex === index){
        newIndex = Math.floor(Math.random() * len);
    }
    index = newIndex;
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}