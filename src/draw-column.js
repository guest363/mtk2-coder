import ALPHABETS from "./alphabets";
import { alphabetIter, ROWS } from "./constants";
import { drawSymbol } from "./draw-symbol";

/* A function that draws a message on a canvas. */
export default (msg, ctx) => {
  let currentAlphabet_mutable = 0;
  let drawPosition = 0;
  const drawSpec = (spec) => {
    ALPHABETS.SPE[`${spec}`].map((item, index) => {
      ctx.beginPath();
      ctx.fillStyle = "#FFFFFF";
      ctx.arc(50 + 40 * drawPosition, ROWS[index], item, 0, 2 * Math.PI);
      ctx.fill();
    });
    drawPosition = drawPosition + 1;
  };
  /* Сделать раскладку RUS по умолчанию */
  drawSpec("RUS");

  const selectAlphabet = (position, item) => {
    if (ALPHABETS[alphabetIter[position % 4]].hasOwnProperty(item)) {
      if (item === " " || item === "\r" || item === "\n") {
        drawSpec(item);
        return "skip";
      } else if (position % 4 !== currentAlphabet_mutable) {
        drawSpec(alphabetIter[position % 4]);
      }
      currentAlphabet_mutable = position % 4;
      return ALPHABETS[alphabetIter[position % 4]];
    }
    return selectAlphabet(position + 1, item);
  };

  msg.forEach((item) => {
    const alphabet = selectAlphabet(currentAlphabet_mutable, item);
    if (alphabet !== "skip") {
      drawSymbol(item, drawPosition, ctx, alphabet);
      drawPosition = drawPosition + 1;
    }
  });
};
