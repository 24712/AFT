(() => {
 const root=document.documentElement,button=document.getElementById("themeToggle"),mode=document.getElementById("themeModeSelect"),media=matchMedia("(prefers-color-scheme: dark)");
 const read=()=>{try{return localStorage.getItem("aft-theme")}catch{return null}},save=v=>{try{if(v==="system")localStorage.removeItem("aft-theme");else localStorage.setItem("aft-theme",v)}catch{}};
 function status(){const el=document.getElementById("deviceThemeStatus");if(!el)return;const lang=root.lang||"en",t=root.dataset.theme||"light",names={ar:["فاتح","داكن"],en:["Light","Dark"],fr:["Clair","Sombre"],es:["Claro","Oscuro"],it:["Chiaro","Scuro"],ru:["Светлая","Тёмная"],zh:["浅色","深色"],ja:["ライト","ダーク"]}[lang]||["Light","Dark"];el.textContent=(lang==="ar"?"مظهر الجهاز: ":"Device appearance: ")+names[t==="dark"?1:0]+(read()?"":" · "+(lang==="ar"?"تلقائي":"System")); }
 function apply(pref){const t=pref==="system"?(media.matches?"dark":"light"):pref;root.dataset.theme=t;root.style.colorScheme=t;if(button){button.textContent=t==="dark"?"☼":"☾";button.setAttribute("aria-label",t==="dark"?"Switch to light theme":"Switch to dark theme");}if(mode)mode.value=pref;status();}
 let preference=read()||"system";apply(preference);
 button?.addEventListener("click",()=>{preference=root.dataset.theme==="dark"?"light":"dark";save(preference);apply(preference);});
 mode?.addEventListener("change",()=>{preference=mode.value;save(preference);apply(preference);});
 media.addEventListener?.("change",()=>{if((read()||"system")==="system")apply("system");});
 document.addEventListener("aft:languagechange",status);window.aftRefreshThemeStatus=status;
})();