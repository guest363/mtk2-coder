import './index.less';
/*
Ограничить максимальную длину символов
Добавить оставшийся алфавит
Учесть смену регистра 
Разбить на модули
 */
const textArea = document.getElementById("mtk-coder");
const button = document.getElementById("mtk-action");
const about = document.getElementById("about");
const WIDTH = window.innerWidth - (window.innerWidth * 0.1);
about.textContent = `Максимум ${Math.round(WIDTH / 50)} с. , зависит от ширины устройства на котором открыт сайт. На выходе получается картинка, которую можно скачать.`;
let canvas, ctx;
const ALFABET = {
    'А': [12, 12, 7, 0, 0, 0],
    'Б': [12, 0, 7, 0, 12, 12],
    'Ц': [0, 12, 7, 12, 12, 0],
    'Д': [12, 0, 7, 0, 12, 0],
    'Е': [12, 0, 7, 0, 0, 0],
    'Ф': [12, 0, 7, 12, 12, 0],
    'Г': [0, 12, 7, 0, 12, 12],
    'Х': [0, 0, 7, 12, 0, 12],
    'И': [0, 12, 7, 12, 0, 0],
    'Й': [12, 12, 7, 0, 12, 0],
    'К': [12, 12, 7, 12, 12, 0],
    'Л': [0, 12, 7, 0, 0, 12],
    'М': [0, 0, 7, 12, 12, 12],
    'Н': [0, 0, 7, 12, 12, 0],
    'О': [0, 0, 7, 0, 12, 12],
    'П': [0, 12, 7, 12, 0, 12],
    'Я': [12, 12, 7, 12, 0, 12],
    'Р': [0, 12, 7, 0, 12, 0],
    'С': [12, 0, 7, 12, 0, 0],
    'Т': [0, 0, 7, 0, 0, 12],
    'У': [12, 12, 7, 12, 0, 0],
    'Ж': [0, 12, 7, 12, 12, 12],
    'В': [12, 12, 7, 0, 0, 12],
    'Ь': [12, 0, 7, 12, 12, 12],
    'Ы': [12, 0, 7, 12, 0, 12],
    'З': [12, 0, 7, 0, 0, 12],
};
const ROWS = [80, 110, 145, 180, 210, 240];
const drawColl = (type, orderNumber) => {
    ALFABET[type].map((item, index) => {
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.arc(50 + (40 * orderNumber), ROWS[index], item, 0, 2 * Math.PI);
        ctx.fill();
    });
};
function init() {
    canvas = document.getElementById(`mtk-draw`);
    const drawFeild = count => {
        ctx = canvas.getContext('2d');
        canvas.width = WIDTH;
        canvas.height = 300;
        ctx.fillStyle = "rgb(231, 212, 170)";
        const feild = ctx.fillRect(25, 50, count * 40 + 20, 220);
    }


    const onInput = item => {
        console.log(textArea.value.length)
        drawFeild(textArea.value.length);
        [...textArea.value.toUpperCase()].forEach((item, index) => {
            drawColl(item, index)
        });
        var url = canvas.toDataURL();

        var a = document.createElement('a');
        a.download = 'image.png';
        a.href = url;
        a.textContent = 'Скачать PNG';
        document.body.appendChild(a);
    }

    button.addEventListener('click', onInput);

}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)
