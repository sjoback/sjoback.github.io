var memory_array = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;


Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory-board').innerHTML = output;
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = 'transparent';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
               show();
               clearInterval(myTimer);
				}
			} else {
            function flip2Back(){
				    // // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
                tile_1.style.background = '#ff9999';
            	    tile_1.innerHTML = "";
                tile_2.style.background = '#ff9999';
            	    tile_2.innerHTML = "";
				    // // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}

// Play-function to start the game
var playGame = document.querySelector(".play");
playGame.addEventListener("click", play);

function play() {
   newBoard();
   clock();
   document.getElementById("myAudio").play();
   document.querySelector(".sound-btn").classList.remove("opacity");
   document.querySelector(".sound-btn").classList.add("z-index");
   document.querySelector(".sound").classList.remove("opacity");
   document.querySelector(".sound").classList.add("z-index");
   document.getElementById("memory-board").classList.remove("opacity");
   document.getElementById("memory-board").classList.remove("z-index");
   document.querySelector(".play-menu").classList.add("opacity");
   document.querySelector(".play-menu").classList.remove("z-index");
   document.querySelector(".time").classList.remove("opacity");
   document.querySelector(".overlay").classList.add("opacity");
}


// Shows menu when time has run out
var tryAgain = document.querySelector(".tryAgain");
tryAgain.addEventListener("click", playAgain);

function noTime() {
   // document.querySelector(".hurry-up").classList.add("opacity");
   document.querySelector(".time-menu").classList.remove("opacity");
   document.querySelector(".time-menu").classList.add("z-index");
   document.querySelector(".overlay").classList.remove("opacity");
   document.querySelector(".overlay").classList.remove("x-index");
   document.getElementById("memory-board").classList.add("x-index");
   document.querySelector(".time").classList.add("x-index");
}

// Shows end-menu upon completing board
function show() {
   document.querySelector(".hurry-up").classList.add("opacity");
   document.querySelector(".end-menu").classList.remove("opacity");
   document.querySelector(".end-menu").classList.add("z-index");
   document.querySelector(".overlay").classList.remove("opacity");
   document.querySelector(".time").classList.add("x-index");
   document.getElementById("memory-board").classList.add("x-index");
}

// Play-again function
var replayGame = document.querySelector(".replay");
replayGame.addEventListener("click", playAgain);

function playAgain() {
   newBoard();
   clock();
   document.querySelector(".hurry-up").classList.add("opacity");
   document.querySelector(".end-menu").classList.add("opacity");
   document.querySelector(".end-menu").classList.remove("z-index");
   document.querySelector(".overlay").classList.add("opacity");
   document.querySelector(".time-menu").classList.add("opacity");
   document.querySelector(".time-menu").classList.remove("z-index");
   document.getElementById("memory-board").classList.remove("x-index");
   document.querySelector(".time").classList.remove("opacity");
}


// Timer-function
var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 40;

  function myClock() {
    document.querySelector(".time").innerHTML = --c;
    document.querySelector(".time1").innerHTML = c;

    if (c == 0) {
      clearInterval(myTimer);
      noTime();
    }

    if (c < 20) {
      document.querySelector(".hurry-up").classList.remove("opacity");
   }
  }
}

// Sound-function
// var audio = document.querySelector(".sound");
// replayGame.addEventListener("click", togglePlay);

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
   icon.style.backgroundImage = 'url("img/sound.png")';
   // icon.style.backgroundSize = 'background-size: cover;';

   icon.innerHTML = "";
  isPlaying = true;
};
myAudio.onpause = function() {
   var icon = document.querySelector('.sound');
   icon.style.backgroundImage = 'url("img/soundoff.png")';
   icon.innerHTML = "";
  isPlaying = false;
};
