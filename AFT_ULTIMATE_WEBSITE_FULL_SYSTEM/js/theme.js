const btn=document.getElementById('themeBtn');

function setTheme(t){
document.documentElement.setAttribute('data-theme',t);
localStorage.setItem('theme',t);
}

const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
let saved=localStorage.getItem('theme');

if(saved){setTheme(saved);}
else{setTheme(prefersDark?'dark':'light');}

btn?.addEventListener('click',()=>{
let cur=document.documentElement.getAttribute('data-theme');
setTheme(cur==='dark'?'light':'dark');
});
