# OBS End Screen

## Settings
These are the settings that can be changed, if not specified in the config file they will use the following defaults:
- Speed: 10 seconds
- Shuffle: false
- Bounce Title: false
- Horizontal: false

- Speed: Speed of the animation in seconds
- Shuffle: Shuffle the order of the images
- Bounce Title: Add a bounce animation to the title
- Horizontal: Change the animation direction to horizontal 

## JSON Example
File should be named `config.json` and located in the config folder. (folder must be created manually)
```json
{
    "settings": {
        "speed": 10,
        "shuffle": true,
        "bounceTitle": true,
        "horizontal": true
    },
    "data": [
        {"image": "discord", "text": "https://discord.gg/54xWBDpsSJ", "title": "Discord"},
        {"image": "twitch", "text": "https://www.twitch.tv/squibsland", "title": "Twitch"},
        {"image": "youtube", "text": "@SquibsLand", "title": "YouTube" },
        {"image": "youtube", "text": "@SquibsLandVODS", "title": "YouTube VODS"},
    
        {"image": "twitch", "text":"https://www.twitch.tv/agent_t05", "title": "Featured Streamer"},
        {"image": "twitch", "text":"https://www.twitch.tv/poisonmercury", "title": "Featured Streamer"}
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