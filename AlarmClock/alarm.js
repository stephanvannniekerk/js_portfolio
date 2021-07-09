var wakeUpTime = document.getElementById("wakeUpTime");
var lunchTime = document.getElementById("lunchTime");

function wakeUpTime() {
  wakeuptime = wakeUpTime.value;
  sound = document.getElementById("alarm-sound");
}

function lunchTime() {
  lunchtime = lunchTime.value;
  sound = document.getElementById("alarm-sound");
}

function time() {
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time = hour + ":" + min + ":" + sec;

  document.getElementById("timer").innerHTML = time;

  changepicture();

  //   if (hour == getElementById(wakeUpTimeSelector)) {
  //     wakeUpEvent();
  //   } else if (hour == getElementById(lunchTimeSelector)) {
  //     lunchEvent();
  //   }
}
function changepicture() {
  var currentTime = new Date().getHours();
  if (currentTime >= 7 && currentTime < 20) {
    document.body.background =
      "https://images.all-free-download.com/images/graphiclarge/sunny_day_background_vector_311961.jpg";
  } else {
    document.body.background =
      "https://images.all-free-download.com/images/graphiclarge/charming_night_vector_background_536572.jpg";
  }
}

setInterval(time, 1000);
