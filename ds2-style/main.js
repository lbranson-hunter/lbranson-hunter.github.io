(()=>{var e={517:()=>{document.querySelectorAll(".ds2c-accordion-switcher").forEach((function(e,t){e.toggleActive=function(t){Array.from(e.children[0].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[0].children[t].classList.add("ds2m-active"),Array.from(e.children[1].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[1].children[t].classList.add("ds2m-active"),Array.from(e.children[2].children[0].children).forEach((function(e,t){e.classList.remove("ds2m-active")})),e.children[2].children[0].children[t].classList.add("ds2m-active")},Array.from(e.children[1].children).forEach((function(t,n){t.addEventListener("click",(function(){e.toggleActive(n)}))})),Array.from(e.children[0].children).forEach((function(t,n){t.addEventListener("click",(function(){e.toggleActive(n)}))})),e.toggleActive(0)}))},560:()=>{document.querySelectorAll(".ds2s-scrollbox").forEach((function(e,t){e.leftMargin=0,e.slider=e.getElementsByClassName("ds2s-autoscroll-flex")[0],e.sliderClone=e.slider.cloneNode(!0),e.appendChild(e.sliderClone)}))},557:()=>{document.querySelectorAll(".ds2c-carousel").forEach((function(e,t){e.tsClasses=["ds2m-left-offscreen","ds2m-left","ds2m-center","ds2m-right","ds2m-right-offscreen"],e.touched=!1,e.touchX=0,e.touchY=0,e.activeNumber=0,e.itemCount=e.getElementsByClassName("ds2s-item").length,e.changeActive=function(t,n=!1){e.activeNumber=(t+n*e.activeNumber+e.itemCount)%e.itemCount;var s=Array.from(e.getElementsByClassName("ds2s-icon-box"));s.forEach((function(e,t){e.classList.remove("ds2m-active")})),s[e.activeNumber].classList.add("ds2m-active"),Array.from(e.getElementsByClassName("ds2s-item")).forEach((function(t,n){var s=(n-e.activeNumber)%e.itemCount;t.classList.contains("ds2s-image-item")?t.classList="ds2s-item ds2s-image-item":t.classList.contains("ds2s-video-item")&&(t.classList="ds2s-item ds2s-video-item");let c=s+2;c<0&&(c=0),c>=e.tsClasses.length&&(c=e.tsClasses.length-1),0==c&&0==n&&e.activeNumber==e.itemCount-1&&(c=3),4==c&&n==e.itemCount-1&&0==e.activeNumber&&(c=1),e.itemCount,t.classList.add(e.tsClasses[c])}))},Array.from(e.getElementsByClassName("ds2s-icon-box")).forEach((function(t,n){t.addEventListener("click",(function(){e.changeActive(n)}))})),Array.from(e.getElementsByClassName("ds2s-item")).forEach((function(t,n){t.addEventListener("click",(function(){e.changeActive(n)}))})),e.processTouchStart=function(t){e.touchX=t.targetTouches[0].screenX,e.touchY=t.targetTouches[0].screenY,e.touched=!0},e.processTouchEnd=function(t){e.touchend=!1,Math.abs(t.changedTouches[0].screenX-e.touchX)>2*Math.abs(t.changedTouches[0].screenY-e.touchY)&&(t.changedTouches[0].screenX-50>e.touchX?e.changeActive(-1,!0):t.changedTouches[0].screenX+50<e.touchX&&e.changeActive(1,!0))},e.getElementsByClassName("ds2s-left-control")[0].addEventListener("click",(function(){e.changeActive(-1,!0)})),e.getElementsByClassName("ds2s-right-control")[0].addEventListener("click",(function(){e.changeActive(1,!0)})),e.addEventListener("touchstart",e.processTouchStart),e.addEventListener("touchend",e.processTouchEnd),e.changeActive(0)}))},400:()=>{document.querySelectorAll(".ds2c-hovers").forEach((function(e,t){let n=e.getElementsByTagName("section"),s=e.getElementsByClassName("ds2s-hover-button");for(var c=0;c<n.length;c++){const e=n[c].cloneNode(!0),t=document.createElement("div");t.classList.add("ds2s-emebedded-text-section");let i=e.children.length;for(var a=0;a<i;a++)t.append(e.children[a].cloneNode(!0));s[c].appendChild(t)}e.toggleActive=function(t){if(Array.from(e.getElementsByTagName("section")).forEach((function(e,t){e.classList.remove("ds2m-active")})),Array.from(e.getElementsByClassName("ds2s-emebedded-text-section")).forEach((function(e,t){e.classList.remove("ds2m-active")})),Array.from(e.getElementsByClassName("ds2s-hover-button")).forEach((function(e,t){e.classList.remove("ds2m-active"),e.style.zIndex="40"})),t>-1&&(e.getElementsByClassName("ds2s-hover-button")[t].classList.add("ds2m-active"),e.getElementsByClassName("ds2s-emebedded-text-section")[t].classList.add("ds2m-active"),e.getElementsByTagName("section")[t].classList.add("ds2m-active"),e.classList.contains("ds2m-popup"))){let n=e.getElementsByClassName("ds2s-emebedded-text-section")[t];n.style.transform="translate(50%,50%)";let s=n.getBoundingClientRect().x+n.getBoundingClientRect().width,c=e.getBoundingClientRect().x+e.getBoundingClientRect().width,a=n.getBoundingClientRect().y+n.getBoundingClientRect().height,i=e.getBoundingClientRect().y+e.getBoundingClientRect().height;n.parentElement.style.zIndex="50";let o=50,l=50;s>=c-20&&(o=50-(s-c+20)/n.getBoundingClientRect().width*100),a>i-20&&(l=50-(a-i+20)/n.getBoundingClientRect().height*100),n.style.transform="translate("+o+"%,"+l+"%)"}},Array.from(e.getElementsByTagName("section")).forEach((function(t,n){t.addEventListener("click",(function(){e.toggleActive(n)}))})),Array.from(e.getElementsByClassName("ds2s-hover-button")).forEach((function(t,n){t.addEventListener("click",(function(s){s.target==t.getElementsByClassName("ds2s-button-icon")[0]&&e.toggleActive(n)}))})),Array.from(e.getElementsByClassName("ds2s-popup-close-button")).forEach((function(t,n){t.addEventListener("click",(function(){e.toggleActive(-1)}))})),e.toggleActive(0)}))},723:()=>{document.querySelectorAll(".ds2c-input").forEach((function(e,t){e.addEventListener("click",(function(t){e.classList.contains("ds2m-disabled")||e.getElementsByTagName("input")[0].focus()})),e.moveUnit=function(){if(!(e.getElementsByTagName("span").length<1)){var t=e.getElementsByTagName("input")[0];t.offsetLeft,text=document.createElement("span"),text.classList.add("ds2c-input"),text.style.padding="0",document.body.appendChild(text),text.style.position="absolute",text.style.whiteSpace="no-wrap",0==t.value.length?text.innerHTML=t.placeholder:text.innerHTML=t.value,text.innerHTML=text.innerHTML.replaceAll(" ","_"),textWidth=Math.ceil(text.clientWidth),document.body.removeChild(text),t.style.width=1.1*textWidth+5+"px"}},e.getElementsByTagName("input")[0].addEventListener("input",(function(t){e.moveUnit()})),e.moveUnit()}))},5:()=>{document.querySelectorAll(".ds2c-modal-example").forEach((function(e,t){var n=document.getElementsByClassName("ds2c-modal-container")[0];let s=e.getElementsByClassName("ds2c-modal")[0],c=e.getElementsByClassName("ds2c-button")[0];n.initModal(s,c).modalElement.getElementsByClassName("ds2s-close-button")[0].onclick=function(){n.hideModal()}}))},794:()=>{var e=document.getElementsByClassName("ds2c-modal-container");if(e.length>1){console.warn("DS2 Warning: multiple modal containers exist on this page. There should only be one element with classname 'ds2c-modal-container'. Removing subsequent containers...");for(let t=e.length-1;t>0;t--)e[t].remove()}if(e.length<1){let e=document.createElement("div");e.classList.add("ds2c-modal-container"),document.getElementsByTagName("body")[0].appendChild(e)}var t=e[0];t.modalIdentifier=0,t.initModal=function(e,n=null){let s=e,c="modalid-"+t.modalIdentifier;s.setAttribute("data-modal-identifier",c),s.remove(),t.appendChild(s),null!=n&&(n.setAttribute("data-target-modal",c),n.onclick=()=>{t.showModal(c)});let a=s.getElementsByClassName("ds2u-popup-close-button");for(var i=0;i<a.length;i++)a[i].addEventListener("click",(function(){t.hideModal()}));return t.modalIdentifier++,{modalElement:s,modalIdAttribute:c}},t.showModal=function(e){let t=document.getElementsByClassName("ds2c-modal");for(let n=0;n<t.length;n++){let s=t[n];s.getAttribute("data-modal-identifier")==e?s.classList.add("ds2m-active"):s.classList.remove("ds2m-active")}},t.hideModal=function(){let e=document.getElementsByClassName("ds2c-modal");for(let t=0;t<e.length;t++)e[t].classList.remove("ds2m-active")},t.addEventListener("click",(e=>{e.target===t&&t.hideModal()}))}},t={};function n(s){var c=t[s];if(void 0!==c)return c.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(794),n(517),n(560),n(557),n(400),n(723),n(5)})()})();