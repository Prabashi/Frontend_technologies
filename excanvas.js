function init(){
	var canvas = document.getElementById("canvas");
	if(canvas.getContext){
		// context-gives all the functions needed to paint in canvas
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#FAEBD7";
		ctx.fillRect(0,0,canvas.width,canvas.height);


	}

}


onload = init;