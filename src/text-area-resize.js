let observe;

if (window.attachEvent) {
  observe = function (element, event, handler) {
    element.attachEvent("on" + event, handler);
  };
} else {
  observe = function (element, event, handler) {
    element.addEventListener(event, handler, false);
  };
}

export function initObserve(textArea) {
  function resize() {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  }
  /* 0-timeout to get the already changed text */
  function delayedResize() {
    window.setTimeout(resize, 0);
  }
  observe(textArea, "change", resize);
  observe(textArea, "cut", delayedResize);
  observe(textArea, "paste", delayedResize);
  observe(textArea, "drop", delayedResize);
  observe(textArea, "keydown", delayedResize);

  textArea.focus();
  textArea.select();
  resize();
}
