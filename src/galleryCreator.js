import { myConfig } from 'imageProcessor.js';

const stop = (event) => {
    event.stopPropagatioon();
    event.preventDefault();
}

export const createImage = (imgSrc) => {
    let img = new Image();
    let gallery = document.getElementById("preview");
    let canvas = document.createElement('canvas');
    let canvasUrl = document.createElement('a');
    let ctx = canvas.getContext('2d');
    img.onload = () => {
        canvas.width = 160;
        canvas.height = 100;
        //canvasUrl.setAttribute("href", img.src);
        //canvasUrl.setAttribute("target", "_blank");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        gallery.appendChild(canvas);
    }
    img.src = imgSrc;
}





