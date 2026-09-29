const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));

window.addEventListener('scroll', ()=>{
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 20);
});

function handleSubmit(e){
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.textContent = '✅ Pesan terkirim! Aryo akan segera membalas — terima kasih!';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 3500);
  e.target.reset();
}

// Smooth reveal on scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting) en.target.style.opacity='1', en.target.style.transform='none';
  });
},{threshold:0.1});
document.querySelectorAll('.skill-card,.project-card,.about-card,.info-card').forEach(el=>{
  el.style.opacity='0'; el.style.transform='translateY(16px)'; el.style.transition='all .6s ease';
  observer.observe(el);
});
