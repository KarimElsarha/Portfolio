// Light motion: reading progress, scroll reveal, number count-up.
// Content stays fully visible if this file fails to load or the user prefers reduced motion.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reading-progress bar
  var bar = document.getElementById('progress');
  if (bar) {
    if (reduce) {
      bar.hidden = true;
    } else {
      var ticking = false;
      var update = function () {
        var max = root.scrollHeight - window.innerHeight;
        bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
        ticking = false;
      };
      var onScroll = function () {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      update();
    }
  }

  if (reduce || !('IntersectionObserver' in window)) return;
  root.classList.add('js-motion');

  // Scroll reveal: fade and rise once
  var revealSel = [
    'section:not(.hero) .section-head', '.about-card', '.about-text', '.tl-item', '.cs-tabs',
    '.skill-card', '.proj-row', '.edu-card', '.spot', '.train-card',
    '.contact-grid', '.availability', '.contact-downloads'
  ].join(',');
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll(revealSel).forEach(function (el) {
    el.classList.add('reveal');
    revealObs.observe(el);
  });

  // Count-up for the About numbers (final value is already in the HTML)
  var countObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      countObs.unobserve(e.target);
      var el = e.target;
      var final = el.textContent;
      var m = final.match(/^(\D*)(\d+)(\D*)$/);
      if (!m) return;
      var target = parseInt(m[2], 10);
      var start = null;
      var step = function (t) {
        if (start === null) start = t;
        var p = Math.min((t - start) / 1200, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = m[1] + Math.round(target * eased) + m[3];
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = final;
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat .num').forEach(function (el) { countObs.observe(el); });
})();
