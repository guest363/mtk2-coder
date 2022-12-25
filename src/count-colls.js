import ALFABETS from "./alphabets";
import { alfabetIter } from "./constants";
/**
 * Считает сколько нужно зарезервировать место, какой длины создать canvas,
 * с учетом специальных символок, которых нет явно в введенном тексте
 * @param {String} msg введенное сообщение
 * @returns {Number} число столбцов
 */
export default (msg) => {
  let currentAlfabet_mutable = 0;
  let drawPosition = 1;
  const selectAlfabet = (position, item) => {
    if (position > 5) {
      throw new Error(item);
    }
    if (ALFABETS[alfabetIter[position % 4]].hasOwnProperty(item)) {
      if (item === " " || item === "\r" || item === "\n") {
        return;
      } else if (position % 4 !== currentAlfabet_mutable) {
        drawPosition = drawPosition + 1;
        currentAlfabet_mutable = position % 4;
      }
      return;
    }
    return selectAlfabet(position + 1, item);
  };

  msg.forEach((item) => {
    selectAlfabet(currentAlfabet_mutable, item);
    drawPosition = drawPosition + 1;
  });
  return drawPosition;
};
