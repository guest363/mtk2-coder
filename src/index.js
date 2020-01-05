import './index.less';
import {
    textArea,
    button,
    downloadImg,
    canvas
} from './dom-selectors';
import drawFeild from './drawFeild';
import createDownloadButton from './createDownloadButton';
import drawColls from './drawColls';
import countColls from './countColls';

function init() {
    const onInput = () => {
        const collsCount = countColls(textArea.value.toUpperCase());
        const ctx = drawFeild(collsCount, canvas);
        drawColls(textArea.value.toUpperCase(), ctx);
        createDownloadButton(downloadImg, canvas);
    }
    button.addEventListener('click', onInput);
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)
