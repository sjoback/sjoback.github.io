
function startGame(){
	document.getElementById("canvas").classList.remove("x-index");
	document.querySelector(".play-game").classList.add("x-index");
	document.querySelector(".count-down").classList.add("opacity");
	document.querySelector(".exit-game").classList.remove("x-index");
	document.querySelector(".exit-game").classList.remove("opacity");
	document.querySelector(".exit-game").classList.add("z-index");
}
function exitGame(){
	document.getElementById("canvas").classList.add("x-index");
	document.querySelector(".play-game").classList.remove("x-index");
	document.querySelector(".count-down").classList.add("opacity");
	document.querySelector(".exit-game").classList.add("x-index");
	document.querySelector(".exit-game").classList.add("opacity");
	document.querySelector(".exit-game").classList.remove("z-index");
}

var myTimer;
function clock() {
	document.querySelector(".count-down").classList.remove("opacity");
	document.querySelector(".count-down").classList.remove("x-index");
	document.querySelector(".play-game").classList.add("opacity");
	document.querySelector(".play-game").classList.add("x-index");


  myTimer = setInterval(myClock, 1000);
  var c = 3;

  function myClock() {
    document.querySelector(".count-down").innerHTML = --c;

    if (c == 0) {

      clearInterval(myTimer);
      startGame();
    }
  }
}

var utils = {
	norm: function(value, min, max) {
		return (value - min) / (max - min);
	},

	lerp: function(norm, min, max) {
		return (max - min) * norm + min;
	},

	map: function(value, sourceMin, sourceMax, destMin, destMax) {
		return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax);
	},

	clamp: function(value, min, max) {
		return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	},

	distance: function(p0, p1) {
		var dx = p1.x - p0.x,
			dy = p1.y - p0.y;
		return Math.sqrt(dx * dx + dy * dy);
	},

	distanceXY: function(x0, y0, x1, y1) {
		var dx = x1 - x0,
			dy = y1 - y0;
		return Math.sqrt(dx * dx + dy * dy);
	},

	circleCollision: function(c0, c1) {
		return utils.distance(c0, c1) <= c0.radius + c1.radius;
	},

	circlePointCollision: function(x, y, circle) {
		return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
	},

	pointInRect: function(x, y, rect) {
		return utils.inRange(x, rect.x, rect.x + rect.width) &&
		       utils.inRange(y, rect.y, rect.y + rect.height);
	},

	inRange: function(value, min, max) {
		return value >= Math.min(min, max) && value <= Math.max(min, max);
	},

	rangeIntersect: function(min0, max0, min1, max1) {
		return Math.max(min0, max0) >= Math.min(min1, max1) &&
			   Math.min(min0, max0) <= Math.max(min1, max1);
	},

	rectIntersect: function(r0, r1) {
		return utils.rangeIntersect(r0.x, r0.x + r0.w, r1.x, r1.x + r1.w) &&
			   utils.rangeIntersect(r0.y, r0.y + r0.h, r1.y, r1.y + r1.h);
	},

	degreesToRads: function(degrees) {
		return degrees / 180 * Math.PI;
	},

	radsToDegrees: function(radians) {
		return radians * 180 / Math.PI;
	},

	randomRange: function(min, max) {
		return min + Math.random() * (max - min);
	},

	randomInt: function(min, max) {
		return Math.floor(min + Math.random() * (max - min + 1));
	}

}

	full = {
	x:window.innerWidth,
	y:window.innerHeight
	}

// set Canvas

	canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	W= width = canvas.width = 500;
	H = height = canvas.height = 300;
gravity = 0.4;
	generatorStock=[];
//
// Add the Generator Here :)
//

	function randomInt(min, max) {
	    return Math.floor(min + Math.random() * (max - min + 1));
	}

		function clamp(value, min, max) {
		return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	}
	function particle(x, y,type) {
	    this.radius = randomInt(10, 20);
	    this.x = x;
	    this.y = y;
	    this.vx = randomInt(-5,0);
	    this.vy = randomInt(-5, 0);
		this.type=type;
	}
	particle.prototype.update = function() {
	    this.x += this.vx;
	    this.y += this.vy;
	    this.vy -= 0.1;
	    this.vx *= 0.99;
	    this.vy *= 0.99;
	    this.radius -= .5;
	    context.beginPath();
		context.font = this.radius+"px arial";
		context.textAlign = "center";
		if(this.type === undefined){	  context.fillStyle="white";

	  context.fillRect(this.x-this.radius, this.y-this.radius, this.radius,this.radius);

	    context.fill();
	  context.fillStyle="black";

		}

				if(this.type !== undefined){

				context.fillText(this.type, this.x,this.y);
	    context.stroke();

		}

	    context.closePath();
	}

	function particleGenerator(x, y, w, h, number,text) {
	    // particle will spawn in this aera
	    this.x = x;
	    this.y = y;
	    this.w = w;
	    this.h = h;
	    this.number = number;
	    this.particles = [];
		this.text=text;
	}
	particleGenerator.prototype.animate = function() {
	    context.beginPath();
	    context.strokeRect(this.x, this.y, this.w, this.h);



	    if (this.particles.length < this.number ) {
	        this.particles.push(new particle(clamp(randomInt(this.x, this.w+this.x),this.x,this.w+this.x),

			clamp(randomInt(this.y,this.h+this.y),this.y,this.h+this.y),this.text));
	    }
	    for (var i = 0; i < this.particles.length; i++) {
	        p = this.particles[i];
	        p.update();


	        if (p.radius < 1 ) {
			p.radius = 0;
	        if (!player1.jumping) {

			this.particles[i] = new particle(clamp(randomInt(this.x, this.w+this.x),this.x,this.w+this.x),
			clamp(randomInt(this.y,this.h+this.y),this.y,this.h+this.y),this.text);
	        }}
	    }
	}
    // colors = [
    //   '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    //   '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    //   '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    //   '#FF5722', '#795548'
    // ];
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
keys = [];

function playerObj(x, y, w, h,name) {
	this.name=name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 4;
    this.vx = 0;
    this.vy = -5;
	this.jumping=true;
	//	this.color = colors[Math.floor(Math.random() * colors.length)];
		this.color ="#404040";
		// this.backgroundImage = url("img/thrive.png");

}
playerObj.prototype.update = function() {

   	  context.fillStyle = this.color;

    context.fillRect(this.x,this.y,this.w,this.h);

    this.x += this.vx;
    this.y += this.vy;
    this.vy += gravity;
    this.vx*= 0.97;
    this.vy *= 0.99;

    if (keys[38] || keys[32]) {
        if (!this.jumping) {
            this.jumping = true;
            this.vy = -this.speed * 2.5;
        }
    }

	    if (keys[39]) {
        // right arrow

        if (this.vx < this.speed) {
           // this.vx++;
        }
    }


    if (keys[37]) {
        // left arrow
        if (this.vx > -this.speed) {
          //  this.vx--;
        }
		}

    if (this.y + this.h > height-100) {
        this.vy = 0;
        this.y = height - this.h-100;
        this.jumping = false;
    }


}

function solide(x, y, w, h,name) {
	this.name=name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  this.vx = -5;
    this.vy = 0;
}
solide.prototype.update = function() {

   	  context.fillStyle = "#ffffff";

    context.fillRect(this.x,this.y,this.w,this.h);
    this.x += this.vx;
    this.y += this.vy;


	}

solidestock=[];

var player1 = new playerObj(50, 20, 40, 40,"Nebraska");
	generator2 = new particleGenerator(player1.x, player1.y+40, 0, 0, 10);

score=0;
	update();

	function update() {
		context.clearRect(0, 0, width, height);
	    context.fillRect(0, H-100, W, 20);

		generator2.y = player1.y+40;
			    generator2.animate();




		context.font = 20+"px Montserrat";
		context.textAlign = "center";
		context.fillStyle="transparent";
		context.fillText("score : "+score, width/2,40);

		context.closePath();

	player1.update();


if(solidestock.length<2){

solidestock.push(new solide(width+utils.randomInt(50,500), height -140, 40, 40));

}

	  for (var i = 0; i < solidestock.length; i++) {

	  	if(solidestock[i].x+solidestock[i].w <0){
		solidestock[i].x= width +utils.randomInt(200,500);

		score +=1;

	}else{
		solidestock[i].update();
	}

		if(utils.rectIntersect(player1,solidestock[i])){

// mort :(
        player1.vy = 0;
		player1.y =height/2;
		score=0;
		solidestock[0].x= width +utils.randomInt(200,500);
		solidestock[1].x= width +utils.randomInt(200,500);
		}
	  }
		requestAnimationFrame(update);
	}
	console.log("work");
