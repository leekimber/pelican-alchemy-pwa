title: Register PWA
date: 2022-02-10
modified: 2022-02-17 15:13:18
template: register_pwa
save_as: register_pwa.js
status: hidden


This file forces pelican to create a 'register_pwa.js' file from the theme's templates/register_pwa.html file. It creates the 'register_pwa.js' file in pelican's 'output' directory. Ie, in the website's root directory.

The code in the file is called along with the 'manifest.json' file to set up up the PWA.

It is taken from the example provided by Dean Alan Hume in his book [*Progressive Web Apps*](https://www.simonandschuster.com/books/Progressive-Web-Apps/Dean-Alan-Hume/9781617294587).

'Status' metadata tag can be set to 'hidden' or 'draft' but not 'published'. Unless you want to show how you constructed your PWA.

Reasoning for this approach:

This use of 'template' and 'save-as' metadata tags allows you to choose your preferred template file while always saving the resulting file as 'service-worker.js'. So that all other files in the assemblage of PWA files can reference a single 'service-worker.js'.

None of this current file's metadata tags are written into the 'register_pwa.js' file.
