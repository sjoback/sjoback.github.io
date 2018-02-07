var slides = document.querySelectorAll(".slides"),
	    currentSlide = 0,
	    playing = true,
	    btnPrev = document.querySelector(".prev"),
	    btnNext = document.querySelector(".next"),
	    btnControl = document.querySelector(".controls"),
	    timer = setInterval(goNext,5000);
    //上一步
	function goPrev() {
		goToSlides(currentSlide - 1);
	};
	//下一步
	function goNext() {
		goToSlides(currentSlide + 1);
	};
	//主动画
	function goToSlides(n) {
		slides[currentSlide].className = "slides";
		currentSlide = (n+slides.length) % slides.length;
		slides[currentSlide].className = "slides show";
	};
	//播放动画
	function playSlides() {
		btnControl.classList.remove("play");
		playing = true;
		timer = setInterval(goNext,5000);
	};
	//停止动画
	function pauseSlides() {
		btnControl.classList.add("play");
		playing = false;
		clearInterval(timer);
	};
	//自动播放
	btnControl.onclick = function(){
		if(playing){
			pauseSlides();
		}else{
			playSlides();
		}
	};
	//点击下一步
	btnNext.onclick = function(){
		pauseSlides();
		goNext();
	};
	//点击上一步
	btnPrev.onclick = function(){
		pauseSlides();
		goPrev();
	};
