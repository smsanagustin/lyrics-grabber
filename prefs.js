/* Extension settings window */

import Adw from "gi://Adw";
import Gio from "gi://Gio";
import Gtk from "gi://Gtk";

import { ExtensionPreferences } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";

export default class LyricsGrabberPreferences extends ExtensionPreferences {
  fillPreferencesWindow(window) {
    const settings = this.getSettings();

    const page = new Adw.PreferencesPage({
      title: "General",
      icon_name: "preferences-system-symbolic",
    });

    const group = new Adw.PreferencesGroup({
      title: "Appearance",
      description: "Customize how the lyrics are displayed in the popup.",
    });
    page.add(group);

    // font size shown as percentage (100 = 1em)
    const fontRow = new Adw.SpinRow({
      title: "Font size",
      subtitle: "Lyrics text size as a percentage of the default.",
      adjustment: new Gtk.Adjustment({
        lower: 100,
        upper: 200,
        step_increment: 10,
        page_increment: 20,
      }),
    });
    group.add(fontRow);

    settings.bind(
      "font-size",
      fontRow,
      "value",
      Gio.SettingsBindFlags.DEFAULT,
    );

    window.add(page);
  }
}
