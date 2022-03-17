const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toolgeActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("active");
  }
}

panels.forEach((el) => {
  el.addEventListener("click", toggleOpen);
});

panels.forEach((el) => {
  el.addEventListener("transitionend", toolgeActive);
});
