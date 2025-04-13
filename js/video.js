var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	video.load();

	document.querySelector("#volume").innerHTML = (video.volume * 100) +"%";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate.toFixed(5));
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate.toFixed(5));
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted = false) {
		this.innterHTML = "Mute";
	} else {
		video.muted = true;
		this.innterHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume Slider");
	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});
