document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('nav ul');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navList.classList.toggle('show');
      const icon = mobileBtn.querySelector('i');
      if (navList.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => observer.observe(el));

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (navList.classList.contains('show')) {
          navList.classList.remove('show');
          mobileBtn.querySelector('i').classList.remove('fa-times');
          mobileBtn.querySelector('i').classList.add('fa-bars');
        }
      }
    });
  });

  // Sticky Header Shadow on Scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
      header.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
    }
  });
});
