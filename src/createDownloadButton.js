export default (target, canvas) => {
    let url = canvas.toDataURL();
    let a = document.createElement('a');
    a.download = 'image.png';
    a.href = url;
    a.textContent = 'Скачать PNG';
    target.innerHTML = '';
    target.appendChild(a);
}