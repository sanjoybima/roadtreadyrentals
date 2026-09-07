document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('rr-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Close mobile nav after clicking a link
  var navLinks = document.querySelectorAll('#rrNav .nav-link');
  var navCollapseEl = document.getElementById('rrNav');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapseEl.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
        bsCollapse.hide();
      }
    });
  });

  // Add subtle shadow to navbar on scroll
  var navbar = document.querySelector('.rr-navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 12) {
      navbar.style.boxShadow = '0 6px 18px rgba(31, 41, 55, 0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

});
