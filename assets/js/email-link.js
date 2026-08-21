(function () {
  var links = document.querySelectorAll(".js-email[data-mail-r]");
  links.forEach(function (el) {
    var address = el.getAttribute("data-mail-r").split("").reverse().join("");
    el.href = "mailto:" + address;
    el.textContent = address;
    el.removeAttribute("data-mail-r");
  });
})();
