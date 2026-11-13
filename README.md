# Yakuake Snap Position

A lightweight KWin script for KDE Plasma 6 (Wayland & X11) that forces Yakuake's top Y-coordinate to a configurable pixel offset every time it expands.

![Ugly Gap](images/image.png "Gap between floating panel and Yakuake.")  ![No gap](images/image2.png "Script activated, no more gap!")

## Why This Exists

When using a **Floating** top panel in KDE Plasma 6, Plasma reserves extra vertical strut padding around the panel's bounding box. Because Yakuake recalculates its position against the screen's available work area on every expansion, it leaves a noticeable gap between the bottom of the floating panel and the top of the terminal—and standard KWin Window Rules are overridden each time Yakuake retracts and reopens.

**Yakuake Snap Position** listens for Yakuake's window geometry events and immediately snaps its top edge flush against your panel on every expand, complete with a native settings dialog in System Settings.

---

## Features

* **Persistent Snapping:** Re-applies your target Y-offset automatically every time Yakuake opens or expands.
* **Wayland & X11 Compatible:** Works around Wayland positioning resets without forcing Yakuake onto XWayland.
* **Native Settings UI:** Adjust the top Y offset in pixels directly from **System Settings → Window Management → KWin Scripts** with live preview updates.

---

## Installation

### Option 1: Install Pre-Built `.kwinscript` (Recommended)

1. Download the latest `yakuake-snap-v*.kwinscript` file from the [Releases](https://github.com/TheBigWazz/yakuake-snap/releases) page.
2. Open **System Settings** → **Window Management** → **KWin Scripts**.
3. Click **Install from File...** at the top right and select the downloaded `.kwinscript` file.
4. Enable **Yakuake Snap Position** in the list and click **Apply**.

### Option 2: Install via Terminal (`kpackagetool6`)

```bash
kpackagetool6 --type=KWin/Script -i yakuake-snap-v1.1.kwinscript
