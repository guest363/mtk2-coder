import ALFABETS from "./alphabets";
import { alfabetIter, ROWS } from "./constants";
import drawColl from "./draw-coll";

/* A function that draws a message on a canvas. */
export default (msg, ctx) => {
  let currentAlfabet_mutable = 0;
  let drawPosition = 0;
  const drawSpec = (spec) => {
    ALFABETS.SPE[`${spec}`].map((item, index) => {
      ctx.beginPath();
      ctx.fillStyle = "#FFFFFF";
      ctx.arc(50 + 40 * drawPosition, ROWS[index], item, 0, 2 * Math.PI);
      ctx.fill();
    });
    drawPosition = drawPosition + 1;
  };
  /* Сделать раскладку RUS по умолчанию */
  drawSpec("RUS");

  const selectAlfabet = (position, item) => {
    if (ALFABETS[alfabetIter[position % 4]].hasOwnProperty(item)) {
      if (item === " " || item === "\r" || item === "\n") {
        drawSpec(item);
        return "skip";
      } else if (position % 4 !== currentAlfabet_mutable) {
        drawSpec(alfabetIter[position % 4]);
      }
      currentAlfabet_mutable = position % 4;
      return ALFABETS[alfabetIter[position % 4]];
    }
    return selectAlfabet(position + 1, item);
  };

  msg.forEach((item) => {
    const alfabet = selectAlfabet(currentAlfabet_mutable, item);
    if (alfabet !== "skip") {
      drawColl(item, drawPosition, ctx, alfabet);
      drawPosition = drawPosition + 1;
    }
  });
};
