#UNDERLINE.js

Underline.js is a fancy way to underline, removing the line under letters such as 'g', 'j', 'p' and 'q' for improved aesthetics.

Using it is as easy as adding the js and css (currently none) files to your project, specify target elements and initializing underline.

Project is still in the works. Currently using ```<u>``` for underline, which is horrible. But works as a prototype. This also means the options below are currently useless.

Specifying elements:
```html
<h1 class='underline'>...</h1>
```
NOTE: Doesn't need to be ```<h1>```.

Initializing underline with defaults:
```javascript
var underline = new Underline('.underline');
```

## Initialization options
* __padding__: padding around non-underlined characters. Default: (TODO)
* __noUnderline__: characters that should not have an underline. Default: ['g', 'q', 'y', 'p', 'j']
* __margin__: margin from text baseline to the underline. Default: (TODO)

Example: 
```javascript
var underline = new Underline('.underline', {
    padding: 3,
    noUnderline: ['g', 'y', 'q', 'p'], // j looks awesome underlined!!
    margin: 3
});
```
