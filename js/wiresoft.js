var ctx;

(function() {
	console.log("Loading wiresoft...");
	if (!init()) {
		console.error("Did not initialize");
	} else {
		console.log("Loaded wiresoft.");
	}
	resizeCanvas();
}());

function init() {
	canvas = document.getElementById("wiresoft-main-render-elements");
	if (!canvas) {
		console.error("Failed to locate canvas");
		return false;
	}
	ctx = canvas.getContext("2d");
	if (!ctx) {
		console.error("Failed to get canvas context");
		return false;
	}
	window.addEventListener("resize", resizeCanvas);
	return true;
}

function resizeCanvas() {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	renderWiresoft();
	console.log("Resize canvas");
}

function clearCanvas() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function renderWiresoft() {
	clearCanvas();
}