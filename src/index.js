import './index.less';
import {
    textArea,
    button,
    downloadImg
} from './dom-selectors';
import drawFeild from './drawFeild';
import createDownloadButton from './createDownloadButton';
import createUpdateButton from './createUpdateButton';
import drawColls from './drawColls';
import countColls from './countColls';

function init() {
    const onInput = () => {
        const canvas = document.getElementById(`mtk-draw`);
        try {
            const collsCount = countColls(textArea.value.toUpperCase());
            const ctx = drawFeild(collsCount, canvas);
            drawColls(textArea.value.toUpperCase(), ctx);
            createDownloadButton(downloadImg, canvas);
        } catch (error) {
            let h2 = document.createElement('h2');
            h2.id = 'alert';
            h2.innerHTML = `Cимвол "${error.toString().split(' ')[1]}" не поддерживается кодировкой МТК-2!`;
            canvas.parentNode.replaceChild(h2, canvas);
            createUpdateButton(downloadImg);
        }
    }
    button.addEventListener('click', onInput);
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)
