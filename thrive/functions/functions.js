function open_read_more2() {
  //Runs if screen size is smaller than 500px
  if (window.innerWidth < 500) {
    document.getElementById("s2-readMore-id").style.width = "100%";         //Sets readmoreBox to 100% of screen
    document.getElementById("section2-id").style.marginLeft = "100%";       //Press together the section2 screen to 0 width
    document.getElementById("s2-readMore-id").style.opacity = "1";          //Setting opacity of readmoreBox to visible
    document.getElementById("section2-textbox-id").style.left = "100%";     //PushesBox the text away from the screen
    document.getElementById("s2-readMore-id").style.zIndex = "1";
  }
  else {
    document.getElementById("s2-readMore-id").style.width = "30%";      //Setting readmoreBox to 30% of the screen
    document.getElementById("s2-readMore-id").style.opacity = "1";      //Makes readmoreBox more smothly visible
    document.getElementById("section2-id").style.marginLeft = "30%";    //Section2 screen makes room for readmoreBox
    document.getElementById("section2-id").style.marginRight = "-30%";  //Makes 30% of the section2 screen go outside on the right side
    document.getElementById("s2-shade-layer-id").style.opacity = "0.7"; //Makes ovralaying black background 70% visible
    document.getElementById("s2-readMore-id").style.zIndex = "1";
  }

}
function close_read_more2() {
  document.getElementById("s2-readMore-id").style.width = "0";           //Makes the readmoreBox dissapear again
  document.getElementById("s2-readMore-id").style.opacity = "0";         //Makes readmore dissapear more smothly looking
  document.getElementById("s2-readMore-id").style.zIndex = "0";
  document.getElementById("section2-id").style.marginLeft= "0";          //Makes section2 screen take upp the whole screen again
  document.getElementById("section2-id").style.marginRight = "0";       //Makes section2 part of the screen that is outside fit to screen again
  document.getElementById("section2-textbox-id").style.left = "6%";     //Puts the textbox back in its original place
  document.getElementById("s2-shade-layer-id").style.opacity = "0";     //Makes the overlapping div with backgroundcolor dissapear
}
function open_read_more3() {
  if (window.innerWidth < 500) {
    document.getElementById("s3-readMore-id").style.width = "100%";
    document.getElementById("s3-readMore-id").style.opacity = "1";
    document.getElementById("section3-id").style.marginLeft = "100%";
    document.getElementById("section3-textbox-id").style.left = "100%";
    document.getElementById("s3-readMore-id").style.zIndex = "1";
  }
  else {
    document.getElementById("s3-readMore-id").style.width = "30%";
    document.getElementById("s3-readMore-id").style.opacity = "1";
    document.getElementById("section3-id").style.marginLeft = "30%";
    document.getElementById("section3-id").style.marginRight = "-30%";
    document.getElementById("s3-shade-layer-id").style.opacity = "0.7";
    document.getElementById("section3-textbox-id").style.marginLeft = "-33%";
    document.getElementById("s3-readMore-id").style.zIndex = "1";
  }
}
function close_read_more3() {

  document.getElementById("s3-readMore-id").style.width = "0";
  document.getElementById("s3-readMore-id").style.opacity = "0";
  document.getElementById("section3-id").style.marginLeft= "0";
  document.getElementById("s3-shade-layer-id").style.opacity = "0";
  document.getElementById("section3-id").style.marginRight = "0";
  document.getElementById("section3-textbox-id").style.marginLeft = "0";
  document.getElementById("s3-readMore-id").style.zIndex = "0";
  if (window.innerWidth > 500) {
    document.getElementById("section3-textbox-id").style.left = "66%";
  }
  else {
    document.getElementById("section3-textbox-id").style.left = "6%";
  }
}

function manual_play(){
  if (playing === false) {
    document.getElementById("play-pause").classList.remove("pause");
    document.getElementById("play-pause").classList.add("play");

    playSlideshow();
    setTimeout(function() {
      document.getElementById("play-pause").classList.remove("play");
      document.getElementById("play-pause").classList.add("showplay");
    }, 2000);
    nextSlide();
  }
  else if (playing === true) {
    document.getElementById("play-pause").classList.add("pause");
    document.getElementById("play-pause").classList.remove("showplay");
    pauseSlideshow();
  }
}
function playSlideshow() {
  playing = true;
  slideInterval = setInterval(nextSlide,4000);
}
function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}
function nextSlide() {
  goToSlide(currentSlide+1);
}
function goToSlide(n) {
  slides[currentSlide].className = 'slides';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slides showing';
  set_circles(currentSlide);
}
function jump_to_slide(n){
  document.getElementById("play-pause").classList.add("pause");
  document.getElementById("play-pause").classList.remove("showplay");
  pauseSlideshow();
  goToSlide(n);
}
function set_circles(n){
  reset_circles();
  switch (n) {
    case 0:
    document.getElementById("circle1").style.background = "black";
    break;
    case 1:
    document.getElementById("circle2").style.background = "black";
    break;
    case 2:
    document.getElementById("circle3").style.background = "black";
    break;
    case 3:
    document.getElementById("circle4").style.background = "black";
    break;
    default:
    reset_circles();
  }
}
function reset_circles(){
  document.getElementById("circle1").style.background = "transparent";
  document.getElementById("circle2").style.background = "transparent";
  document.getElementById("circle3").style.background = "transparent";
  document.getElementById("circle4").style.background = "transparent";
}
