fetch('partials/header.html')
.then(r=>r.text())
.then(d=>document.getElementById('header').innerHTML=d);

fetch('partials/footer.html')
.then(r=>r.text())
.then(d=>document.getElementById('footer').innerHTML=d);

// Animation
const cards=document.querySelectorAll('.card');

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add('show');
}
});
});

cards.forEach(c=>observer.observe(c));
