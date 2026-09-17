document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".sheet-nav__toggle");
  var nav = document.querySelector(".sheet-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
});

/* /projects/ skill filter. Rows carry data-skills; chips carry data-skill. The active
   skill is mirrored in the URL (?skill=fabrication) so /skills/ can link straight to a
   filtered view. */
document.addEventListener("DOMContentLoaded", function () {
  var bar = document.querySelector(".skill-filter");
  if (!bar) return;
  var rows = [].slice.call(document.querySelectorAll(".project-table tbody tr"));
  var buttons = [].slice.call(bar.querySelectorAll("button[data-skill]"));
  var count = bar.querySelector(".skill-filter__count");
  if (!rows.length || !buttons.length) return;

  function apply(id) {
    var shown = 0;
    rows.forEach(function (row) {
      var skills = " " + (row.getAttribute("data-skills") || "") + " ";
      var match = !id || skills.indexOf(" " + id + " ") !== -1;
      row.classList.toggle("is-hidden", !match);
      if (match) shown++;
    });
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-skill") === id ? "true" : "false");
    });
    if (count) {
      count.textContent = id ? shown + " of " + rows.length + " projects" : rows.length + " projects";
    }
    bar.setAttribute("data-active", id);
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var id = b.getAttribute("data-skill");
      if (id && id === bar.getAttribute("data-active")) id = "";
      apply(id);
      if (window.history && window.history.replaceState) {
        var url = new URL(window.location.href);
        if (id) url.searchParams.set("skill", id);
        else url.searchParams.delete("skill");
        window.history.replaceState(null, "", url.toString());
      }
    });
  });

  var start = "";
  try {
    start = new URLSearchParams(window.location.search).get("skill") || "";
  } catch (e) {
    start = "";
  }
  if (start && !bar.querySelector('button[data-skill="' + start + '"]')) start = "";
  apply(start);
});
