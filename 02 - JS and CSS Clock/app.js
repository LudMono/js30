const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const setDate = () => {
  const dateNow = new Date();

  const hours = dateNow.getHours();
  const mins = dateNow.getMinutes();
  const seconds = dateNow.getSeconds();

  const minDeg = (mins / 60) * 360 + 90;
  const secondsDeg = (seconds / 60) * 360 + 90;
  const hoursDeg = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
};

setInterval(setDate, 1000);
