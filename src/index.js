import ALPHABETS from "./alphabets";
import countColumns from "./count-columns";
import createDownloadButton from "./create-download-button";
import { downloadImg, textArea } from "./dom-selectors";
import drawColumns from "./draw-columns";
import drawField from "./draw-feild";
import "./index.less";
import { initObserve } from "./text-area-resize";

function init(textArea) {
  const onInput = () => {
    textArea.style.backgroundColor = "transparent";
    const canvas = document.getElementById(`mtk-draw`);
    // Заменить Ч, Ъ, Ё
    const textAreaSymbols = [...textArea.value.toUpperCase()].map((symbol) => {
      if (ALPHABETS.REPLACE[symbol]) return ALPHABETS.REPLACE[symbol];
      return symbol;
    });
    try {
      const columnCount = countColumns(textAreaSymbols);
      const ctx = drawField(columnCount, canvas);
      drawColumns(textAreaSymbols, ctx);
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
