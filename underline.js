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

    Underline.prototype = {
        defaults: {
            margin: 5,
            padding: 5,
            noUnderline: ['g', 'j', 'y', 'p', 'q']
        },

        init: function (identifier, options) {
            this.elements = document.querySelectorAll(identifier);
            this.options = extend(options, this.defaults);
            this.underline();
        },

        underline: function () {
            var i,
                s,
                result,
                string,
                start = '<span class="underline-text" data-underline-margin="' + this.options.margin + '" data-underline-padding="' + this.options.padding + '">';
            for (i = 0; i < this.elements.length; i++) {
                result = start;
                string = this.elements[i].textContent;
                for (s in string) {
                    if (aInb(string[s], this.options.noUnderline)) {
                        // we close the preceding texts' tag, encapsule the un-underlined letter
                        // in a span with a data attr. containing the letter itself, so we can
                        // handle different letters differently in css, and then open a new tag
                        // for the next text
                        result += '</span><span data-underline-letter="' + string[s] + '">' + string[s] + '</span>' +  start;
                    }
                    else {
                        result += string[s];
                    }
                }
                result += '</span>';
                this.elements[i].innerHTML = result;
            }
            return this;
        }
    }
})(window, document);
