document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".sheet-nav__toggle");
  var nav = document.querySelector(".sheet-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
});
