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
```

### Option 3: Manual build

# Manual Compilation & Installation

If you prefer not to use a pre-compiled `.kwinscript` release or the `build.sh` helper script, you can install directly from the raw source folder or manually package the `.kwinscript` archive.

## Method 1: Install Directly from Source (No Packaging Required)

`kpackagetool6` can register and install an unpacked directory directly without creating a `.kwinscript` zip file.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/TheBigWazz/yakuake-snap.git](https://github.com/TheBigWazz/yakuake-snap.git)
   cd yakuake-snap
   ```

2. **Install the unpacked package via `kpackagetool6`:**
   ```bash
   kpackagetool6 --type=KWin/Script -i .
   ```
   *(If the script is already installed and you are updating it after pulling new commits, run `kpackagetool6 --type=KWin/Script -u .` instead.)*

3. **Enable the script:**
   Open **System Settings** → **Window Management** → **KWin Scripts**, check **Yakuake Snap Position**, and click **Apply**.

---

## Method 2: Manually Package a `.kwinscript` File

A `.kwinscript` package is a standard ZIP archive with `metadata.json` and the `contents/` directory placed at the **root level** of the archive (not nested inside a parent folder).

1. **Clone the repository and enter the directory:**
   ```bash
   git clone [https://github.com/TheBigWazz/yakuake-snap.git](https://github.com/TheBigWazz/yakuake-snap.git)
   cd yakuake-snap
   ```

2. **Create the `.kwinscript` ZIP archive:**
   ```bash
   zip -r yakuake-snap.kwinscript metadata.json contents/
   ```

3. **Verify the archive structure:**
   ```bash
   unzip -l yakuake-snap.kwinscript
   ```
   Confirm that `metadata.json` and `contents/code/main.js` appear at the top level without a leading folder prefix.

4. **Install the generated package:**
   * **Via GUI:** Open **System Settings** → **Window Management** → **KWin Scripts** → click **Install from File...** → select `yakuake-snap.kwinscript`, enable it, and click **Apply**.
   * **Via Terminal:**
     ```bash
     kpackagetool6 --type=KWin/Script -i yakuake-snap.kwinscript
     ```
