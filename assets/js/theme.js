(() => {
 const root=document.documentElement,button=document.getElementById("themeToggle"),icon=document.getElementById("themeIcon");
 const get=()=>{try{return localStorage.getItem("aft-theme")}catch{return null}},set=v=>{try{localStorage.setItem("aft-theme",v)}catch{}},media=matchMedia("(prefers-color-scheme: dark)");
 function apply(t){root.dataset.theme=t;root.style.colorScheme=t;if(icon)icon.textContent=t==="dark"?"☼":"☾";button?.setAttribute("aria-label",t==="dark"?"Switch to light theme":"Switch to dark theme");}
 apply(get()||(media.matches?"dark":"light"));button?.addEventListener("click",()=>{const t=root.dataset.theme==="dark"?"light":"dark";set(t);apply(t);});media.addEventListener?.("change",e=>{if(!get())apply(e.matches?"dark":"light");});
})();