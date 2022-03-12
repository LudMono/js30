const inputs = document.querySelectorAll(".controls input");

function updateHandler() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener("mousemove", updateHandler);
});

inputs.forEach((input) => {
  input.addEventListener("change", updateHandler);
});
