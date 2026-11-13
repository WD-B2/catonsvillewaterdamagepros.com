(function () {
  "use strict";
  var root = document.documentElement;
  root.className = root.className.replace("no-js", "js");
  var BP = 768;
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("mob-close");
  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    root.style.overflow = "hidden";
  }
  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    root.style.overflow = "";
  }
  if (toggle && drawer && overlay) {
    toggle.addEventListener("click", openMenu);
    overlay.addEventListener("click", closeMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > BP) closeMenu();
    });
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener("click", function () {
      var open = this.getAttribute("aria-expanded") === "true";
      var panel = this.parentNode.querySelector(".faq-a");
      this.setAttribute("aria-expanded", open ? "false" : "true");
      panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
    });
  }
  window.addEventListener("resize", function () {
    var openQs = document.querySelectorAll('.faq-q[aria-expanded="true"]');
    for (var j = 0; j < openQs.length; j++) {
      var p = openQs[j].parentNode.querySelector(".faq-a");
      p.style.maxHeight = p.scrollHeight + "px";
    }
  });
})();
