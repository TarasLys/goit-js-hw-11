!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return i.default(e)||u.default(e)||c.default(e)||l.default()};var i=s(o("kMC0W")),u=s(o("7AJDX")),l=s(o("8CtQK")),c=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}axios.defaults.headers.common["x-api-key"]="live_WNbTd4xBYEpWQg6tp8WGBnBLhHq5jjgtrklLPOrVOAwnfRgCRejAfalH4e9I5B6t",axios.defaults.baseURL="https://api.thecatapi.com/v1/";var d=document.querySelector(".breed-select"),f=document.querySelector(".cat-info"),p=document.querySelector(".loader"),y=document.querySelector(".error"),g=document.querySelector(".div-picture");function m(e){p.style.display=e}function b(e){f.style.display=e}m("none"),y.style.display="none",m("block"),axios.get("breeds").then((function(e){return e.data})).then((function(t){var n;m("none");var r=t.map((function(e){var t=document.createElement("option");return t.value=e.id,t.textContent=e.name,t}));(n=d).append.apply(n,e(a)(r)),new SlimSelect({select:".breed-select"})})).catch((function(){Notiflix.Notify.warning("❌ Oops! Something went wrong! Try reloading the page!",{})})).finally((function(){m("none")})),d.addEventListener("change",(function(e){var t;b("none"),m("block"),(t=e.target.value,axios.get("images/search?breed_ids=".concat(t)).then((function(e){return e.data[0]}))).then((function(e){m("none"),b("block"),g.innerHTML='\n    <img class="picture" src="'.concat(e.url,'" alt="').concat(e.breeds[0].name,'">'),f.innerHTML='\n      <h2 class="title">'.concat(e.breeds[0].name,'</h2>\n      <p class="text">').concat(e.breeds[0].description,'</p>\n      <p class="temp"><strong>Temperament:</strong> ').concat(e.breeds[0].temperament,"</p>")})).catch((function(){Notiflix.Notify.warning("❌ Oops! Something went wrong! Try reloading the page!",{})})).finally((function(){m("none")}))}))}();
//# sourceMappingURL=index.d7e62b1e.js.map
