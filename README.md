# Lyrics Grabber

A GNOME Shell 50 extension that detects the currently playing song and shows
its lyrics in a panel popup.

[<img height="200" alt="get_it_on_gnome" src="https://github.com/user-attachments/assets/891ac2a7-a28e-406e-a84a-cb2b1bad3ca6" />](https://extensions.gnome.org/extension/10073/lyrics-grabber/)



**How it works:**
1. Detects the song playing in the background via MPRIS
2. Fetches the lyrics from `lrclib`
3. Shows the fetched lyrics on the panel popup

## Project layout

| File                            | Responsibility                                            |
| ------------------------------- | --------------------------------------------------------- |
| `extension.js`                  | Entry point: the panel button, popup UI, and refresh flow |
| `prefs.js`                      | Preferences window (font-size setting)                    |
| `mpris.js`                      | MPRIS / D-Bus: find the active player and read its track  |
| `lyrics.js`                     | Fetches lyrics                                            |
| `stylesheet.css`                | Popup styling                                             |
| `schemas/`                      | GSettings schema for the extension's settings             |
| `icons/music-note-symbolic.svg` | Panel icon                                                |
| `metadata.json`                 | Extension manifest                                        |

## Settings
- Change text font size

## Screenshot
#### Default Gnome:
<img width="558" height="602" alt="image" src="https://github.com/user-attachments/assets/646bed8c-f9ca-40ca-b8d8-fe6648fec7d2" />

#### If using [blur my shell](https://github.com/aunetx/blur-my-shell):
<img width="605" height="603" alt="image" src="https://github.com/user-attachments/assets/6d0dd84a-252e-4a89-bc01-da4d76c7158b" />


