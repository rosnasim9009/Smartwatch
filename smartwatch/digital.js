function show()
{
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  var session = "AM";

  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  document.getElementById('t').innerHTML =h + ":" + m +":" +s+ " " +session;
  var t = setTimeout(show, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
