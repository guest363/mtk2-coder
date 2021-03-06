import { textArea } from './dom-selectors';
/**
 * Создает кнопку для возврата страницы в исходное состояние
 * @param {Element} feild где создать кнопку
 * @param {Element} canvas 
*/
const update = feild => {
    feild.target.parentNode.removeChild(feild.target);
    textArea.value = '';
    let canvasNew = document.createElement('canvas');
    canvasNew.id = `mtk-draw`;
    canvasNew.style = `border:1px solid #c3c3c3;`;
    const h2 = document.getElementById("alert");
    h2.parentNode.replaceChild(canvasNew, h2);
}
export default (target) => {
    let button = document.createElement('button');
    button.textContent = 'Заново!';
    target.innerHTML = '';
    target.appendChild(button);
    button.addEventListener('click', update);
}