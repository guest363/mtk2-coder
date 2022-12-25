import ALFABETS from "./alphabets";
import countColls from "./count-colls";
import createDownloadButton from "./create-download-button";
import { downloadImg, textArea } from "./dom-selectors";
import drawColls from "./draw-colls";
import drawFeild from "./draw-feild";
import "./index.less";
import { initObserve } from "./text-area-resize";

function init(textArea) {
  const onInput = () => {
    textArea.style.backgroundColor = "transparent";
    const canvas = document.getElementById(`mtk-draw`);
    // Заменить Ч, Ъ, Ё
    const textAreaSymbols = [...textArea.value.toUpperCase()].map((symbol) => {
      if (ALFABETS.REPLACE[symbol]) return ALFABETS.REPLACE[symbol];
      return symbol;
    });
    try {
      const collsCount = countColls(textAreaSymbols);
      const ctx = drawFeild(collsCount, canvas);
      drawColls(textAreaSymbols, ctx);
      createDownloadButton(downloadImg, canvas);
    } catch (error) {
      textArea.value = textArea.value.slice(0, -1);
      textArea.style.backgroundColor = "#ff4b4b";
    }
  };
  textArea.addEventListener("input", onInput);
}

// wait for the HTML to load
document.addEventListener("DOMContentLoaded", () => {
  init(textArea);
  initObserve(textArea);
});
