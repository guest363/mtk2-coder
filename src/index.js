/* @TODO
Выбрасывать ошибку если символа нет в алфавитах */
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
        try {
            const collsCount = countColls(textArea.value.toUpperCase());
            const ctx = drawFeild(collsCount, canvas);
            drawColls(textArea.value.toUpperCase(), ctx);
            createDownloadButton(downloadImg, canvas);
        } catch (error) {
            let h2 = document.createElement('h2');
            h2.innerHTML = `Cимвол "${error.toString().split(' ')[1]}" не поддерживается кодировкой МТК-2!
             <br> Для новой попытке обновите страницу.`;
            canvas.parentNode.replaceChild(h2, canvas);
            console.log(error)
        }
    }
    button.addEventListener('click', onInput);
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)
