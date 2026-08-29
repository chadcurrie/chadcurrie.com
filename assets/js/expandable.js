(function () {
  var toggles = document.querySelectorAll(".expandable__toggle");

  toggles.forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute("aria-controls"));
    if (!target) return;

    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      target.classList.toggle("is-expanded", !expanded);
      btn.textContent = expanded ? "Show more ↓" : "Show less ↑";
    });
  });
})();
