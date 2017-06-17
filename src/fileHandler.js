import * as galleryCreator from 'galleryCreator.js';

export const readFile = (files) => {
    
    let loadedFile;
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let fr = new FileReader();
        fr.onload = (event) => {
            loadedFile = event.target.result;
            galleryCreator.createImage(loadedFile);
        };
        fr.readAsDataURL(file);
    }
}

export const fileTest = (files, type) => {
    for (let i = 0; i < files.lenght; i++) {
        let item = files[i];
        if (!type.test(item.type)) {
            alert("nieprawid³owy typ pliku");
            continue;
        }
    }
    return true;
}