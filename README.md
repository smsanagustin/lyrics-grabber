# Lyrics Grabber

A GNOME Shell 50 extension that detects the currently playing song and shows
its lyrics in a panel popup.

It works in three steps:

1. **Detect the song** — reads the title/artist of the active player over MPRIS.
2. **Fetch the lyrics** — searches lrclib for `"<title> <artist>"` for lyrics.
3. **Show them** — displays the lyrics in a scrollable popup, opened from the
   music-note icon in the top panel.

## Project layout

| File                            | Responsibility                                            |
| ------------------------------- | --------------------------------------------------------- |
| `extension.js`                  | Entry point: the panel button, popup UI, and refresh flow |
| `prefs.js`                      | Preferences window (font-size setting)                    |
| `mpris.js`                      | MPRIS / D-Bus: find the active player and read its track  |
| `lyrics.js`                     | Lyrics request/extraction                                 |
| `stylesheet.css`                | Popup styling                                             |
| `schemas/`                      | GSettings schema for the extension's settings             |
| `icons/music-note-symbolic.svg` | Panel icon                                                |
| `metadata.json`                 | Extension manifest                                        |

## Settings

Open the extension's settings to adjust the **panel's font size**.

## Screenshot

<img width="558" height="602" alt="image" src="https://github.com/user-attachments/assets/646bed8c-f9ca-40ca-b8d8-fe6648fec7d2" />



## Todo

-   [x] Add font size adjustment option
