import { ROWS } from "./constants";

/**
 * @description Рисует один символ на перфоленте
 */
export const drawSymbol = (type, orderNumber, ctx, alphabet) => {
  alphabet[type].map((item, index) => {
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(50 + 40 * orderNumber, ROWS[index], item, 0, 2 * Math.PI);
    ctx.fill();
  });
};
