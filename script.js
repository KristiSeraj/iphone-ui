"use strict";

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('textClock').innerHTML = h + ":" + m;
  document.getElementById('fullTime').innerHTML = dayNames[today.getDay()] + ", " + monthNames[today.getMonth()] + " " + today.getDate();
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }

  ;
  return i;
}