# OBS End Screen


## Description
This is a simple document that will display images with a title and a description. The intent is to be used to display socials and other information during the end credits, however, it can be used for different purposes.

**NOTE** This project is currently not complete, however, it is functional, further documentation will be added as the project progresses, as well as new features are planned to be added.

This project and others on this GitHub are made by Squibs (aka TheSquiddyLink). This project is being used on [SquibsLand - Twitch](https://www.twitch.tv/squibsland).

If you would like to preview the project you can head to the [Demo](https://thesquiddylink.github.io/OBS-EndScreen/).

## Installation
**NOTE** This project is currently in beta and many features are not yet implemented. To get the latest release of the project, please download the latest release from the [releases page](https://github.com/TheSquiddyLink/OBS-EndScreen/releases).

1. Download the Source Code from the [releases page](https://github.com/TheSquiddyLink/OBS-EndScreen/releases). Or Download the Main Branch.
2. Extract the zip file.
3. Navigate to the `config` folder, and create a new file named `config.json`.
4. Open the `config.json` file and add your information. See the [JSON Example](#json-example) for more information.
5. Navigate to the `images` folder, and add your images. All images must be a PNG. Square images are recommended.
6. Open the `index.html` file in a web browser to view the project.
7. Open OBS and add a new browser source.
8. Select the local file then choose the `index.html` file in this project.
9. Set the width to 800 and the height to 300 for the best results.

If you wish to adjust the style of the project, you can edit the `main.css` file in the `style` folder [here](./style/main.css). Information on overriding the CSS can be found [here](#css-overrides).

## Settings
These are the settings that can be changed, if not specified in the config file they will use the following defaults:

- Speed: Speed of the animation in seconds (default 10)
- Shuffle: Shuffle the order of the images (default false)
- Bounce Title: Add a bounce animation to the title (default false)
- Horizontal: Change the animation direction to horizontal (default false)

## JSON Example
The file should be named `config.json` and located in the config folder. (folder must be created manually)
```json
{
    "settings": {
        "speed": 10,
        "shuffle": false,
        "bounceTitle": true,
        "horizontal": false,
    },
    "data": [
        {"image": "discord", "text": "https://discord.gg/example", "title": "Discord"},
        {"image": "twitch", "text": "https://www.twitch.tv/example", "title": "Twitch"},
        {"image": "youtube", "text": "@example", "title": "YouTube" },
    ]
}
```
## CSS Overrides
If you want to override the CSS in obs these are the classes that are used:
To see the current CSS navigate to [style/main.css](./style/main.css)

- `body` The entire document
- `#imgText` The section that contains the image and text
- `#image` The image element
- `.textContainer` The container for the text
- `#text` The text element
- `#title` The title element
- `#title > *` The title text (Used for the bounce animation)

- `@keyframes slide` The animation for the slide
- `@keyframes bounce` The animation for the bounce
- `@keyframes slideH` The animation for the horizontal slide
