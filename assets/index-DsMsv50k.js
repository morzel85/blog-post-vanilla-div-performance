(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const l=document.getElementById("container"),i=document.getElementById("clear"),g=document.getElementById("makeCreateElementInline"),f=document.getElementById("makeCreateElement"),p=document.getElementById("makeInnerHTML"),y=document.getElementById("makeCreateDocumentFragment"),E=document.getElementById("amount"),v=document.getElementById("warning"),s=()=>{l.innerHTML="",i.disabled=!0},h=()=>{s();for(let n=0;n<o;n++){const e=document.createElement("div");e.style.backgroundColor="darkorange",e.style.opacity=Math.random().toString(),e.style.margin="1px",e.style.height="15px",e.style.width="15px",e.style.border="1px",l.appendChild(e)}i.disabled=!1},I=()=>{s();for(let n=0;n<o;n++){const e=document.createElement("div");e.className="item",e.style.opacity=Math.random().toString(),l.appendChild(e)}i.disabled=!1},L=()=>{s();let n="";for(let e=0;e<o;e++){const a=`<div class="item" style="opacity: ${Math.random()}"></div>`;n+=a}l.innerHTML=n,i.disabled=!1},b=()=>{s();const n=document.createDocumentFragment();for(let e=0;e<o;e++){const a=document.createElement("div");a.className="item",a.style.opacity=Math.random().toString(),n.appendChild(a)}l.appendChild(n),i.disabled=!1};g.addEventListener("click",h);f.addEventListener("click",I);p.addEventListener("click",L);y.addEventListener("click",b);i.addEventListener("click",s);let d=!0,u=!1;const k=()=>{d=Number.isInteger(o)&&o>0&&o<1e7,u=o>=2e4,g.disabled=!d,f.disabled=!d,p.disabled=!d,y.disabled=!d,v.style.display=u?"inline":"none"};let o=500;E.value=o.toString();E.addEventListener("change",n=>{const e=n.target;o=Number(e.value),k()});