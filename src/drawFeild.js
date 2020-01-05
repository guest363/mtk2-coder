export default (count, canvas) => {
    let ctx = canvas.getContext('2d');
    canvas.width = count * 40 + 70;
    canvas.height = 300;
    ctx.fillStyle = "rgb(231, 212, 170)";
    ctx.fillRect(25, 50, count * 40 + 20, 220);
    return ctx;
};