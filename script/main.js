const image = document.getElementById("image");
const text = document.getElementById("text");
const container = document.getElementById("container");
/**
 * @typedef {Object} Option
 * @property {string} text
 * @property {string} image
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
    while(true){
        await sleep(aniLenMs - 100);
        console.log("done");
        index++;
        if(index >= len) index = 0;
        update();
    }

}

function update(){
    image.src = "assets/" + config[index].image + ".png";
    text.innerHTML = config[index].text;
}
main();
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}