// Функция обертка вызывающая переданную ей функцию не чаще чем передынные ей время в мс
export default function (func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    /* Обертка которая возвращается при вызове функции. 
       Именно ее мы и будем пытаться вызывать */
    function wrapper(...args) {
        if (isThrottled) {
            savedArgs = args;
            savedThis = this;
            return;
        }

        /* Вызвать переданную функцию вместе с сохраненными аргументами */
        func.apply(this, args);

        isThrottled = true;

        /* По просшествии заданного промежутка запустить функцию */
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    };
    return wrapper;
};