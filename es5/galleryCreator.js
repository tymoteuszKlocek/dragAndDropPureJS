'use strict';

System.register(['imageProcessor.js'], function (_export, _context) {
    "use strict";

    var myConfig, stop, createImage;
    return {
        setters: [function (_imageProcessorJs) {
            myConfig = _imageProcessorJs.myConfig;
        }],
        execute: function () {
            stop = function stop(event) {
                event.stopPropagatioon();
                event.preventDefault();
            };

            _export('createImage', createImage = function createImage(imgSrc) {
                var img = new Image();
                var gallery = document.getElementById("preview");
                var canvas = document.createElement('canvas');
                var canvasUrl = document.createElement('a');
                var ctx = canvas.getContext('2d');
                img.onload = function () {
                    canvas.width = 160;
                    canvas.height = 100;
                    //canvasUrl.setAttribute("href", img.src);
                    //canvasUrl.setAttribute("target", "_blank");
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    gallery.appendChild(canvas);
                };
                img.src = imgSrc;
            });

            _export('createImage', createImage);
        }
    };
});