var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
   var icon = document.querySelector('.sound');
   icon.style.backgroundImage = 'url("img/pause.png")';

  isPlaying = true;
};
myAudio.onpause = function() {
   var icon = document.querySelector('.sound');
   icon.style.backgroundImage = 'url("img/play.png")';

  isPlaying = false;
};
