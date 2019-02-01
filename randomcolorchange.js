

function init(){
	var h1tags = document.getElementsByTagName("h1");
	h1tags[0].onclick = changecolor;

}

function changecolor(){
	// this: reference to h1 tag
	this.innerHTML = "Click again!";

	// to generate random hex code for different colors
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
	this.style.color = randomcolor;
}

function toggleImg(){
	var img = document.getElementById("imgCat");
	var isImgVisible = img.style.visibility != "visible";
	img.style.visibility = isImgVisible ? "visible" : "hidden";

}

// to execute a function when a page is loaded:
onload = init;
