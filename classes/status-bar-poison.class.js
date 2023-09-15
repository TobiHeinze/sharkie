class StatusBarPoison extends DrawableObject {

	x = 10;
	y = 15;
	height = 70;
	width = 80;
	collectedPoisonBottles = 0; 

	IMAGES_POISON = [
		'./img/4. Marcadores/green/100_ copia 5.png',
	];


	constructor() {
		super().loadImage(this.IMAGES_POISON[0])
		this.loadImages(this.IMAGES_POISON);
	};


	increaseStatusBarPoison() {
		this.collectedPoisonBottles += 1;
	};
	

	decreaseStatusBarPoison() {
		this.collectedPoisonBottles -= 1;
		if(this.collectedPoisonBottles < 0) {
			this.collectedPoisonBottles = 0;
		}
	};


	draw(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.fillText([this.collectedPoisonBottles], 70, 72);
		ctx.font = '36px luckiest-guy';
		ctx.fillStyle = "white";
	};
}