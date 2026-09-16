document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // 2. Active Section Highlight on Scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Reliable Email Sender (Direct to Mail Client)
  const contactForm = document.getElementById('contact-message-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const senderName = document.getElementById('userName').value.trim();
    const senderSubject = document.getElementById('userSubject').value.trim();
    const senderMessage = document.getElementById('userMsg').value.trim();

    const recipient = 'Aaminanaleem608@gmail.com';
    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${senderSubject} - ${senderName}`);
    const emailBody = encodeURIComponent(
      `Hello Aamina,\n\n${senderMessage}\n\nFrom: ${senderName}`
    );

    // Opens user's email client directly with everything filled in
    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
  });

  // 4. One-Click Copy Email Address
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('Aaminanaleem608@gmail.com').then(() => {
      copyText.textContent = "Copied to Clipboard! ✓";
      copyBtn.style.borderColor = "#34d399";
      copyBtn.style.color = "#34d399";

      setTimeout(() => {
        copyText.textContent = "Copy Email Address";
        copyBtn.style.borderColor = "";
        copyBtn.style.color = "";
      }, 3000);
    });
  });
});