import './index.less';
import {
    textArea,
    button,
    downloadImg,
    canvas
} from './dom-selectors';
import drawColl from './drawColl';
import drawFeild from './drawFeild';
import createDownloadButton from './createDownloadButton';

function init() {
    const onInput = () => {
        const ctx = drawFeild(textArea.value.length, canvas);
        [...textArea.value.toUpperCase()].forEach((item, index) => {
            drawColl(item, index, canvas, ctx)
        });
        createDownloadButton(downloadImg, canvas);
    }
    button.addEventListener('click', onInput);
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)
