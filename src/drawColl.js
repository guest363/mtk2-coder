import ALFABETS from "./alfabets";
import ALFABET_SPECIAL from './alfabets/algabet_special';
import { WIDTH, ROWS } from './constants';
export default (type, realOrderNumber, canvas, ctx) => {
    let orderNumber = realOrderNumber;
    const alfabetIter = ['RUS', "LAT", "DIG", "SPE"];
    let currentAlfabet = 0;
    const drawSpec = spec => {
        console.log(ALFABETS.SPE[spec]);
        ALFABETS.SPE[spec].map((item, index) => {
            ctx.beginPath();
            ctx.fillStyle = "#FFFFFF";
            ctx.arc(50 + (40 * orderNumber), ROWS[index], item, 0, 2 * Math.PI);
            ctx.fill();
        });
        orderNumber = orderNumber + 1;
    }
    const selectAlfabet = position => {
        console.log(ALFABETS[alfabetIter[position % 4]);
        if (ALFABETS[alfabetIter[position % 4]].hasOwnProperty(type)) {
            if (position !== currentAlfabet) {
                drawSpec(alfabetIter[position]);
                currentAlfabet = position;
                console.log(currentAlfabet);
            }
            return ALFABETS[alfabetIter[position]];
        }
        return selectAlfabet(position + 1);
    };

    const alfabet = selectAlfabet(currentAlfabet);

    alfabet[type].map((item, index) => {
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.arc(50 + (40 * orderNumber), ROWS[index], item, 0, 2 * Math.PI);
        ctx.fill();
    })

    /* ALFABETS[type].map((item, index) => {
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.arc(50 + (40 * orderNumber), ROWS[index], item, 0, 2 * Math.PI);
        ctx.fill();
    }); */
};