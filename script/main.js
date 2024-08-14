const image = document.getElementById("image");
const text = document.getElementById("text");

/**
 * @typedef {Object} Option
 * @property {string} text
 * @property {string} image
 */

/**
 * @type {Array<Option>}
 */
var config


async function main(){
    const raw = await fetch("config/config.json");
    const rawStr = await raw.text();
    config = await JSON.parse(rawStr);

    image.src = "assets/" + config[0].image + ".png";
    text.innerHTML = config[0].text;
}

main();