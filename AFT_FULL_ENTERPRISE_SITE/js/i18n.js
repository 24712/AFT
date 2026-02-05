let lang = navigator.language.startsWith('ar')?'ar':'en';

fetch('i18n/'+lang+'.json')
.then(r=>r.json())
.then(data=>{
document.querySelectorAll('[data-i18n]').forEach(el=>{
el.innerText = data[el.dataset.i18n];
});
});
