!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){},function(t,n,e){"use strict";e.r(n);e(0);var r=document.getElementById("mtk-coder"),o=document.getElementById("mtk-action"),i=document.getElementById("mtk-draw"),a=document.getElementById("download"),u=function(t,n){var e=n.getContext("2d");return n.width=40*t+70,n.height=300,e.fillStyle="rgb(231, 212, 170)",e.fillRect(25,50,40*t+20,220),e},c=function(t,n){var e=n.toDataURL(),r=document.createElement("a");r.download="image.png",r.href=e,r.textContent="Скачать PNG",t.innerHTML="",t.appendChild(r)},f=(window.innerWidth,window.innerWidth,[80,110,145,180,210,240]),l={LAT:{A:[12,12,7,0,0,0],B:[12,0,7,0,12,12],C:[0,12,7,12,12,0],D:[12,0,7,0,12,0],E:[12,0,7,0,0,0],F:[12,0,7,12,12,0],G:[0,12,7,0,12,12],H:[0,0,7,12,0,12],I:[0,12,7,12,0,0],J:[12,12,7,0,12,0],K:[12,12,7,12,12,0],L:[0,12,7,0,0,12],M:[0,0,7,12,12,12],N:[0,0,7,12,12,0],O:[0,0,7,0,12,12],P:[0,12,7,12,0,12],Q:[12,12,7,12,0,12],R:[0,12,7,0,12,0],S:[12,0,7,12,0,0],T:[0,0,7,0,0,12],U:[12,12,7,12,0,0],V:[0,12,7,12,12,12],W:[12,12,7,0,0,12],X:[12,0,7,12,12,12],Y:[12,0,7,12,0,12],Z:[12,0,7,0,0,12]},DIG:{"-":[12,12,7,0,0,0],"?":[12,0,7,0,12,12],":":[0,12,7,12,12,0],"":[12,0,7,0,12,0],3:[12,0,7,0,0,0],"Э":[12,0,7,12,12,0],"Ш":[0,12,7,0,12,12],"Щ":[0,0,7,12,0,12],8:[0,12,7,12,0,0],"Ю":[12,12,7,0,12,0],"(":[12,12,7,12,12,0],")":[0,12,7,0,0,12],".":[0,0,7,12,12,12],",":[0,0,7,12,12,0],9:[0,0,7,0,12,12],0:[0,12,7,12,0,12],1:[12,12,7,12,0,12],4:[0,12,7,0,12,0],"'":[12,0,7,12,0,0],5:[0,0,7,0,0,12],7:[12,12,7,12,0,0],"=":[0,12,7,12,12,12],2:[12,12,7,0,0,12],"/":[12,0,7,12,12,12],6:[12,0,7,12,0,12],"+":[12,0,7,0,0,12]},SPE:{"\r":[0,0,7,0,12,0],"\n":[0,12,7,0,0,0],LAT:[12,12,7,12,12,12],DIG:[12,12,7,0,12,12]," ":[12,0,7,0,0,0],RUS:[0,0,7,0,0,0]},RUS:{"А":[12,12,7,0,0,0],"Б":[12,0,7,0,12,12],"Ц":[0,12,7,12,12,0],"Д":[12,0,7,0,12,0],"Е":[12,0,7,0,0,0],"Ф":[12,0,7,12,12,0],"Г":[0,12,7,0,12,12],"Х":[0,0,7,12,0,12],"И":[0,12,7,12,0,0],"Й":[12,12,7,0,12,0],"К":[12,12,7,12,12,0],"Л":[0,12,7,0,0,12],"М":[0,0,7,12,12,12],"Н":[0,0,7,12,12,0],"О":[0,0,7,0,12,12],"П":[0,12,7,12,0,12],"Я":[12,12,7,12,0,12],"Р":[0,12,7,0,12,0],"С":[12,0,7,12,0,0],"Т":[0,0,7,0,0,12],"У":[12,12,7,12,0,0],"Ж":[0,12,7,12,12,12],"В":[12,12,7,0,0,12],"Ь":[12,0,7,12,12,12],"Ы":[12,0,7,12,0,12],"З":[12,0,7,0,0,12]}};function d(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(t,n){var e=["RUS","LAT","DIG","SPE"],r=0,o=0,a=!1,u=function(t){l.SPE["".concat(t)].map((function(t,e){n.beginPath(),n.fillStyle="#FFFFFF",n.arc(50+40*o,f[e],t,0,2*Math.PI),n.fill()})),o+=1};u("RUS");d(t).forEach((function(t){if(!a){var c=function t(n,o){return console.log(n),n>5?"throw":l[e[n%4]].hasOwnProperty(o)?" "===o||"\r"===o||"\n"===o?(u(o),"skip"):(n%4!==r&&u(e[n%4]),r=n%4,l[e[n%4]]):t(n+1,o)}(r,t);if("throw"===c)return a=!0,void(i.innerHTML='<h1>Cимвол "'.concat(t,'" не поддерживается кодировкой МТК-2!</h1>'));"skip"!==c&&(!function(t,n,e,r){r[t].map((function(t,r){e.beginPath(),e.fillStyle="#FFFFFF",e.arc(50+40*n,f[r],t,0,2*Math.PI),e.fill()}))}(t,o,n,c),o+=1)}}))};function y(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(t){var n=["RUS","LAT","DIG","SPE"],e=0,r=1;return y(t).forEach((function(t){!function t(o,i){return l[n[o%4]].hasOwnProperty(i)?" "===i||"\r"===i||"\n"===i?"skip":(o%4!==e&&(r+=1,e=o%4),""):t(o+1,i)}(e,t),r+=1})),r};document.addEventListener("DOMContentLoaded",(function(){o.addEventListener("click",(function(){var t=m(r.value.toUpperCase()),n=u(t,i);p(r.value.toUpperCase(),n),c(a,i)}))}))}]);