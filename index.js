import{a as u,S as v,i as d}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();u.defaults.baseURL="https://pixabay.com";const w="49271250-6e2a7e536995fb461bd1f8f83";function m(s,t,r){return u.get("/api/",{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:r,page:t}})}const S=new v(".gallery-link",{captionDelay:250,captionsData:"alt"}),y=document.querySelector(".gallery"),q=document.querySelector("input[name = search-text]"),f=document.querySelector(".visually-hidden"),p=document.querySelector(".more-button");function g(){f.classList.remove("visually-hidden")}function I(){y.innerHTML=""}function $(){p.style.display="none"}function h(){f.classList.add("visually-hidden")}function b(){p.style.display="block"}function L(s){const t=s.map(r=>`<li class="gallery-item">
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

        </li>`).join("");y.insertAdjacentHTML("beforeend",t),S.refresh(),q.value=""}const c=15,E=document.querySelector(".form"),O=document.querySelector("input[name = search-text]"),R=document.querySelector(".more-button");let a="",n=1;E.addEventListener("submit",async s=>{if(s.preventDefault(),a=O.value.trim(),a!==""){I(),g();try{n=1;const t=await m(a,n,c);t.data.hits.length===0?d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(L(t.data.hits),b())}catch(t){console.log(t)}h()}});R.addEventListener("click",async s=>{$(),n+=1;const t=await m(a,n,c);g(),L(t.data.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),h(),n*c>=t.data.totalHits?d.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):b()});
//# sourceMappingURL=index.js.map
