(()=>{"use strict";const t={LAT:{A:[12,12,7,0,0,0],B:[12,0,7,0,12,12],C:[0,12,7,12,12,0],D:[12,0,7,0,12,0],E:[12,0,7,0,0,0],F:[12,0,7,12,12,0],G:[0,12,7,0,12,12],H:[0,0,7,12,0,12],I:[0,12,7,12,0,0],J:[12,12,7,0,12,0],K:[12,12,7,12,12,0],L:[0,12,7,0,0,12],M:[0,0,7,12,12,12],N:[0,0,7,12,12,0],O:[0,0,7,0,12,12],P:[0,12,7,12,0,12],Q:[12,12,7,12,0,12],R:[0,12,7,0,12,0],S:[12,0,7,12,0,0],T:[0,0,7,0,0,12],U:[12,12,7,12,0,0],V:[0,12,7,12,12,12],W:[12,12,7,0,0,12],X:[12,0,7,12,12,12],Y:[12,0,7,12,0,12],Z:[12,0,7,0,0,12]},DIG:{"-":[12,12,7,0,0,0],"?":[12,0,7,0,12,12],":":[0,12,7,12,12,0],3:[12,0,7,0,0,0],Э:[12,0,7,12,12,0],Ш:[0,12,7,0,12,12],Щ:[0,0,7,12,0,12],8:[0,12,7,12,0,0],Ю:[12,12,7,0,12,0],"(":[12,12,7,12,12,0],")":[0,12,7,0,0,12],".":[0,0,7,12,12,12],",":[0,0,7,12,12,0],9:[0,0,7,0,12,12],0:[0,12,7,12,0,12],1:[12,12,7,12,0,12],4:[0,12,7,0,12,0],"'":[12,0,7,12,0,0],5:[0,0,7,0,0,12],7:[12,12,7,12,0,0],"=":[0,12,7,12,12,12],2:[12,12,7,0,0,12],"/":[12,0,7,12,12,12],6:[12,0,7,12,0,12],"+":[12,0,7,0,0,12]},SPE:{"\r":[0,0,7,0,12,0],"\n":[0,12,7,0,0,0],LAT:[12,12,7,12,12,12],DIG:[12,12,7,0,12,12]," ":[12,0,7,0,0,0],RUS:[0,0,7,0,0,0]},RUS:{А:[12,12,7,0,0,0],Б:[12,0,7,0,12,12],Ц:[0,12,7,12,12,0],Д:[12,0,7,0,12,0],Е:[12,0,7,0,0,0],Ф:[12,0,7,12,12,0],Г:[0,12,7,0,12,12],Х:[0,0,7,12,0,12],И:[0,12,7,12,0,0],Й:[12,12,7,0,12,0],К:[12,12,7,12,12,0],Л:[0,12,7,0,0,12],М:[0,0,7,12,12,12],Н:[0,0,7,12,12,0],О:[0,0,7,0,12,12],П:[0,12,7,12,0,12],Я:[12,12,7,12,0,12],Р:[0,12,7,0,12,0],С:[12,0,7,12,0,0],Т:[0,0,7,0,0,12],У:[12,12,7,12,0,0],Ж:[0,12,7,12,12,12],В:[12,12,7,0,0,12],Ь:[12,0,7,12,12,12],Ы:[12,0,7,12,0,12],З:[12,0,7,0,0,12]},REPLACE:{Ч:4,Ъ:"",Ё:"Е"}};var n=[80,110,145,180,210,240],e=["RUS","LAT","DIG","SPE"];const r=function(n){var r=0,o=1,a=function n(a,i){if(a>5)throw new Error(i);if(!t[e[a%4]].hasOwnProperty(i))return n(a+1,i);" "!==i&&"\r"!==i&&"\n"!==i&&a%4!==r&&(o+=1,r=a%4)};return n.forEach((function(t){a(r,t),o+=1})),o};var o=document.getElementById("mtk-coder"),a=(document.getElementById("mtk-action"),document.getElementById("download"));const i=function(r,o){var a=0,i=0,c=function(e){t.SPE["".concat(e)].map((function(t,e){o.beginPath(),o.fillStyle="#FFFFFF",o.arc(50+40*i,n[e],t,0,2*Math.PI),o.fill()})),i+=1};c("RUS");var u=function n(r,o){return t[e[r%4]].hasOwnProperty(o)?" "===o||"\r"===o||"\n"===o?(c(o),"skip"):(r%4!==a&&c(e[r%4]),a=r%4,t[e[r%4]]):n(r+1,o)};r.forEach((function(t){var e=u(a,t);"skip"!==e&&(function(t,e,r,o){o[t].map((function(t,o){r.beginPath(),r.fillStyle="#FFFFFF",r.arc(50+40*e,n[o],t,0,2*Math.PI),r.fill()}))}(t,i,o,e),i+=1)}))};var c;function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}c=window.attachEvent?function(t,n,e){t.attachEvent("on"+n,e)}:function(t,n,e){t.addEventListener(n,e,!1)},document.addEventListener("DOMContentLoaded",(function(){!function(n){n.addEventListener("input",(function(){n.style.backgroundColor="transparent";var e,o=document.getElementById("mtk-draw"),c=(e=n.value.toUpperCase(),function(t){if(Array.isArray(t))return u(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n){return t.REPLACE[n]?t.REPLACE[n]:n}));try{var l=function(t,n){var e=n.getContext("2d");return n.width=40*t+70,n.height=300,e.fillStyle="rgb(231, 212, 170)",e.fillRect(25,50,40*t+20,220),e}(r(c),o);i(c,l),function(t,n){var e=n.toDataURL(),r=document.createElement("a");r.download="image.png",r.href=e,r.textContent="Скачать PNG",t.innerHTML="",t.appendChild(r)}(a,o)}catch(t){n.value=n.value.slice(0,-1),n.style.backgroundColor="#ff4b4b"}}))}(o),function(t){function n(){t.style.height="auto",t.style.height=t.scrollHeight+"px"}function e(){window.setTimeout(n,0)}c(t,"change",n),c(t,"cut",e),c(t,"paste",e),c(t,"drop",e),c(t,"keydown",e),t.focus(),t.select(),n()}(o)}))})();