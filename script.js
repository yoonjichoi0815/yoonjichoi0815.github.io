// Highlight active nav link based on current page
(function () {
  const links = document.querySelectorAll('.topbar-nav a');
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.split('/').pop().split('#')[0];
    if (linkFile === currentFile) {
      link.classList.add('active');
    }
  });
})();

// Mobile menu toggle
var menuToggle = document.getElementById('menuToggle');
var topbarNav = document.querySelector('.topbar-nav');

if (menuToggle && topbarNav) {
  menuToggle.addEventListener('click', function () {
    topbarNav.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!menuToggle.contains(e.target) && !topbarNav.contains(e.target)) {
      topbarNav.classList.remove('open');
    }
  });

  // Close menu when a nav link is clicked (mobile)
  topbarNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      topbarNav.classList.remove('open');
    });
  });
}
