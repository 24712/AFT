let current=localStorage.getItem('lang')||
(navigator.language.startsWith('ar')?'ar':'en');

function loadLang(l){
fetch('i18n/'+l+'.json')
.then(r=>r.json())
.then(data=>{
document.querySelectorAll('[data-i18n]').forEach(el=>{
el.innerText=data[el.dataset.i18n];
});
localStorage.setItem('lang',l);
});
}

loadLang(current);

document.getElementById('langBtn')?.addEventListener('click',()=>{
current=current==='ar'?'en':'ar';
loadLang(current);
});
