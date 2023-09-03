const dayInput = document.querySelector(".day");
const hourInput = document.querySelector(".hours");
const minuteInput = document.querySelector(".minute");
const secondInput = document.querySelector(".second");

const countdown = function () {
  const countdate = new Date("September 15, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countdate - now;

  //how the time work
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / min);
  const textSec = Math.floor((gap % min) / sec);

  dayInput.textContent = textDay;
  hourInput.textContent = textHour;
  minuteInput.textContent = textMinute;
  secondInput.textContent = textSec;
};
countdown();
setInterval(countdown, 1000);
