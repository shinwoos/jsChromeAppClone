const clock = document.querySelector("#clock");

function allDay() {
  const xmasTime = new Date("2022-12-25");
  const todayTime = new Date();

  const all = xmasTime - todayTime;

  const allDays = String(Math.floor(all / (1000 * 60 * 60 * 24))).padStart(
    3,
    "0"
  );
  const allHours = String(Math.floor(all / (1000 * 60 * 60)) % 24).padStart(
    2,
    "0"
  );
  const allMinutes = String(Math.floor(all / (1000 * 60)) % 24).padStart(
    2,
    "0"
  );
  const allSeconds = String(Math.floor((all / 1000) % 60)).padStart(2, "0");

  clock.innerText = `${allDays}d ${allHours}h ${allMinutes}m ${allSeconds}s`;
}

allDay();
setInterval(allDay, 1000);
