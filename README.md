#UNDERLINE.js

Underline.js is a fancy way to underline, removing the line under letters such as 'g', 'j', 'p' and 'q' for improved aesthetics.

Using it is as easy as adding the js and css files to your project, specify target elements and initializing underline.

Specifying elements:
```html
<h1 class='underline'>...</h1>
```
NOTE: Functions with other tags also.

Initializing underline with defaults:
```javascript
var underline = new Underline('.underline');
```

## Initialization options
* __padding__: padding around non-underlined characters. Default: (TODO)
* __noUnderlineCharacters__: characters that should not have an underline. Default: ['g', 'q', 'y', 'p', 'j']
* __margin__: margin from text baseline to the underline. Default: (TODO)

Example: 
```javascript
var underline = new Underline('.underline', {
    padding: 3,
    noUnderlineCharacters: ['g', 'y', 'q', 'p'], // j looks awesome underlined!!
    margin: 3
});
```
