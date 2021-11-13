navbg = document.getElementById("navbg");
window.onscroll = function () {
  navlineanchor = document.getElementById("navlineanchor");
  headheight = navlineanchor.offsetHeight - 82;

  if (document.body.scrollTop > headheight || document.documentElement.scrollTop > headheight) {
    navbg.classList.add("show");
  } else {
    navbg.classList.remove("show");
  }
};