(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();AOS.init();(()=>{const o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),r=()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",r),c.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(o){typeof o.matches!="function"&&(o.matches=o.msMatchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||function(t){for(var c=this,r=(c.document||c.ownerDocument).querySelectorAll(t),e=0;r[e]&&r[e]!==c;)++e;return Boolean(r[e])}),typeof o.closest!="function"&&(o.closest=function(t){for(var c=this;c&&c.nodeType===1;){if(c.matches(t))return c;c=c.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),c=document.querySelectorAll(".js-modal-close");o.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+n+'"]');s.classList.add("active"),t.classList.add("active")})}),c.forEach(function(r){r.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});const i="modal-active",d=document.querySelector(".thank-modal"),a=document.querySelector(".modal-form"),u=document.querySelector(".open-modal-btn"),v=document.querySelectorAll(".close-btn");u.setAttribute("disabled",!0);const m=document.querySelector(".modal-field-input");m.addEventListener("input",p);function p(){m.value.length!==0&&u.removeAttribute("disabled")}const y=()=>{d.classList.remove(i)};v.forEach(o=>{o.addEventListener("click",t=>{t.stopPropagation(),y()})});function L(){a.querySelectorAll("input").forEach(t=>{t.value=""})}a.addEventListener("submit",o=>{o.preventDefault(),d.classList.add(i),L()});const l=document.querySelector(".go-top");window.addEventListener("scroll",h);l.addEventListener("click",f);function h(){const o=window.pageYOffset,t=document.documentElement.clientHeight;o>t?l.classList.add("go-top--show"):l.classList.remove("go-top--show")}function f(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(f,0))}
