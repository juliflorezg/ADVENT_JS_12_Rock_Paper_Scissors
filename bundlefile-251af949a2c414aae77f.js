!function(){var e={388:function(){if("/"===location.pathname){var e=document.getElementById("rock");document.querySelector("ul").addEventListener("click",(function(e){(e.target.matches("button > img")||e.target.matches("button"))&&(console.log(e.target),console.log(e.target.closest("button")),console.log(e.target.closest("button").dataset.index),function(e){var t=Math.floor(3*Math.random());console.log({userChoice:e}),console.log({PCChoice:t}),location.assign("/winner.html?user=".concat(e,"&computer=").concat(t))}(e.target.closest("button").dataset.index))})),console.log(e)}else if("/winner.html"===location.pathname){var t=function(e){["its-tie","you-win","computer-wins"].filter((function(t){return t!==e})).forEach((function(e){return document.body.classList.remove(e)})),document.body.classList.add(e)},s=function(e,t){var s=document.querySelector(".your-pick > img"),o=document.querySelector(".computer-pick > img");switch(e){case"0":s.setAttribute("src","./assets/rock.png"),s.setAttribute("alt","Rock"),s.classList.remove("hide");break;case"1":s.setAttribute("src","./assets/paper.png"),s.setAttribute("alt","Paper"),s.classList.remove("hide");break;case"2":s.setAttribute("src","./assets/scissors.png"),s.setAttribute("alt","Scissors"),s.classList.remove("hide")}switch(t){case"0":o.setAttribute("src","./assets/rock.png"),o.setAttribute("alt","Rock"),o.classList.remove("hide");break;case"1":o.setAttribute("src","./assets/paper.png"),o.setAttribute("alt","Paper"),o.classList.remove("hide");break;case"2":o.setAttribute("src","./assets/scissors.png"),o.setAttribute("alt","Scissors"),o.classList.remove("hide")}},o=document.querySelector(".play-again"),c=new URLSearchParams(document.location.search),r=c.get("user"),n=c.get("computer");switch(r){case"0":switch(n){case"0":console.log("rock vs rock"),console.log("TIE"),t("its-tie"),s(r,n);break;case"1":console.log("rock vs paper"),console.log("PC WINS"),t("computer-wins"),s(r,n);break;case"2":console.log("rock vs scissors"),console.log("USER WINS"),t("you-win"),s(r,n)}break;case"1":switch(n){case"0":console.log("paper vs rock"),console.log("USER WINS"),t("you-win"),s(r,n);break;case"1":console.log("paper vs paper"),console.log("TIE"),t("its-tie"),s(r,n);break;case"2":console.log("paper vs scissors"),console.log("PC WINS"),t("computer-wins"),s(r,n)}break;case"2":switch(n){case"0":console.log("scissors vs rock"),console.log("PC WINS"),t("computer-wins"),s(r,n);break;case"1":console.log("scissors vs paper"),console.log("USER WINS"),t("you-win"),s(r,n);break;case"2":console.log("scissors vs scissors"),console.log("TIE"),t("its-tie"),s(r,n)}}var a=location.pathname;console.log(a),console.log(o),console.log(r),console.log(n),o.addEventListener("click",(function(){location.assign("/")}))}}},t={};function s(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}(),function(){"use strict";s.p,s.p,s.p,s.p,s.p,s(388)}()}();
//# sourceMappingURL=bundlefile-251af949a2c414aae77f.js.map