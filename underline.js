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
                string;
            for (i = 0; i < this.elements.length; i++) {
                result = '<u>'; //prototyping
                string = this.elements[i].textContent;
                for (s in string) {
                    if (aInb(string[s], this.options.noUnderline)) {
                        result += '</u>' + string[s] + '<u>';
                    }
                    else {
                        result += string[s];
                    }
                }
                result += '</u>';
                this.elements[i].innerHTML = result;
            }
            return this;
        }
    }
})(window, document);
