// ==========================================================================
// JEAN BUKURU — Personal Brand Website — Shared JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if(!navbar) return;
    if(window.scrollY > 12) navbar.classList.add('solid');
    else navbar.classList.remove('solid');

    const btt = document.querySelector('.back-to-top');
    if(btt){
      if(window.scrollY > 500) btt.classList.add('show');
      else btt.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(toggle && navLinks){
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
  document.querySelectorAll('.nav-more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if(window.innerWidth <= 980){
        e.preventDefault();
        btn.closest('.nav-more').classList.toggle('open');
      }
    });
  });

  /* ---------- Back to top ---------- */
  const btt = document.querySelector('.back-to-top');
  if(btt){
    btt.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        let cur = 0;
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          cur = target * progress;
          el.textContent = (target % 1 === 0 ? Math.floor(cur) : cur.toFixed(1)) + suffix;
          if(progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(step);
        counterIO.unobserve(el);
      }
    });
  }, {threshold:0.4});
  counters.forEach(el => counterIO.observe(el));

  /* ---------- Skill bars ---------- */
  const bars = document.querySelectorAll('.skill-bar-fill');
  const barIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.width = entry.target.getAttribute('data-pct') + '%';
        barIO.unobserve(entry.target);
      }
    });
  }, {threshold:0.3});
  bars.forEach(b => barIO.observe(b));

  /* ---------- Lightbox ---------- */
  const lightbox = document.querySelector('.lightbox');
  if(lightbox){
    const lbImg = lightbox.querySelector('img');
    const lbCap = lightbox.querySelector('.lb-cap');
    document.querySelectorAll('[data-lightbox]').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-lightbox');
        const cap = item.getAttribute('data-caption') || '';
        lbImg.setAttribute('src', src);
        lbCap.textContent = cap;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', (e) => {
      if(e.target === lightbox || e.target.classList.contains('lb-close')){
        lightbox.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

  /* ---------- Gallery filter ---------- */
  const filterBtns = document.querySelectorAll('.gallery-filter button');
  const galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if(cat === 'all' || item.getAttribute('data-cat') === cat){
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ---------- Contact form (static demo) ---------- */
  const contactForm = document.querySelector('#contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('#form-success');
      if(note){
        note.style.display = 'block';
        contactForm.reset();
        setTimeout(() => note.style.display = 'none', 6000);
      }
    });
  }

});
