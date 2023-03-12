import ALPHABETS from "./alphabets";
import { alphabetIter } from "./constants";
/**
 * Считает сколько нужно зарезервировать место, какой длины создать canvas,
 * с учетом специальных символок, которых нет явно в введенном тексте
 * @param {String} msg введенное сообщение
 * @returns {Number} число столбцов
 */
export default (msg) => {
  let currentAlphabet_mutable = 0;
  let drawPosition = 1;
  const selectAlphabet = (position, item) => {
    if (position > 5) {
      throw new Error(item);
    }
    if (ALPHABETS[alphabetIter[position % 4]].hasOwnProperty(item)) {
      if (item === " " || item === "\r" || item === "\n") {
        return;
      } else if (position % 4 !== currentAlphabet_mutable) {
        drawPosition = drawPosition + 1;
        currentAlphabet_mutable = position % 4;
      }
      return;
    }
    return selectAlphabet(position + 1, item);
  };

  msg.forEach((item) => {
    selectAlphabet(currentAlphabet_mutable, item);
    drawPosition = drawPosition + 1;
  });
  return drawPosition;
};
