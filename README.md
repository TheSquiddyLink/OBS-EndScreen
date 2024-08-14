# OBS End Screen

## Settings
These are the settings that can be changed, if not specified in the config file they will use the following defaults:

- Speed: Speed of the animation in seconds (default 10)
- Shuffle: Shuffle the order of the images (default false)
- Bounce Title: Add a bounce animation to the title (default false)
- Horizontal: Change the animation direction to horizontal (default false)

## JSON Example
File should be named `config.json` and located in the config folder. (folder must be created manually)
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
To see the current CSS naviate to [style/main.css](./style/main.css)

- `body` The entier document
- `#imgText` The section that contains the image and text
- `#image` The image element
- `.textContainer` The container for the text
- `#text` The text element
- `#title` The title element
- `#title > *` The title text (Used for the bounce animation)

- `@keyframes slide` The animation for the slide
- `@keyframes bounce` The animation for the bounce
- `@keyframes slideH` The animation for horizontal slide