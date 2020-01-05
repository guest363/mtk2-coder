import ALFABETS from "./alfabets";
export default msg => {
    const alfabetIter = ['RUS', "LAT", "DIG", "SPE"];
    let currentAlfabet_mutable = 0;
    let drawPosition = 1;
    const selectAlfabet = (position, item) => {
        if (ALFABETS[alfabetIter[position % 4]].hasOwnProperty(item)) {
            if (item === ' ' || item === '\r' || item === '\n') {
                return 'skip'
            }
            else if (position % 4 !== currentAlfabet_mutable) {
                drawPosition = drawPosition + 1;
                currentAlfabet_mutable = position % 4;
            }
            return '';
        }
        return selectAlfabet(position + 1, item);
    };

    [...msg].forEach(item => {
        selectAlfabet(currentAlfabet_mutable, item);
        drawPosition = drawPosition + 1;
    });
    return drawPosition;
}