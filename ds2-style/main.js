(()=>{var e={517:()=>{document.querySelectorAll(".ds2c-accordion-switcher").forEach((function(e,t){e.toggleActive=function(t){Array.from(e.children[0].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[0].children[t].classList.add("ds2m-active"),Array.from(e.children[1].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[1].children[t].classList.add("ds2m-active"),Array.from(e.children[2].children[0].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[2].children[0].children[t].classList.add("ds2m-active")},Array.from(e.children[1].children).forEach((function(t,n){t.addEventListener("click",(function(){e.toggleActive(n)}))})),Array.from(e.children[0].children).forEach((function(t,n){t.addEventListener("click",(function(){e.toggleActive(n)}))})),e.toggleActive(0)}))},557:()=>{document.querySelectorAll(".ds2c-carousel").forEach((function(e,t){e.tsClasses=["ds2m-left-offscreen","ds2m-left","ds2m-center","ds2m-right","ds2m-right-offscreen"],e.activeNumber=0,e.itemCount=e.getElementsByClassName("ds2s-item").length,e.changeActive=function(t,n=!1){e.activeNumber=(t+n*e.activeNumber+e.itemCount)%e.itemCount;var c=Array.from(e.getElementsByClassName("ds2s-icon-box"));c.forEach((function(e,t){e.classList.remove("ds2m-active")})),c[e.activeNumber].classList.add("ds2m-active"),Array.from(e.getElementsByClassName("ds2s-item")).forEach((function(t,n){var c=(n-e.activeNumber)%e.itemCount;t.classList="ds2s-item";let i=c+2;i<0&&(i=0),i>=e.tsClasses.length&&(i=e.tsClasses.length-1),0==i&&0==n&&e.activeNumber==e.itemCount-1&&(i=3),4==i&&n==e.itemCount-1&&0==e.activeNumber&&(i=1),t.classList.add(e.tsClasses[i])}))},Array.from(e.getElementsByClassName("ds2s-icon-box")).forEach((function(t,n){t.addEventListener("click",(function(){e.changeActive(n)}))})),Array.from(e.getElementsByClassName("ds2s-item")).forEach((function(t,n){t.addEventListener("click",(function(){e.changeActive(n)}))})),e.getElementsByClassName("ds2s-left-control")[0].addEventListener("click",(function(){e.changeActive(-1,!0)})),e.getElementsByClassName("ds2s-right-control")[0].addEventListener("click",(function(){e.changeActive(1,!0)})),e.changeActive(0)}))},723:()=>{document.querySelectorAll(".ds2c-input").forEach((function(e,t){e.addEventListener("click",(function(t){e.classList.contains("ds2m-disabled")||e.getElementsByTagName("input")[0].focus()})),e.moveUnit=function(){var t=e.getElementsByTagName("input")[0];t.offsetLeft,text=document.createElement("span"),text.classList.add("ds2c-input"),text.style.padding="0",document.body.appendChild(text),text.style.position="absolute",text.style.whiteSpace="no-wrap",0==t.value.length?text.innerHTML=t.placeholder:text.innerHTML=t.value,textWidth=Math.ceil(text.clientWidth),document.body.removeChild(text),t.style.width=textWidth+5+"px"},e.getElementsByTagName("input")[0].addEventListener("input",(function(t){e.moveUnit()})),e.moveUnit()}))}},t={};function n(c){var i=t[c];if(void 0!==i)return i.exports;var s=t[c]={exports:{}};return e[c](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var c in t)n.o(t,c)&&!n.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(517),n(557),n(723)})()})();