import{S as w,i as v,a as x}from"./assets/vendor-CkcXhjHS.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const E=document.querySelector(".app-form"),a=document.querySelector("#galleryList"),p=e=>{const t=document.createElement("li");t.classList.add("gallery-item"),t.dataset.source=e.largeImageURL;const n=document.createElement("a");n.href=e.largeImageURL,n.classList.add("gallery-link"),n.style.color="black";const i=document.createElement("img");i.src=e.webformatURL,i.alt=e.tags,i.width=360,i.height=200;const s=document.createElement("div");s.classList.add("content");const o=document.createElement("div");o.classList.add("info");const r=document.createElement("h5");r.classList.add("key"),r.textContent="Likes",o.appendChild(r);const u=document.createElement("p");u.classList.add("value"),u.textContent=e.likes,o.appendChild(u);const d=document.createElement("div");d.classList.add("info");const f=document.createElement("h5");f.classList.add("key"),f.textContent="Views",d.appendChild(f);const h=document.createElement("p");h.classList.add("value"),h.textContent=e.views,d.appendChild(h);const c=document.createElement("div");c.classList.add("info");const g=document.createElement("h5");g.classList.add("key"),g.textContent="Comments",c.appendChild(g);const y=document.createElement("p");y.classList.add("value"),y.textContent=e.views,c.appendChild(y);const m=document.createElement("div");m.classList.add("info");const L=document.createElement("h5");L.classList.add("key"),L.textContent="Downloads",m.appendChild(L);const C=document.createElement("p");C.classList.add("value"),C.textContent=e.downloads,m.appendChild(C),s.appendChild(o),s.appendChild(d),s.appendChild(c),s.appendChild(m),n.appendChild(i),t.appendChild(s),t.appendChild(n),a.appendChild(t)};let l=new w(".gallery li > a",{captionsData:"alt",captionDelay:350});E.addEventListener("submit",async e=>{e.preventDefault(),a.innerHTML="";const t=e.target.elements.search.value;if(t==="")return v.warning({position:"topRight",message:"Please enter a valid search query!"}),!1;{const n=document.createElement("li");n.classList.add("gallery-item");const i=document.createElement("span");i.classList.add("loader"),n.appendChild(i),n.style.textAlign="center",n.style.border="none",a.appendChild(n),x.get("https://pixabay.com/api/",{params:{key:"49344582-c64095957e0f61b264d1bf806",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>{const o=s.data.hits;a.innerHTML="",o.length===0?v.error({position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}):(o.forEach(r=>{p(r)}),l.refresh())}).catch(s=>{v.error({position:"topRight",color:"red",message:s.message}),a.innerHTML="",console.error("Pixabay'den gelen Hata",s)}),e.target.reset()}})});
//# sourceMappingURL=index.js.map
