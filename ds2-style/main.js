(()=>{var e={517:()=>{document.querySelectorAll(".ds2c-accordion-switcher").forEach((function(e,t){e.toggleActive=function(t){Array.from(e.children[0].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[0].children[t].classList.add("ds2m-active"),Array.from(e.children[1].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[1].children[t].classList.add("ds2m-active"),Array.from(e.children[2].children[0].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[2].children[0].children[t].classList.add("ds2m-active")},Array.from(e.children[1].children).forEach((function(t,s){t.addEventListener("click",(function(){e.toggleActive(s)}))})),Array.from(e.children[0].children).forEach((function(t,s){t.addEventListener("click",(function(){e.toggleActive(s)}))})),e.toggleActive(0)}))},560:()=>{document.querySelectorAll(".ds2s-scrollbox").forEach((function(e,t){e.leftMargin=0,e.slider=e.getElementsByClassName("ds2s-autoscroll-flex")[0],e.sliderClone=e.slider.cloneNode(!0),e.appendChild(e.sliderClone)}))},557:()=>{document.querySelectorAll(".ds2c-carousel").forEach((function(e,t){e.tsClasses=["ds2m-left-offscreen","ds2m-left","ds2m-center","ds2m-right","ds2m-right-offscreen"],e.touched=!1,e.touchX=0,e.touchY=0,e.activeNumber=0,e.itemCount=e.getElementsByClassName("ds2s-item").length,e.changeActive=function(t,s=!1){e.activeNumber=(t+s*e.activeNumber+e.itemCount)%e.itemCount;var n=Array.from(e.getElementsByClassName("ds2s-icon-box"));n.forEach((function(e,t){e.classList.remove("ds2m-active")})),n[e.activeNumber].classList.add("ds2m-active"),Array.from(e.getElementsByClassName("ds2s-item")).forEach((function(t,s){var n=(s-e.activeNumber)%e.itemCount;t.classList.contains("ds2s-image-item")?t.classList="ds2s-item ds2s-image-item":t.classList.contains("ds2s-video-item")&&(t.classList="ds2s-item ds2s-video-item");let c=n+2;c<0&&(c=0),c>=e.tsClasses.length&&(c=e.tsClasses.length-1),0==c&&0==s&&e.activeNumber==e.itemCount-1&&(c=3),4==c&&s==e.itemCount-1&&0==e.activeNumber&&(c=1),e.itemCount,t.classList.add(e.tsClasses[c])}))},Array.from(e.getElementsByClassName("ds2s-icon-box")).forEach((function(t,s){t.addEventListener("click",(function(){e.changeActive(s)}))})),Array.from(e.getElementsByClassName("ds2s-item")).forEach((function(t,s){t.addEventListener("click",(function(){e.changeActive(s)}))})),e.processTouchStart=function(t){e.touchX=t.targetTouches[0].screenX,e.touchY=t.targetTouches[0].screenY,e.touched=!0},e.processTouchEnd=function(t){e.touchend=!1,Math.abs(t.changedTouches[0].screenX-e.touchX)>2*Math.abs(t.changedTouches[0].screenY-e.touchY)&&(t.changedTouches[0].screenX-50>e.touchX?e.changeActive(-1,!0):t.changedTouches[0].screenX+50<e.touchX&&e.changeActive(1,!0))},e.getElementsByClassName("ds2s-left-control")[0].addEventListener("click",(function(){e.changeActive(-1,!0)})),e.getElementsByClassName("ds2s-right-control")[0].addEventListener("click",(function(){e.changeActive(1,!0)})),e.addEventListener("touchstart",e.processTouchStart),e.addEventListener("touchend",e.processTouchEnd),e.changeActive(0)}))},400:()=>{document.querySelectorAll(".ds2c-hovers").forEach((function(e,t){let s=e.getElementsByTagName("section"),n=e.getElementsByClassName("ds2s-hover-button");for(var c=0;c<s.length;c++){const e=s[c].cloneNode(!0),t=document.createElement("div");t.classList.add("ds2s-emebedded-text-section");let o=e.children.length;for(var a=0;a<o;a++)t.append(e.children[a].cloneNode(!0));n[c].appendChild(t)}e.toggleActive=function(t){if(Array.from(e.getElementsByTagName("section")).forEach((function(e,t){e.classList.remove("ds2m-active")})),Array.from(e.getElementsByClassName("ds2s-emebedded-text-section")).forEach((function(e,t){e.classList.remove("ds2m-active")})),Array.from(e.getElementsByClassName("ds2s-hover-button")).forEach((function(e,t){e.classList.remove("ds2m-active"),e.style.zIndex="40"})),t>-1&&(e.getElementsByClassName("ds2s-hover-button")[t].classList.add("ds2m-active"),e.getElementsByClassName("ds2s-emebedded-text-section")[t].classList.add("ds2m-active"),e.getElementsByTagName("section")[t].classList.add("ds2m-active"),e.classList.contains("ds2m-popup"))){let s=e.getElementsByClassName("ds2s-emebedded-text-section")[t];s.style.transform="translate(50%,50%)";let n=s.getBoundingClientRect().x+s.getBoundingClientRect().width;if(s.parentElement.style.zIndex="50",n>=window.innerWidth-20){let e=50-(n-window.innerWidth+20)/s.getBoundingClientRect().width*100;s.style.transform="translate("+e+"%,50%)"}}},Array.from(e.getElementsByTagName("section")).forEach((function(t,s){t.addEventListener("click",(function(){e.toggleActive(s)}))})),Array.from(e.getElementsByClassName("ds2s-hover-button")).forEach((function(t,s){t.addEventListener("click",(function(n){n.target==t.getElementsByClassName("ds2s-button-icon")[0]&&e.toggleActive(s)}))})),Array.from(e.getElementsByClassName("ds2s-popup-close-button")).forEach((function(t,s){t.addEventListener("click",(function(){e.toggleActive(-1)}))})),e.toggleActive(0)}))},723:()=>{document.querySelectorAll(".ds2c-input").forEach((function(e,t){e.addEventListener("click",(function(t){e.classList.contains("ds2m-disabled")||e.getElementsByTagName("input")[0].focus()})),e.moveUnit=function(){if(!(e.getElementsByTagName("span").length<1)){var t=e.getElementsByTagName("input")[0];t.offsetLeft,text=document.createElement("span"),text.classList.add("ds2c-input"),text.style.padding="0",document.body.appendChild(text),text.style.position="absolute",text.style.whiteSpace="no-wrap",0==t.value.length?text.innerHTML=t.placeholder:text.innerHTML=t.value,text.innerHTML=text.innerHTML.replaceAll(" ","_"),textWidth=Math.ceil(text.clientWidth),document.body.removeChild(text),t.style.width=1.1*textWidth+5+"px"}},e.getElementsByTagName("input")[0].addEventListener("input",(function(t){e.moveUnit()})),e.moveUnit()}))},5:()=>{document.querySelectorAll(".ds2c-modal-example").forEach((function(e,t){var s=document.getElementsByClassName("ds2c-modal-container")[0];let n=e.getElementsByClassName("ds2c-modal")[0],c=e.getElementsByClassName("ds2c-button")[0];s.initModal(n,c).modalElement.getElementsByClassName("ds2s-close-button")[0].onclick=function(){s.hideModal()}}))},794:()=>{var e=document.getElementsByClassName("ds2c-modal-container");if(e.length>1){console.warn("DS2 Warning: multiple modal containers exist on this page. There should only be one element with classname 'ds2c-modal-container'. Removing subsequent containers...");for(let t=e.length-1;t>0;t--)e[t].remove()}if(e.length<1){let e=document.createElement("div");e.classList.add("ds2c-modal-container"),document.getElementsByTagName("body")[0].appendChild(e)}var t=e[0];t.modalIdentifier=0,t.initModal=function(e,s=null){let n=e,c="modalid-"+t.modalIdentifier;n.setAttribute("data-modal-identifier",c),n.remove(),t.appendChild(n),null!=s&&(s.setAttribute("data-target-modal",c),s.onclick=()=>{t.showModal(c)});let a=n.getElementsByClassName("ds2u-popup-close-button");for(var o=0;o<a.length;o++)a[o].addEventListener("click",(function(){t.hideModal()}));return t.modalIdentifier++,{modalElement:n,modalIdAttribute:c}},t.showModal=function(e){let t=document.getElementsByClassName("ds2c-modal");for(let s=0;s<t.length;s++){let n=t[s];n.getAttribute("data-modal-identifier")==e?n.classList.add("ds2m-active"):n.classList.remove("ds2m-active")}},t.hideModal=function(){let e=document.getElementsByClassName("ds2c-modal");for(let t=0;t<e.length;t++)e[t].classList.remove("ds2m-active")},t.addEventListener("click",(e=>{e.target===t&&t.hideModal()}))}},t={};function s(n){var c=t[n];if(void 0!==c)return c.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(794),s(517),s(560),s(557),s(400),s(723),s(5)})()})();