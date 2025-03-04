const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.width = 800;
canvas.height = 600;

function draw(e) {
	if (!isDrawing) return;
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
	if (hue >= 360) {
		hue = 0;
	}
	if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

