class StatusBarHealth extends DrawableObject {

	x = 132;
	y = 28;
	height = 55;
	width = 55;
	
	IMAGES_HEART = [
		'./img/4. Marcadores/green/100_  copia 3.png',
	];


	constructor() {
		super().loadImage(this.IMAGES_HEART[0])
		this.loadImages(this.IMAGES_HEART);
	};
	

	decreaseHealth(energy) {
		this.energy = energy;
	};


	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.fillText([this.energy], 180, 72);
		ctx.font = '36px luckiest-guy';
		ctx.fillStyle = "white";
	};
}