let myDate = new Date("03/30/ 2023 00:00:00");

let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let day = hours * 24;

function countDown() {
  let today = new Date();
  let timespan = myDate - today;

  let daysLeft = Math.floor(timespan / day);
  let hoursLeft = Math.floor((timespan % day) / hours);
  let minutesLeft = Math.floor((timespan % hours) / minutes);
  let secondsLeft = Math.floor((timespan % minutes) / seconds);
  console.log(daysLeft, hoursLeft, minutesLeft), secondsLeft;

  document.querySelector(".days").innerHTML = daysLeft;
  document.querySelector(".hours").innerHTML = hoursLeft;
  document.querySelector(".minutes").innerHTML = minutesLeft;
  document.querySelector(".seconds").innerHTML = secondsLeft;
}

let interval = setInterval(countDown, seconds);
console.log(interval);
