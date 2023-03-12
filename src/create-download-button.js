/**
 * Создает ссылку для скачивания картинки.
 * Вся суть в canvas.toDataURL();
 * @param {Element} target обертка канваса
 * @param {Element} canvas
 */
export default (target, canvas) => {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.download = "image.png";
  a.href = url;
  a.textContent = "Скачать PNG";
  target.innerHTML = "";
  target.appendChild(a);
};
