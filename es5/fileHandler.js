"use strict";

System.register(["galleryCreator.js"], function (_export, _context) {
    "use strict";

    var galleryCreator, readFile, fileTest;
    return {
        setters: [function (_galleryCreatorJs) {
            galleryCreator = _galleryCreatorJs;
        }],
        execute: function () {
            _export("readFile", readFile = function readFile(files) {

                var loadedFile = void 0;
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    var fr = new FileReader();
                    fr.onload = function (event) {
                        loadedFile = event.target.result;
                        galleryCreator.createImage(loadedFile);
                    };
                    fr.readAsDataURL(file);
                }
            });

            _export("readFile", readFile);

            _export("fileTest", fileTest = function fileTest(files, type) {
                for (var i = 0; i < files.lenght; i++) {
                    var item = files[i];
                    if (!type.test(item.type)) {
                        alert("nieprawid�owy typ pliku");
                        continue;
                    }
                }
                return true;
            });

            _export("fileTest", fileTest);
        }
    };
});