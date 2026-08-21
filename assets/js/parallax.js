(function () {
  var MAX_OFFSET = 40; // px of drift at most, in either direction

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // A .media figure moves its <img> (so the figcaption stays put); anything
  // else wearing the class (e.g. a .pullquote) moves itself.
  var targets = Array.prototype.map.call(
    document.querySelectorAll(".media--parallax"),
    function (el) { return el.querySelector("img") || el; }
  );
  if (!targets.length) return;

  var ticking = false;

  function update() {
    var vh = window.innerHeight;
    targets.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var elementCenter = rect.top + rect.height / 2;
      var distanceFromCenter = elementCenter - vh / 2;
      var progress = distanceFromCenter / (vh / 2 + rect.height / 2);
      progress = Math.max(-1, Math.min(1, progress));
      el.style.transform = "translateY(" + (progress * MAX_OFFSET).toFixed(1) + "px)";
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
})();
