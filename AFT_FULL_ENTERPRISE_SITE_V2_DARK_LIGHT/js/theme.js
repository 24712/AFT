const btn=document.getElementById('themeBtn');

function setTheme(t){
document.documentElement.setAttribute('data-theme',t);
localStorage.setItem('theme',t);
}

// Auto detect
const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;

let saved=localStorage.getItem('theme');

if(saved){
setTheme(saved);
}else{
setTheme(prefersDark?'dark':'light');
}

// Button toggle
btn?.addEventListener('click',()=>{
let current=document.documentElement.getAttribute('data-theme');
setTheme(current==='dark'?'light':'dark');
});
