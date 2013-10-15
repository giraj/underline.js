// keeps track of underline instances for class naming
var Underline_id = 0;

function Underline(identifier, options) {
    'use strict';
    return this.init(identifier, options);
}

if (window.module !== undefined) {
    module.exports = Underline;
}

(function (window, document) {
    'use strict';

    // stolen from daviferreira's medium clone :)
    function extend(b, a) {
        var prop;
        if (b === undefined) {
            return a;
        }
        for (prop in a) {
            if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
                b[prop] = a[prop];
            }
        }
        return b;
    }

    // checks if element a is in array b
    function aInb(a, b) {
        for (var e in b) {
            if (b[e] === a) {
                return true;
            }
        }
        return false;
    }

    function initChild(tag, classes) {
        var child = document.createElement(tag);
        if (typeof classes === 'string') {
            child.classList.add(classes);
        }
        else {
            classes.forEach(function (c) {
                child.classList.add(c);
            });
        }
        return child;
    }

    function appendTextNode(child, text) {
        child.appendChild( document.createTextNode(text) );
        return child;
    }

    Underline.prototype = {
        defaults: {
            margin: 0,
            width: 1,
            style: 'solid',
            color: 'black',
            noUnderline: ['g', 'j', 'y', 'p', 'q']
        },

        init: function (identifier, options) {
            console.log(this.defaults.hasOwnProperty);
            this.elements = typeof identifier === 'string' ? document.querySelectorAll(identifier) : identifier;
            this.options = extend(options, this.defaults);
            this.id = Underline_id++;
            this.format()
                .underline();
        },

        format: function () {
            var i,
                s,
                result,
                string,
                child,
                e;
            for (i = 0; i < this.elements.length; i++) {
                e = this.elements[i];
                string = e.textContent;
                e.innerHTML = '';

                result = '';
                child = initChild('span', 'underline-text' + this.id);
                for (s in string) {
                    if (aInb(string[s], this.options.noUnderline)) {
                        e.appendChild( appendTextNode(child, result) );

                        child = initChild('span', 'nounderline-text' + this.id);
                        e.appendChild( appendTextNode(child, string[s]) );

                        result = '';
                        child = initChild('span', 'underline-text' + this.id);
                    }
                    else {
                        result += string[s];
                    }
                }
                e.appendChild( appendTextNode(child, result) );
            }
            return this;
        },

        underline: function() {
            var head = document.getElementsByTagName('head')[0],
                s = document.createElement('style');
            // holy shit this is bad
            var css = ".underline-text" + this.id + ":after {";
                css += "content: '';";
                css += "position: absolute;";
                css += "border-bottom: " + this.options.width + 'px ' + this.options.style + ' ' + this.options.color + ';';
                css += "height: 1.15em; /* insane default.. */";
                css += "left: 0;";
                css += "right: 0;";
                css += "margin-top: " + this.options.margin + 'px;';
                css += '}';
                css += ".underline-text" + this.id + " { position:relative; } ";
            s.setAttribute('type', 'text/css');
            if (s.styleSheet) {   // IE
                s.styleSheet.cssText = css;
            } else {                // the world
                s.appendChild(document.createTextNode(css));
            }
            head.appendChild(s);
        }
    }
})(window, document);
