import { download } from './dep/dist/util/file.js';
import { Numberline } from './src/plugin-number-line.js';
import Circle from './dep/dist/elements/svg/circle.js';
import Line from './dep/dist/elements/svg/line.js';

window.onload = function() {
    let newSvgElement = new Numberline();
    newSvgElement.main();
}

// add a save function to the window to save the current interactive
window.save = function() {
    let interactives = document.getElementsByClassName('interactive');
    for( let i = 0; i < interactives.length; i++ ) {
        let name = interactives[i].parentElement.id;
        let id = interactives[i].id;
        download(id, `${name}.svg`);
    }
}

