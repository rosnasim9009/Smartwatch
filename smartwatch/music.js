function play()
{
  var p=document.getElementById('two');
  document.getElementById('play').style.visibility="hidden";
  p.play();
  document.getElementById('pause').style.visibility="visible";
}

function pause()
{
  var p=document.getElementById('two');
  document.getElementById('pause').style.visibility="hidden";
  p.pause();
  document.getElementById('play').style.visibility="visible";
}

function prev()
{
  document.getElementById('pause').style.visibility="hidden";
  var p=document.getElementById('three');
  var q=document.getElementById('two');
  q.pause();
  p.play();
  document.getElementById('play').style.visibility="visible";
}

function next()
{
  document.getElementById('pause').style.visibility="hidden";
  var p=document.getElementById('one');
  var q=document.getElementById('two');
  q.pause();
  p.play();
  document.getElementById('play').style.visibility="visible";
}
