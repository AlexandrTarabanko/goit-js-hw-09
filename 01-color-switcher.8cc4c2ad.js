const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(a=>{e.disabled=!0;const o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),d=()=>{e.disabled=!1,clearInterval(o),t.removeEventListener("click",d)};t.addEventListener("click",d)}));
//# sourceMappingURL=01-color-switcher.8cc4c2ad.js.map
