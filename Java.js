/**
 * ÁPEX SPORT — app.js
 * Interações: menu mobile, scroll effects, countdown,
 * filtro de produtos, animações, favoritos, carrinho, stats counter
 */

// ── DOM Ready ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollEffects();
  initCountdown();
  initProductFilter();
  initFavorites();
  initAddToCart();
  initStatsCounter();
  initNewsletterForm();
  initBackToTop();
  initRevealAnimations();
});

// ── NAV MOBILE ────────────────────────────────────────────
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const list   = document.getElementById('nav-list');
  const header = document.getElementById('header');

  // Abrir / fechar menu
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('active');
    list.classList.toggle('open');
    document.body.style.overflow = list.classList.contains('open') ? 'hidden' : '';
  });

  // Fechar ao clicar em um link
  list?.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      list.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link no scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav__link');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.nav__link[href="#${id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

// ── SCROLL EFFECTS (header sticky) ────────────────────────
function initScrollEffects() {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }, { passive: true });
}

// ── COUNTDOWN TIMER ───────────────────────────────────────
function initCountdown() {
  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!hoursEl) return;

  // Tempo alvo: 8h 34m a partir de agora
  const target = new Date();
  target.setHours(target.getHours() + 8);
  target.setMinutes(target.getMinutes() + 34);
  target.setSeconds(target.getSeconds() + 0);

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now  = new Date();
    const diff = target - now;

    if (diff <= 0) {
      hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
      return;
    }

    const h = Math.floor(diff / 1000 / 3600);
    const m = Math.floor((diff / 1000 % 3600) / 60);
    const s = Math.floor(diff / 1000 % 60);

    hoursEl.textContent   = pad(h);
    minutesEl.textContent = pad(m);
    secondsEl.textContent = pad(s);

    // Pequena animação no segundo
    secondsEl.style.transform = 'scale(1.15)';
    setTimeout(() => { secondsEl.style.transform = 'scale(1)'; }, 200);
  }

  tick();
  setInterval(tick, 1000);
}

// ── PRODUCT FILTER ────────────────────────────────────────
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.prod-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const cat = card.dataset.category;
        const show = filter === 'all' || cat === filter;

        if (show) {
          card.style.display = '';
          card.style.animation = 'fadeInUp .4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Inject fadeInUp keyframe dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

// ── FAVORITES ─────────────────────────────────────────────
function initFavorites() {
  document.querySelectorAll('.prod-card__fav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');

      const isNow = btn.classList.contains('active');
      showToast(isNow ? '❤️ Adicionado aos favoritos!' : '💔 Removido dos favoritos');
    });
  });
}

// ── ADD TO CART ───────────────────────────────────────────
function initAddToCart() {
  const cartCount = document.querySelector('.nav__cart-count');
  let count = 3;

  document.querySelectorAll('.prod-card__overlay .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      count++;
      if (cartCount) cartCount.textContent = count;
      showToast('🛒 Item adicionado ao carrinho!');

      // Animate cart icon
      const cartIcon = document.querySelector('.nav__cart');
      if (cartIcon) {
        cartIcon.style.transform = 'scale(1.3)';
        setTimeout(() => { cartIcon.style.transform = 'scale(1)'; }, 300);
      }
    });
  });
}

// ── TOAST ─────────────────────────────────────────────────
function showToast(message) {
  const toast   = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ── STATS COUNTER ANIMATION ───────────────────────────────
function initStatsCounter() {
  const nums = document.querySelectorAll('.stats__num');
  let animated = false;

  function animateNumbers() {
    if (animated) return;

    const section = document.querySelector('.stats');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      animated = true;

      nums.forEach(num => {
        const target = parseInt(num.dataset.target, 10);
        const duration = 1800;
        const start = performance.now();

        function update(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const ease = 1 - Math.pow(1 - progress, 3);
          num.textContent = Math.floor(ease * target);
          if (progress < 1) requestAnimationFrame(update);
          else num.textContent = target;
        }
        requestAnimationFrame(update);
      });
    }
  }

  window.addEventListener('scroll', animateNumbers, { passive: true });
  animateNumbers(); // check on load too
}

// ── NEWSLETTER FORM ───────────────────────────────────────
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (!input.value) return;

    showToast('✅ Inscrição realizada com sucesso!');
    input.value = '';

    // Visual feedback
    const btn = form.querySelector('.btn');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = 'Inscrito! ✓';
      btn.style.background = '#52b788';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
      }, 3000);
    }
  });
}

// ── BACK TO TOP ───────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── REVEAL ON SCROLL ──────────────────────────────────────
function initRevealAnimations() {
  // Add reveal class to elements
  const targets = [
    '.cat-card',
    '.prod-card',
    '.stats__item',
    '.section-header',
    '.promo-banner__content',
    '.newsletter__text',
    '.newsletter__form'
  ];

  targets.forEach((selector, i) => {
    document.querySelectorAll(selector).forEach((el, j) => {
      el.classList.add('reveal');
      // Stagger within groups
      const delay = (j % 4) * 100;
      el.style.transitionDelay = `${delay}ms`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── PARALLAX HERO (subtle) ────────────────────────────────
(function initParallax() {
  const blobs = document.querySelectorAll('.hero__blob');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    blobs.forEach((blob, i) => {
      const factor = i === 0 ? 0.12 : -0.08;
      blob.style.transform = `translateY(${y * factor}px)`;
    });
  }, { passive: true });
})();

// ── CURSOR GLOW (desktop only) ────────────────────────────
(function initCursorGlow() {
  if (window.innerWidth < 1024) return;

  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9998;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(230,57,70,.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left .1s, top .1s;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
})();
