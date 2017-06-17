import * as eventHandler from 'eventHandler.js';
import * as fileHandler from 'fileHandler.js';

export const defaultConfig = {
    allowedFilesType: /\.(jpe?g|png|gif)$/i,
    thHeight: 100,
    thWidth: 100,
    inputImg: ".inputImg",
    dropBox: ".dropbox"
};
//TODO change config
export const myConfig = defaultConfig;

export const init = (config) => {

    let dropBox = document.querySelector(myConfig.dropBox);
    let inputImg = document.querySelector(myConfig.inputImg);

    eventHandler.atachEvent(inputImg, "change", handleInputFiles);
    eventHandler.atachEvent(dropBox, "drop", hanadleDroppedFile);
    eventHandler.atachEvent(dropBox, "dragenter", stop);
    eventHandler.atachEvent(dropBox, "dragover", stop);
}

const handleInputFiles = (e) => {
    let files = e.target.files;
    let type = defaultConfig.allowedFilesType;
    let x = fileHandler.fileTest(files, type);;
    if (fileHandler.fileTest(files, type)) {
        fileHandler.readFile(files);
    }
}

const hanadleDroppedFile = (event) => {
    event.preventDefault();
    let dt = event.dataTransfer;
    let files = dt.files;
    let type = defaultConfig.allowedFilesType;
    if (fileHandler.fileTest(files, type)) {
        fileHandler.readFile(files);
    }
}

const stop = (e) => {
    e.stopPropagation();
    e.preventDefault();
}