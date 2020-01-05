import drawColl from "./drawColl";
import ALFABETS from "./alfabets";
import { ROWS } from './constants';
import {
    canvas
} from './dom-selectors';
export default (msg, ctx) => {
    const alfabetIter = ['RUS', "LAT", "DIG", "SPE"];
    let currentAlfabet_mutable = 0;
    let drawPosition = 0;
    let stopFlag = false;
    const drawSpec = spec => {
        ALFABETS.SPE[`${spec}`].map((item, index) => {
            ctx.beginPath();
            ctx.fillStyle = "#FFFFFF";
            ctx.arc(50 + (40 * drawPosition), ROWS[index], item, 0, 2 * Math.PI);
            ctx.fill();
        });
        drawPosition = drawPosition + 1;
    };
    /* Сделать раскладку RUS по умолчанию */
    drawSpec('RUS');
    const selectAlfabet = (position, item) => {
        console.log(position)
        if (position > 5) return 'throw';
        if (ALFABETS[alfabetIter[position % 4]].hasOwnProperty(item)) {
            if (item === ' ' || item === '\r' || item === '\n') {
                drawSpec(item);
                return 'skip'
            }
            else if (position % 4 !== currentAlfabet_mutable) {
                drawSpec(alfabetIter[position % 4]);
            }
            currentAlfabet_mutable = position % 4;
            return ALFABETS[alfabetIter[position % 4]];
        }
        return selectAlfabet(position + 1, item);
    };

    [...msg].forEach(item => {
        if(stopFlag) return;
        const alfabet = selectAlfabet(currentAlfabet_mutable, item);
        if (alfabet === 'throw') {
            stopFlag = true;
            canvas.innerHTML = `<h1>Cимвол "${item}" не поддерживается кодировкой МТК-2!</h1>`;
            return;
        }
        if (alfabet !== 'skip') {
            drawColl(item, drawPosition, ctx, alfabet);
            drawPosition = drawPosition + 1;
        }
    });
}