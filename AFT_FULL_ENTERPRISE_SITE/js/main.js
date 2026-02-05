fetch('partials/header.html')
.then(r=>r.text())
.then(d=>document.getElementById('header').innerHTML=d);

fetch('partials/footer.html')
.then(r=>r.text())
.then(d=>document.getElementById('footer').innerHTML=d);

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});

cards.forEach(c=>observer.observe(c));
