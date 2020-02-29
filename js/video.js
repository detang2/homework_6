var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 + "%";
}

function playVid() { 
	video.play();
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.5;
	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 2;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 5;
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if (video.muted){
		console.log("Video Unmuted");
		video.muted = false;
	} 
	else {
		console.log("Video Muted");
		video.muted = true;
	}
}

function changeVolume() {
	var slider = document.querySelector("#volumeSlider");
	var volume = slider.value;

	console.log("Volume is ");
	document.querySelector("#volume").innerHTML = volume+"%";
}
       
function gray() { 
	myVideo.classList.add("grayscale");
	console.log("In grayscale")
}

function color() {
	myVideo.classList.remove("grayscale");
	console.log("In color") 
}
