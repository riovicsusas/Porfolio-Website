// ==========================================================================
// Riovic Susas — Portfolio interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initThemeToggle();
  initActiveNav();
  initDriversMarquee();
  initCardTilt();
  initContactForm();
});

/* ---------- mobile sidebar ---------- */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('sidebarScrim');
  if (!toggle || !sidebar || !scrim) return;

  const open = () => {
    sidebar.classList.add('is-open');
    scrim.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    sidebar.classList.remove('is-open');
    scrim.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    sidebar.classList.contains('is-open') ? close() : open();
  });
  scrim.addEventListener('click', close);
  sidebar.querySelectorAll('.navlink').forEach(link => {
    link.addEventListener('click', close);
  });
}

/* ---------- theme toggle (persisted) ---------- */
function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const icon = btn ? btn.querySelector('i') : null;
  const saved = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setTheme = (theme) => {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (icon) { icon.className = 'ph ph-sun'; }
    } else {
      root.removeAttribute('data-theme');
      if (icon) { icon.className = 'ph ph-moon'; }
    }
  };

  setTheme(saved || (prefersDark ? 'dark' : 'light'));

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      setTheme(next);
      localStorage.setItem('portfolio-theme', next);
    });
  }
}

/* ---------- highlight active section in sidebar nav ---------- */
function initActiveNav() {
  const links = document.querySelectorAll('.navlink');
  const sections = Array.from(links)
    .map(link => document.getElementById(link.dataset.section))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(link => {
        link.classList.toggle('is-active', link.dataset.section === id);
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* ---------- daily drivers marquee ---------- */
function initDriversMarquee() {
  const track = document.getElementById('driversTrack');
  if (!track) return;

  const tools = [
    { name: 'Shopify', icon: 'ph-shopping-bag-open', color: '#95BF47' },
    { name: 'Shopify Flow', icon: 'ph-flow-arrow', color: '#5A8A2E' },
    { name: 'Matrixify', icon: 'ph-table', color: '#3B4CCA' },
    { name: 'Klaviyo', icon: 'ph-envelope-simple-open', color: '#1A1A1A' },
    { name: 'DSers', icon: 'ph-package', color: '#FF6A00' },
    { name: 'Slack', icon: 'ph-slack-logo', color: '#4A154B' },
    { name: 'Gorgias', icon: 'ph-headset', color: '#6C5CE7' },
    { name: 'Claude', icon: 'ph-sparkle', color: '#060070' },
  ];

  const renderChip = (tool) => `
    <span class="tool-chip">
      <span class="tool-chip__logo" style="background:${tool.color}">
        <i class="ph-bold ${tool.icon}"></i>
      </span>
      ${tool.name}
    </span>`;

  // duplicate the list once for a seamless -50% loop
  const html = tools.map(renderChip).join('') + tools.map(renderChip).join('');
  track.innerHTML = html;
}

/* ---------- 3D tilt hover effect for cards ---------- */
function initCardTilt() {
  const isTouch = window.matchMedia('(hover: none)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || reduceMotion) return;

  const cards = document.querySelectorAll('.card--tilt, .project');
  const maxTilt = 6; // degrees

  cards.forEach(card => {
    card.style.transformStyle = 'preserve-3d';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = px * maxTilt * 2;
      const rotateX = py * -maxTilt * 2;
      card.style.transform =
        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
  });
}

/* ---------- contact form (static demo — wire to Formspree/API of choice) ---------- */
function initContactForm() {
  const form = document.getElementById('contactFormEl');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: replace with a real submission endpoint (e.g. Formspree, Getform,
    // or a serverless function) — this is a static front end with no backend.
    if (note) {
      note.textContent = 'Thanks! This form is a front-end demo — connect it to Formspree or your own endpoint to receive messages.';
    }
    form.reset();
  });
}
