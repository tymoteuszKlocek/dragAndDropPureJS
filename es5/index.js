'use strict';

System.register(['imageProcessor.js'], function (_export, _context) {
    "use strict";

    var imageProcessor, confObj;
    return {
        setters: [function (_imageProcessorJs) {
            imageProcessor = _imageProcessorJs;
        }],
        execute: function () {
            confObj = {
                thWidth: 150,
                thHeight: 150,
                dropbox: '.dropbox',
                inputImg: '.inputImg',
                allowedFilesType: /\.(jpe?g|png|gif)$/i
            };


            imageProcessor.init(confObj);
        }
    };
});