"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var atachEvent;
    return {
        setters: [],
        execute: function () {
            _export("atachEvent", atachEvent = function atachEvent(element, event, func) {
                element.addEventListener(event, func);
            });

            _export("atachEvent", atachEvent);
        }
    };
});