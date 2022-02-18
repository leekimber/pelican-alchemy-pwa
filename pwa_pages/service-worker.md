title: ServiceWorker Creator
date: 2021-01-08
modified: 2022-02-17 21:16:29
template: service-worker6
save_as: service-worker.js
status: hidden
cache_files: "theme/css/theme.css", "theme/css/bootstrap.min.css", "theme/css/default.min.css", "theme/css/fontawesome.min.css", "theme/js/toggle_source_language.js", "theme/webfonts/fa-solid-900.woff2", "index.html"
version: 0.9

This file forces pelican to create a basic serviceworker.js file in pelican's 'output' directory. Ie, in the website's root directory.

You can use it to test if this pelican PWA theme is working.

It forces pelican to:

- create a 'service-worker.js' file from your choice of the theme's service-worker*<n>*.html template files
- name the created file 'service-worker.js'
- populate the 'service-worker.js' file with the contents of 'service-worker.html'
- populate the 'service-worker.js' file with any variables set in this 'service-worker.md' file.

Use the 'template' metadata tag to choose one of the other 'service-worker*<n>*.html template files. Specify the base-name of the 'service-worker*<n>*.html' template without its '.html' extension.

Current service-worker templates are:

- service-worker1.html: A basic service-worker file with the functional parts labelled. Based on examples in chapter 3 Dean Hume's PWA book
- service-worker2.html: A pre-caching example from chapter 3 of Dean Hume's PWA book.
- service-worker3.html: Example of caching all new requests with no pre-caching.
- service-worker4.html: Pre-caching hard-coded list and all other requests as they occur.
- service-worker5.html: service-worker5.html has hard-coded list of pelican-alchemy-pwa theme files to precache. Plus all other requests.
- service-worker6.html: 'cache_files' metadata tag lists files the PWA should precache. Plus all other requests.

All service-worker javascript is taken from the examples provided by Dean Alan Hume in his book [*Progressive Web Apps*](https://www.simonandschuster.com/books/Progressive-Web-Apps/Dean-Alan-Hume/9781617294587).

'Status' metadata tag can be set to 'hidden' or 'draft' but not 'published'. Unless you want to show how you constructed your PWA.

Reasoning for this approach:

This use of 'template' and 'save-as' metadata tags allows you to choose your preferred template file while always saving the resulting file as 'service-worker.js'. So that all other files in the assemblage of PWA files can reference a single 'service-worker.js'.

Although the You don't have to use the 'version' metadata tag. 
