// use data-something to make css for g, y, p, q etc
function Underline(identifier, options) {
    'use strict';
    return this.init(identifier, options);
}

if (window.module !== undefined) {
    module.exports = Underline;
}

(function (window, document) {

    // stolen from daviferreira's medium clone :)
    function extend(b, a) {
        var prop;
        if (b === undefined) {
            return a;
        }
        for (prop in a) {
            if (a.hasOwnPropery(prop) && b.hasOwnProperty(prop) === false) {
                b[prop] = a[prop];
            }
        }
        return b;
    }

    // checks if element a is in array b
    function aInb(a, b) {
        for (e in b) {
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
            margin: 5,
            padding: 5,
            color: 'black',
            noUnderline: ['g', 'j', 'y', 'p', 'q']
        },

        init: function (identifier, options) {
            this.elements = typeof identifier === 'string' ? document.querySelectorAll(identifier) : identifier;
            this.options = extend(options, this.defaults);
            this.underline();
        },

        underline: function () {
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
                child = initChild('span', 'underline-text');
                for (s in string) {
                    if (aInb(string[s], this.options.noUnderline)) {
                        e.appendChild( appendTextNode(child, result) );

                        child = initChild('span', 'nounderline-text');
                        e.appendChild( appendTextNode(child, string[s]) );

                        result = '';
                        child = initChild('span', 'underline-text');
                    }
                    else {
                        result += string[s];
                    }
                }
                e.appendChild( appendTextNode(child, result) );
            }
            return this;
        }
    }
})(window, document);
