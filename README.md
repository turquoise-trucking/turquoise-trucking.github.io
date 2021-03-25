# turquoise-trucking.github.io
Repository for pre-deployment web pages and software



## Changelog

**2021-03-25 Update**

Adding meta data to all webpages [prevent robots from listing this site.](https://yoast.com/prevent-site-being-indexed/)

```html
<meta name="robots" content="noindex,nofollow">
```



## Masthead no longer fluid

To prohibit the masthead from stretching and breaking the background image I've changed the masthead container from *container-fluid* to simply *container*. A max-width class was also added to the masthead to limit width to 1400px. A white, semi-transparent gradient was also added to give the black logo text some contrast on wider screens.