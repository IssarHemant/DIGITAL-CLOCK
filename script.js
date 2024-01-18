let Hours = document.getElementById("hrs");
let Minutes = document.getElementById("min");
let Sec = document.getElementById("sec");
setInterval(() => {
  let currenttime = new Date();
  Hours.innerHTML =
    (currenttime.getHours() < 10 ? "0" : "") + currenttime.getHours();
  Minutes.innerHTML =
    (currenttime.getMinutes() < 10 ? "0" : "") + currenttime.getMinutes();
  Sec.innerHTML =
    (currenttime.getSeconds() < 10 ? "0" : "") + currenttime.getSeconds();
}, 1000);
