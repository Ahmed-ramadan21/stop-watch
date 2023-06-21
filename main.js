var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;
let ptnStart = document.getElementById("start")

function start() {
  timer = true;
  ptnStart.setAttribute("disabled", "")
  stopWatch();
}

function stop() {
  timer = false;
  ptnStart.removeAttribute("disabled")
}

function reset() {
  timer = false;
  ptnStart.removeAttribute("disabled")


  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopWatch() {
  if (timer == true) {
    count++;

    if (count == 100) {
      sec++;
      count = 0;
    }

    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    hrString = hr < 10 ? "0" + hrString : hrString;
    minString = min < 10 ? "0" + minString : minString;
    secString = sec < 10 ? "0" + secString : secString;
    countString = count < 10 ? "0" + countString : countString;
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;

    setTimeout("stopWatch()", 10);
  }
}

function koko() {
var date = new Date();
  var hours = date.getHours();
  var minut = date.getMinutes();
  var second = date.getSeconds();
  second = second < 10 ? "0" + second : second;
  hours = hours < 10 ? "0" + hours : hours;
  minut = minut < 10 ? "0" + minut : minut;
  second = hours > 12 ? second + ":" + "PM" : second + ":" + "AM"
  if (hours > 12) {
    hours = hours - 12;
  }
  var time = hours + ":" + minut;
  document.getElementById("mo").innerHTML = time;
  document.getElementById("sk").innerHTML = second
  setTimeout(koko, 1000);
}
koko();
