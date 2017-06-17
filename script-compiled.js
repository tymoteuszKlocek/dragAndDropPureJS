


const stop = function stop(event) {
    event.stopPropagatioon();
    event.preventDefault();
};

const createImg = function createImg(imgSrc) {};

export function handleDroppedFile(event) {}

export function handleInputFile(event) {}


(function () {
    "use strict";

    var confObj = {
        thWidth: 150,
        thHeight: 150,
        dropbox: '.dropbox',
        inputImg: '.inputImg',
        allowedFilesType: /^image\//
    };
    //imageProcessor.init(confObj);

})();
import { eventHandler } from './eventHandler.js';

let defaultConfig = {
    allowedFiles: /\.(jpe?g|png|gif)$/i,
    thumbnailHight: 100,
    thumbnailWidth: 100,
    inputImg: '.inputImg',
    dropBox: '.dropBox'
};

export function init(config) {
    let myConfig = config || defaultConfig;
    let dropBox = document.querySelector(myConfig.dropBox);
    let inputImg = document.querySelector(myConfig.inputImg);
    console.log('yes');
    //eventHandler.atachEvent()
    //eventHandler.atachEvent()
}
var imageProcessor = function () {

    "use strict";

    var defaultConfig = {
        allowedFilesType: /\.(jpe?g|png|gif)$/i,
        thHeight: 100,
        thWidth: 100,
        inputImg: ".inputImg",
        dropbox: ".dropbox"
    };

    function init(config) {
        var myConfig = config || {},
            inputimgParam = myConfig.inputImg || defaultConfig.inputImg,
            dropboxParam = myConfig.dropbox || defaultConfig.dropbox,
            allowedFilesType = myConfig.allowedFilesType || defaultConfig.allowedFilesType,
            thHeight = myConfig.thHeight || defaultConfig.thHeight,
            thWidth = myConfig.thWidth || defaultConfig.thWidth,
            dropBox = document.querySelector(dropboxParam),
            inputImg = document.querySelector(inputimgParam);

        eventHandlerModule.atachEvent(inputImg, "change", handleMyFiles);
        eventHandlerModule.atachEvent(dropBox, "drop", hanadleDroppedFile);
        eventHandlerModule.atachEvent(dropBox, "dragenter", stop);
        eventHandlerModule.atachEvent(dropBox, "dragover", stop);

        function hanadleDroppedFile(e) {
            stop(e);
            var dt = e.dataTransfer;
            consol.log(dt);
            var files = dt.files;
            if (fileHandleModule.testFile(files, config.allowedFilesType) === true) {
                fileHandleModule.handleFiles(files, processImage);
            }
        }

        function handleMyFiles() {
            var files = this.files;
            if (fileHandleModule.testFile(files, allowedFilesType) === true) {
                fileHandleModule.handleFiles(files, processImage);
            }
        }

        function stop(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        function processImage(imageSrc) {
            var img = new Image();
            img.src = imageSrc;
            var thumbnail = galleryModule.makeThumbnail(img, thHeight, thWidth),
                preview = document.querySelector(".preview");

            preview.appendChild(thumbnail);
        }
    }
    return {
        init: init,
        defaultConfig: defaultConfig
    };
}();

var eventHandlerModule = function () {

    "use strict";

    function atachEvent(element, event, func) {
        element.addEventListener(event, func);
    }
    return {
        atachEvent: atachEvent
    };
}();

var fileHandleModule = function () {

    "use strict";

    function testFile(files, allowedType) {
        var file;
        for (var i = 0; i < files.length; i++) {
            file = files[i];
            if (!allowedType.test(file.type)) {
                alert("zapodałeś zły plik!");
                continue;
            }
        }
        return true;
    }

    function handleFiles(files, callback) {
        var loadedFile;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = function (e) {
                loadedFile = e.target.result;
                callback(loadedFile);
            };
            reader.readAsDataURL(file);
        }
    }

    return {
        handleFiles: handleFiles,
        testFile: testFile
    };
}();

var galleryModule = function () {

    "use strict";

    function makeThumbnail(img, thHeight, thWidth) {
        var canvas = document.createElement("canvas"),
            canvasUrl = document.createElement("a"),
            context = canvas.getContext("2d");

        canvas.width = thWidth;
        canvas.height = thHeight;
        canvasUrl.setAttribute("href", img.src);
        canvasUrl.setAttribute("target", "_blank");
        canvasUrl.appendChild(canvas);
        context.drawImage(img, canvas.width, canvas.height);
        return canvasUrl;
    }

    return {
        makeThumbnail: makeThumbnail
    };
}();
