/**
 * @description Рисует один символ на перфоленте
 */
import { ROWS } from "./constants";
export const drawColumns = (type, orderNumber, ctx, alphabet) => {
  alphabet[type].map((item, index) => {
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.arc(50 + 40 * orderNumber, ROWS[index], item, 0, 2 * Math.PI);
    ctx.fill();
  });
};
