const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o=0;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{t.disabled=!0,n(),o=setInterval(n,1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.97902f65.js.map