const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const clock = document.getElementById("clock");
const day = document.getElementById("day");

function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  day.textContent = days[date.getDay()];

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let html = `<span class="hours">${hours}</span>:
    <span class="minutes">${minutes}</span>:
    <span class="seconds">${seconds}</span>`;

  clock.innerHTML = html;
}

setInterval(updateClock, 1000);

updateClock();
