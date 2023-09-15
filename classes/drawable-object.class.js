class DrawableObject {
	
	x = 120;
	y = 250;
	height = 150;
	width = 150;
	img;
	imageCache = {};
	currentImage = 0;
	energy = 20;
	

	loadImage(path) {
		this.img = new Image(); 	
		this.img.src = path;
	};

	
	loadImages(arr) {
		arr.forEach((path) => {
			let img = new Image();
			img.src = path;
			this.imageCache[path] = img;
		});
	};


	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	};

	
	drawFrame(ctx) {
		if (this instanceof PufferFish || this instanceof Endboss || this instanceof Character || this instanceof CollectableCoin || this instanceof PoisonBottle || this instanceof JellyFish) {
			ctx.beginPath();
			ctx.lineWidth = '5';
			ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
			ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width + this.offsetWidth, this.height + this.offsetHeight);
			ctx.stroke();
		}
	};
}