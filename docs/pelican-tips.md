# Pelican Tips

## Bootstrap Classes

To have Bootstrap classes set for rendered html (`.table`, `.img-fluid` etc), use the [Bootstrapify](https://github.com/ingwinlu/pelican-bootstrapify) Pelican plugin.

In your Pelican site:

```bash
mkdir plugins
git submodule add https://github.com/ingwinlu/pelican-bootstrapify plugins/pelican-bootstrapify
```

And in Pelican config:

```python
# http://docs.getpelican.com/en/stable/plugins.html#how-to-use-plugins
PLUGIN_PATHS = ['plugins']
PLUGINS = ['pelican-bootstrapify']

BOOTSTRAPIFY = {
    'table': ['table', 'table-striped', 'table-hover'],
    'img': ['img-fluid'],
    'blockquote': ['blockquote'],
}
```

Use `BOOTSTRAPIFY` to pass a `{'css-selector': ['list-of-classes']}` dict to the plugin. Bootstrapify will append `list-of-classes` to all tags that match `css-selector`.

2022-02-05: To ensure images are shown no larger than 100% of the viewing device's screen width, tag the end of the image link ref with '#resized'. Eg:

![](https://path/to/image.jpg)
can be written as:
![](https://path/to/image.jpg#resized)
to force the image width to fit the device frame.

Clickable images can be fitted in the same way, adding '#resized' to the second link:
[![](https://path/to/image.jpg)](http://path/to/bigger/bigger_image.jpg)
can be written as:
[![](https://path/to/image.jpg#resized)](http://path/to/bigger/bigger_image.jpg)
or:
[![](https://path/to/image.jpg#clickable)](http://path/to/bigger/bigger_image.jpg)

What's the difference?

There isn't one. They both work.

However, if you want to change the css style so that clickable images look different to non-clickable images - perhaps outlined with a blue frame as clickable images were in the early web - you can change the 'clickable' element in the themes.css file. The style change will then propagate through to clickable images but not to non-clickable '#resized' images.

## Favicons

To use the `RFG_FAVICONS` setting, visit [Favicon Generator](http://realfavicongenerator.net/) to generate a favicon package and download it.

In your Pelican site:

```
mkdir content/extras
unzip <PATH_TO_PACKAGE>.zip -d content/extras
```

And in Pelican config:

```python
# https://github.com/getpelican/pelican/wiki/Tips-n-Tricks#second-solution-using-static_paths
STATIC_PATHS = ['extras', 'images']
EXTRA_PATH_METADATA = {
    'extras/android-chrome-192x192.png': {'path': 'android-chrome-192x192.png'},
    'extras/apple-touch-icon.png': {'path': 'apple-touch-icon.png'},
    'extras/browserconfig.xml': {'path': 'browserconfig.xml'},
    ...
}

RFG_FAVICONS = True
```

`EXTRA_PATH_METADATA` should correspond with the favicon package:

```bash
unzip -l <PATH_TO_PACKAGE>.zip
```

## Link posts

When adding a Link: field to the post's metadata header, the article will be rendered as a link post, which means a link icon will appear behind its title, and the title of the article will link to the destination of the link when viewing the article page. In that same page a 'view link' link/button will be rendered at the end of the content.


## Use `sitemap.xml`

There is a `sitemap.html` Jinja2 template that can be used to [generate a sitemap](https://github.com/getpelican/pelican/wiki/Tips-n-Tricks#generate-sitemapxml).

In your Pelican config:

```python
# Default value is ['index', 'tags', 'categories', 'authors', 'archives']
DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'authors', 'archives', 'sitemap']
SITEMAP_SAVE_AS = 'sitemap.xml'
```
