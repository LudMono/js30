const keysList = document.querySelectorAll(".key");

const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const addKeyTransition = (e) => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.add("playing");
};

const removeKeyTransition = (e, el) => {
  if (e.propertyName !== "transform") return;
  el.classList.remove("playing");
};

keysList.forEach((el) => {
  el.addEventListener("transitionend", (e) => {
    removeKeyTransition(e, el);
  });
});

window.addEventListener("keydown", (e) => {
  playAudio(e);
  addKeyTransition(e);
});
