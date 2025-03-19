import{a as d,S as w,i as u}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();d.defaults.baseURL="https://pixabay.com";const S="49271250-6e2a7e536995fb461bd1f8f83";async function m(s,t,r){return d.get("/api/",{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:r,page:t}})}const q=new w(".gallery-link",{captionDelay:250,captionsData:"alt"}),y=document.querySelector(".gallery"),I=document.querySelector("input[name = search-text]"),f=document.querySelector(".visually-hidden"),p=document.querySelector(".more-button");function g(){f.classList.remove("visually-hidden")}function $(){y.innerHTML=""}function h(){p.style.display="none"}function b(){f.classList.add("visually-hidden")}function L(){p.style.display="block"}function v(s){const t=s.map(r=>`<li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" title=""/>
          </a>
          <table>
            <thead>
              <tr>
                <th>Likes</th>
                <th>Views</th>
                <th>Comments</th>
                <th>Downloads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${r.likes}</td>
                <td>${r.views}</td>
                <td>${r.comments}</td>
                <td>${r.downloads}</td>
              </tr>
            </tbody>
          </table>

        </li>`).join("");y.insertAdjacentHTML("beforeend",t),q.refresh(),I.value=""}const i=15,E=document.querySelector(".form"),O=document.querySelector("input[name = search-text]"),R=document.querySelector(".more-button");let a="",n=1;E.addEventListener("submit",async s=>{if(s.preventDefault(),a=O.value.trim(),a!==""){$(),g(),h();try{n=1;const t=await m(a,n,i);t.data.hits.length===0?u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(v(t.data.hits),t.data.hits.length>=i&&L())}catch(t){console.log(t)}b()}});R.addEventListener("click",async s=>{h(),n+=1;const t=await m(a,n,i);g(),v(t.data.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),b(),n*i>=t.data.totalHits?u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):L()});
//# sourceMappingURL=index.js.map
