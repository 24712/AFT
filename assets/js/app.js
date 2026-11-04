(() => {
 const root=document.documentElement,nav=document.getElementById("mainNav"),menu=document.getElementById("menuToggle"),progress=document.getElementById("scrollProgress"),year=document.getElementById("currentYear");
 const search=document.getElementById("serviceSearch"),cards=[...document.querySelectorAll(".service-card")],filters=[...document.querySelectorAll(".filter-button")],noResults=document.getElementById("noResults"),count=document.getElementById("resultCount");let active="all";
 if(year)year.textContent=new Date().getFullYear();
 menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
 nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false");}));
 function progressUpdate(){const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=(max>0?scrollY/max*100:0)+"%";}
 addEventListener("scroll",progressUpdate,{passive:true});progressUpdate();
 function filter(){const q=(search?.value||"").trim().toLocaleLowerCase();let shown=0;cards.forEach(card=>{const ok=(active==="all"||card.dataset.category===active)&&(!q||(card.dataset.search+" "+card.textContent).toLocaleLowerCase().includes(q));card.hidden=!ok;if(ok)shown++;});if(noResults)noResults.hidden=shown!==0;if(count)count.textContent=root.lang==="ar"?"عدد المجالات الظاهرة: "+shown:shown+" categories shown";}
 search?.addEventListener("input",filter);filters.forEach(b=>b.addEventListener("click",()=>{active=b.dataset.filter;filters.forEach(x=>x.classList.toggle("active",x===b));filter();}));document.addEventListener("aft:languagechange",filter);
 const reveal=document.querySelectorAll(".reveal");if("IntersectionObserver"in window){const observer=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");obs.unobserve(e.target);}}),{threshold:.1});reveal.forEach(x=>observer.observe(x));}else reveal.forEach(x=>x.classList.add("is-visible"));filter();
})();