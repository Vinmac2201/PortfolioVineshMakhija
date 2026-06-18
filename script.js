// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close mobile nav after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ============================================
// Navbar shadow on scroll
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = 'rgba(58, 69, 86, 0.8)';
  } else {
    navbar.style.borderBottomColor = 'rgba(42, 51, 68, 1)';
  }
});

// ============================================
// Scroll-reveal for sections (respects reduced motion)
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const revealEls = document.querySelectorAll('.instrument-card, .skill-panel, .project-card');

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// ============================================
// Contact form — Formspree submission
// ============================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('.form-submit');
  const submitText = contactForm.querySelector('.submit-text');
  const originalText = submitText.textContent;

  // Guard: remind dev to set the real Formspree endpoint
  if (contactForm.action.includes('YOUR_FORM_ID')) {
    formNote.textContent = 'Form endpoint not configured yet — see setup notes.';
    formNote.className = 'form-note error';
    return;
  }

  submitText.textContent = 'Sending…';
  submitBtn.disabled = true;
  formNote.textContent = '';
  formNote.className = 'form-note';

  try {
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formNote.textContent = 'Message sent — thanks, I\'ll get back to you soon.';
      formNote.className = 'form-note success';
      contactForm.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (err) {
    formNote.textContent = 'Something went wrong — please email me directly instead.';
    formNote.className = 'form-note error';
  } finally {
    submitText.textContent = originalText;
    submitBtn.disabled = false;
  }
});
