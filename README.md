#Underline.js

Underline.js is a fancy way to underline, removing the line under letters such as 'g', 'j', 'p' and 'q' for improved aesthetics.

Using it is as easy as adding the js file to your project, specify target elements and then initializing underline.

Demo page available at [jarlg.github.io/underline.js](http://jarlg.github.io/underline.js)
(See index.html for usage example)

Specifying elements:
```html
<h1 class='underline'>...</h1>
```
NOTE: Doesn't need to be ```<h1>``` nor class underline.

Initializing underline with defaults:
```html
<script type=text/javascript>
    var underline = new Underline('.underline');
</script>
```
NOTE: If you name your class something else, just replace ```.underline``` with ```.your-class-here```.

## Initialization options
* __noUnderline__: characters that should not have an underline. Default: ['g', 'q', 'y', 'p', 'j']
* __color__: specify color of underline. Default: "black"
* __margin__: margin from text baseline to the underline. Default: 0
* __style__: underline uses borders as underlines, so you can specify a border style to use. Default: "solid"

Example: 
```javascript
var underline = new Underline('.underline', {
    padding: 3,
    color: 'cyan',
    noUnderline: ['g', 'y', 'q', 'p'], // j looks awesome underlined!!
    margin: 3
});
```
