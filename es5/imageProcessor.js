'use strict';

System.register(['eventHandler.js', 'fileHandler.js'], function (_export, _context) {
    "use strict";

    var eventHandler, fileHandler, defaultConfig, myConfig, init, handleInputFiles, hanadleDroppedFile, stop;
    return {
        setters: [function (_eventHandlerJs) {
            eventHandler = _eventHandlerJs;
        }, function (_fileHandlerJs) {
            fileHandler = _fileHandlerJs;
        }],
        execute: function () {
            _export('defaultConfig', defaultConfig = {
                allowedFilesType: /\.(jpe?g|png|gif)$/i,
                thHeight: 100,
                thWidth: 100,
                inputImg: ".inputImg",
                dropBox: ".dropbox"
            });

            _export('defaultConfig', defaultConfig);

            _export('myConfig', myConfig = defaultConfig);

            _export('myConfig', myConfig);

            _export('init', init = function init(config) {

                var dropBox = document.querySelector(myConfig.dropBox);
                var inputImg = document.querySelector(myConfig.inputImg);

                eventHandler.atachEvent(inputImg, "change", handleInputFiles);
                eventHandler.atachEvent(dropBox, "drop", hanadleDroppedFile);
                eventHandler.atachEvent(dropBox, "dragenter", stop);
                eventHandler.atachEvent(dropBox, "dragover", stop);
            });

            _export('init', init);

            handleInputFiles = function handleInputFiles(e) {
                var files = e.target.files;
                var type = defaultConfig.allowedFilesType;
                var x = fileHandler.fileTest(files, type);;
                if (fileHandler.fileTest(files, type)) {
                    fileHandler.readFile(files);
                }
            };

            hanadleDroppedFile = function hanadleDroppedFile(event) {
                event.preventDefault();
                var dt = event.dataTransfer;
                var files = dt.files;
                var type = defaultConfig.allowedFilesType;
                if (fileHandler.fileTest(files, type)) {
                    fileHandler.readFile(files);
                }
            };

            stop = function stop(e) {
                e.stopPropagation();
                e.preventDefault();
            };
        }
    };
});