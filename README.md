#Underline.js

Underline.js is a fancy way to underline, removing the line under letters such as 'g', 'j', 'p' and 'q' for improved aesthetics.

Using it is as easy as adding the js and css files to your project, specify target elements and initializing underline.

Project is still in the works. Options are currently not handled, so only defaults..

Demo page available at [jarlg.github.io/underline.js](http://jarlg.github.io/underline.js)

Specifying elements:
```html
<h1 class='underline'>...</h1>
```
NOTE: Doesn't need to be ```<h1>```.

Initializing underline with defaults:
```html
<script type=text/javascript>
    var underline = new Underline('.underline');
</script>
```

## Initialization options
* __padding__: padding around non-underlined characters. Default: (TODO)
* __noUnderline__: characters that should not have an underline. Default: ['g', 'q', 'y', 'p', 'j']
* __color__: specify color of underline. Default: "black"
* __margin__: margin from text baseline to the underline. Default: (TODO)

Example: 
```javascript
var underline = new Underline('.underline', {
    padding: 3,
    color: cyan,
    noUnderline: ['g', 'y', 'q', 'p'], // j looks awesome underlined!!
    margin: 3
});
```
