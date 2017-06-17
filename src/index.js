import * as imageProcessor from 'imageProcessor.js';

let confObj = {
    thWidth: 150,
    thHeight: 150,
    dropbox: '.dropbox',
    inputImg: '.inputImg',
    allowedFilesType: /\.(jpe?g|png|gif)$/i,
};

imageProcessor.init(confObj);

