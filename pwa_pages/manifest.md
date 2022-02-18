title: Manifest file Creator
date: 2021-01-08
modified: 2022-02-17 20:54:00
template: manifest1
save_as: manifest.json
status: hidden
name: "Test PWA 12voltfarm"
short_name: "Test PWA"
description: "A progressive web app automatically created by Pelican Static blog generator."
icon_images: 48x48: icons/48x48_pwa_icon.png, 57x57: icons/57x57_pwa_icon.png, 60x60: icons/60x60_pwa_icon.png, 72x72: icons/72x72_pwa_icon.png, 76x76: icons/76x76_pwa_icon.png, 96x96: icons/96x96_pwa_icon.png, 114x114: icons/114x114_pwa_icon.png, 120x120: icons/120x120_pwa_icon.png, 128x128: icons/128x128_pwa_icon.png, 144x144: icons/144x144_pwa_icon.png, 152x152: icons/152x152_pwa_icon.png, 180x180: icons/180x180_pwa_icon.png, 192x192: icons/192x192_pwa_icon.png, 256x256: icons/256x256_pwa_icon.png, 384x384: icons/384x384_pwa_icon.png, 512x512: icons/512x512_pwa_icon.png
version: "1.7"


This page forces pelican to create a 'manifest.json' file. You must have a 'manifest.json' file to create a PWA.

This file forces pelican to:

- create a 'manifest.json' file from your choice of the PWA theme's manifest*<n>*.html template files
- name the created file 'manifest.json'
- populate the 'manifest.json' file with data from the chosen manifest*<n>*.html file in the theme's 'template' directory. Except...
- the 'version' entry which is read from this 'manifest.md' file's 'version' metadata tag
- optionally, populate the 'manifest.json' file with any variables set in this 'manifest.md' file.

Use this file's 'template' metadata tag to choose one of the other 'manifest*<n>*.html template files. Specify the base-name of the 'manifest*<n>*.html' template without its '.html' extension.

Currently, the 'manifest' templates are:

- manifest1.html: Takes SITENAME and SITESUBTITLE from pelicanconfi.py to create PWA's 'name', 'short_name' and 'description' fields. Has hard-coded links to icon image files.
- manifest2.html: Requires you hard-code links to icon image files - which are required by PWAs.
- manifest3.html: Lets you specify icon image files in the 'icon_images' metatag, as shown in this file.

'Status' metadata tag can be set to 'hidden' or 'draft' but not 'published'. Unless you want to show how you constructed your PWA.

Reasoning for this approach:

This use of 'template' and 'save-as' metadata tags allows you to choose your preferred template file while always saving the resulting file as 'manifest.json'. This page is called in the main webpage's header.

You don't have to use the 'version' metadata tag. But Progressive Web Applications (PWAs) use changes in the manifest.json file to inform devices that app details have changed. Changing the 'version' metadata tag forces the 'manifest.json' file to change. This process is separate to how PWAs inform devices that updated content is available. The latter is handled by the separate 'service-worker.js' file.

Versions:
1.5 While debugging dicts in metadata - switch to manifest1 template
1.4 While debugging dicts in metadata
1.3 Re Tests if adding PWA = True switches in base.html's pwa_header_files.html because pwa_header_files.htm wasn't in 'includes'
1.2 Tests if adding PWA = True switches in base.html's pwa_header_files.html
1.1 Tests if adding PWA = False switches out base.html's pwa_header_files.html
1.0 Successful test of including version number in manifest.json


Test:

Change manifest.htmls to represent:
/* Per https://dev.to/pablo_74/pwa-set-manifest-json-name-icon-dynamically-client-side-jabbadabbadoo-10h7 */
scope as 'URI'
start_url as same
/* Per https://developer.chrome.com/blog/pwa-manifest-id/ */
id:
Create more icons and load images/pwa_icons/ and test...
